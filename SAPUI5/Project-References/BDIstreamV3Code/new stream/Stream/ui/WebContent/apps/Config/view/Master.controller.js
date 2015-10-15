jQuery.sap.require("sap.rds.bdi.stream.config.util.Formatter");
jQuery.sap.require("sap.rds.bdi.stream.config.util.Controller");

sap.ui.core.mvc.Controller.extend("sap.rds.bdi.stream.config.view.Master", {

    onInit : function() {
    	var that = this;
    	var configItem = stream.config;
        this.oUpdateFinishedDeferred = jQuery.Deferred();

        sap.ui.getCore().byId("list").attachEventOnce("updateFinished", function() {
            this.oUpdateFinishedDeferred.resolve();
        }, this);
        sap.ui.core.UIComponent.getRouterFor(this).attachRouteMatched(this.onRouteMatched, this);
        
        var oData = {
        		"listTitle": [],	
        };
        // Get Configuration items
        $.ajax({
        	url : "ui/WebContent/apps/Config/logic/configData.xsjs?cmd=categories&param=",
        	dataType : 'json',
        	type : 'GET',
        	async : false,
        	success : function (result) {
        		if (result) {
            		configItem.ItemMap.length = 0;
            		oData.listTitle.length = 0;
            		for(i in result) {
            			configItem.ItemMap.push(result[i]);
            			oData.listTitle.push({"title" : result[i].value});            		
            		}
        		}
        	},
        	fail : function () {
        		console.log("-------Get Configuration items fail");
        	}
        });
    	
        var oModel = new sap.ui.model.json.JSONModel();
        oModel.setData(oData);
        var oTemplate = new sap.m.ObjectListItem({
            type: "{device>/listItemType}",
            title: "{title}"
        });
        var oList = sap.ui.getCore().byId("list");
        oList.setModel(oModel);
        oList.bindItems("/listTitle", oTemplate);
        
        sap.ui.getCore().byId("list").attachSelect(that.listSelectHandler, that);
    },
    
    onRouteMatched : function(oEvent) {
    	this.selectFirstItem();
    },

    listSelectHandler: function(oEvent) {
    	var configItem = stream.config;
    	//Get selected Item
    	var selectedItem = sap.ui.getCore().byId("list").getSelectedItem().getTitle();

    	for (j in configItem.ItemMap) {
    		if (selectedItem === configItem.ItemMap[j].value) {
    			configItem.SelectItem = configItem.ItemMap[j].name;
    			break;
    		}
    	}

    	configItem.Detail.name = selectedItem; 	
  	    	
    	//Load the detail view in desktop
    	sap.ui.core.UIComponent.getRouterFor(this).myNavToWithoutHash("sap.rds.bdi.stream.config.view.Detail.Detail", "JS", false);
    },
    
    selectFirstItem: function() {
    	var oList = sap.ui.getCore().byId("list");
    	var aItems = oList.getItems();
    	if (aItems.length) {
    		oList.setSelectedItem(aItems[0], true);
    	}
    	this.listSelectHandler();
    },
    
    onSearch: function() {


    },
    
    onLiveChange : function() {
    	
        // add filter for search
        var aFilters = [];
        var searchString = sap.ui.getCore().byId("searchField").getValue();
        
        if (searchString && searchString.length > 0) {
            aFilters = [new sap.ui.model.Filter("title", sap.ui.model.FilterOperator.Contains, searchString)];
        }

        // update list binding
        sap.ui.getCore().byId("list").getBinding("items").filter(aFilters);
    },
});





