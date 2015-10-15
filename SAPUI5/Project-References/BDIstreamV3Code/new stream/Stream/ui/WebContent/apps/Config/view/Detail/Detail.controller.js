sap.ui.core.mvc.Controller.extend("sap.rds.bdi.stream.config.view.Detail.Detail", {
    
	onInit: function() {
		jQuery.sap.require("sap.ui.commons.MessageBox");
    	var IsSetOneIcon = true;   
    	var that = this;
    	$.ajax({
        	url : "ui/WebContent/apps/Config/logic/role.xsjs?cmd=hasRole",
        	dataType : 'json',
        	type : 'GET',
        	async : false,
        	success : function (data) {
        		if (!data) {
            		IsSetOneIcon = true;	
        		} else {
        			IsSetOneIcon = false;
        		}
        		that.setIconTab(IsSetOneIcon);
        	},
        	fail : function () {
        		console.log("-------check if has admin role fail");
        	}
        });
    	
    	this.refreshTime()
	},
	/*
	 * refresh Last Update Time
	 */
	refreshTime: function() {
    	var that = this;
    	var data = {
    			"ACTION" : "getLastUpdateTime",
    			"TYPE" : stream.config.SelectItem
    		};

    	data = JSON.stringify(data);
    	$.ajax({
   			url : "ui/WebContent/apps/Config/logic/configData.xsjs",
   			type : "POST",
   			data : data,
   			error : function(XMLHttpRequest, textStatus, errorThrown) {
   				sap.ui.commons.MessageBox.show(XMLHttpRequest.responseText, sap.ui.commons.MessageBox.Icon.ERROR, "ERROR");
   			},
   			success : function(responseJson) {
   				if (responseJson.result) {
   					var date = new Date(responseJson.year, responseJson.month, responseJson.day);
   					var options = {
   							year: "numeric", 
   							month: "long",
   							day: "numeric"
   					}
   					sap.ui.getCore().byId("oDetailHeader").setNumberUnit(that.oBundle.getText("LastUpdateDate") + ": " + date.toLocaleDateString("en-us", options));
   				} else {
   					sap.ui.getCore().byId("oDetailHeader").setNumberUnit(that.oBundle.getText("LastUpdateDate") + ": ");
   					console.log(responseJson.message);
   				}
    		}    	
   		});

    },
    
    setIconTab: function(IsSetOneIcon) {
    	var that = this;
    	var oTitle = stream.config.Detail.name;
    	var oDisplayInfoItem = new sap.m.IconTabFilter({
    		icon : "sap-icon://hint",
    		content : [ 
    	            new sap.ui.commons.TextView({
    	            	text: that.oBundle.getText("information"),                         	   
    	            }).addStyleClass("settingTitle"),
    	            new sap.ui.core.mvc.JSView("oDisplayView", {
    	            	viewName: "sap.rds.bdi.stream.config.view.Detail.displayInfo"
    	            })
    	    ]
    	});
    	var oSettingItem = new sap.m.IconTabFilter({
       	 	icon : "sap-icon://settings",
       	 	content : [ 
    	            new sap.ui.commons.TextView({
    	            	text: that.oBundle.getText("settings"),                         	   
    	            }).addStyleClass("settingTitle"),
    	            new sap.ui.core.mvc.JSView("oSettingView", {
    	            	viewName: "sap.rds.bdi.stream.config.view.Detail.defaultSetting"
    	            })
    	    ]
    	}); 
    	if (IsSetOneIcon) {
    		//Set DisplayInfo Only
    		sap.ui.getCore().byId("oDetailIconTabBar").addItem(oDisplayInfoItem);
    	} else {
    		//Set DispalyInfo and Setting Both
    		sap.ui.getCore().byId("oDetailIconTabBar").addItem(oDisplayInfoItem).addItem(oSettingItem);
    	}
    },
    
    refreshDetail: function() {
    	this.page.setTitle(this.oBundle.getText("ConfigurationOf") + " " + stream.config.Detail.name);
    	sap.ui.getCore().byId("oDetailHeader").setTitle(stream.config.Detail.name + " " + this.oBundle.getText("settings"));
    	sap.ui.getCore().byId("oDisplayView").getController().refreshTable();
    	sap.ui.getCore().byId("oSettingView").getController().refreshTable();
    }
    
    
    
    
    
    
})