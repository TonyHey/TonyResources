sap.ui.core.mvc.Controller.extend("sap.rds.bdi.stream.config.view.Detail.defaultSetting", {
    
    onInit: function() {
    	
    },
    
    onAfterRendering : function() {
    	
    },
    
    refreshTable: function() {
    	jQuery.sap.require("sap.ui.commons.MessageBox");
    	var that = this;
    	this.selectItem = stream.config.SelectItem;
    	this.itemMap = stream.config.ItemMap;
    	// set configuration button
    	var i = 0;
    	for (i in this.itemMap) {
    		if (this.selectItem === this.itemMap[i].name) {    			
    			if(this.itemMap[i].type === "EAD") {
    				if (sap.ui.getCore().byId("oDetailAddBtn") !== undefined) {
    					sap.ui.getCore().byId("oDetailAddBtn").setVisible(true);
    					sap.ui.getCore().byId("oDetailDeleteBtn").setVisible(true);
    				}
    			} else {
    				if (sap.ui.getCore().byId("oDetailAddBtn") !== undefined) {
    					sap.ui.getCore().byId("oDetailAddBtn").setVisible(false);
    					sap.ui.getCore().byId("oDetailDeleteBtn").setVisible(false);
    				}
    			}     				
    		}
    	} 
		
    	// refresh table
    	var myModel = new sap.ui.model.json.JSONModel;
    	jQuery.ajax({
    		url: "ui/WebContent/apps/Config/logic/configData.xsjs?cmd=details&param=" + stream.config.SelectItem,
    		method: "Get",
    		dataType: "json",
    		async: true,
    		success: function(data) {
    			//if Password, change its value to "******" for display
    			for (i in data)	{
    				if (data[i].viewType === "P") {
    					data[i].value = "******";
    				}	
    			}
    			var oData = {
    					Data: data
    			};
    	    	myModel.setData(oData, true);
    		},
    		error: function() {
    			console.log("Get Detail data ERROR!");
    		}
    	})				
		sap.ui.getCore().byId("oDetailTable_s").setModel(myModel);
		sap.ui.getCore().byId("oDetailTable_s").bindRows("/Data");
		
		//refresh Last Update Time
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
    }
}) 