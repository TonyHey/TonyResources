sap.ui.controller("sap.ui.demo.myFiori.view.kpiheader", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.SearchEngineAnalysis.view.kpiheader
*/
	onInit: function() {
		this.oBundle = jQuery.sap.resources({
			url : "../../../../WebContent/i18n/i18n.properties",
			locale : sap.ui.getCore().getConfiguration().getLanguage() 
		});
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.SearchEngineAnalysis.view.kpiheader
*/
    onBeforeRendering : function() {

    },

    /**
     * Called when the View has been rendered (so its HTML is part of the
     * document). Post-rendering manipulations of the HTML could be done here.
     * This hook is the same one that SAPUI5 controls get after being rendered.
     * 
     * @memberOf equipment.kpi-header
     */
    onAfterRendering : function() {
    	var that = this;
    	// Set the Model
        this.oService = "../../../../services/intelligence.xsjs?cmd=getAllServerIP";        
           
        //retrieves data for Server IP Dropdown box
           
        jQuery.proxy(this.getData(this.oService, this), this);

        //Model for Server IP
        var oModel = new sap.ui.model.json.JSONModel();
        oModel.setData(this.oData3);
         
        //Insert Server IP Dropbown box
         var oServerIP = new sap.m.Select();
         
        	 oServerIP.attachChange(
        	   jQuery.proxy(
        	              function(oEvent){                            
        	                 this.ip = oEvent.getParameters().selectedItem.mProperties.additionalText;
        	           
        	      		     map.destroyContent();
        	     			 this.refresh();
        	 }, this));
              
              oServerIP.setModel(oModel);
              
	      var oItemServerIP = new sap.ui.core.ListItem();
	      oItemServerIP.bindProperty("text", "ServerName");
	      oItemServerIP.bindProperty("additionalText", "ServerIP");
	      oServerIP.bindItems("/businessData", oItemServerIP);
	      
	      this.ip = settingsDemog.server;    	
	      this.afterDate = settingsDemog.afterDate;
	      this.beforeDate = settingsDemog.beforeDate;
    	
    	if(settingsDemog.kpi == "AgeRange")
	      {
    		this.url = "../../../../services/intelligence.xsjs?cmd=getKpiAgeAnalysis&after=" + this.afterDate + 
    	    "&before=" + this.beforeDate + "&serverIP=" + this.ip;
	      }
    	else {
    		this.url = "../../../../services/intelligence.xsjs?cmd=getKpiGenderAnalysis&after=" + this.afterDate + 
    	    "&before=" + this.beforeDate + "&serverIP=" + this.ip;
    		}
    	
        jQuery.ajax({
            url : this.url,
            dataType : "json",
            success : function(data) {
                kpiHeader.getModel().setData(data[0]);
            }
        });
    },
    
    
    /**
	 * Calls the generic function that retrieves the data from the server with the parameters for query
	 *
	 */
	getData: function(sServiceUrl, oController) {
		var that = this;
		jQuery.ajax({
			url: sServiceUrl,
			dataType: 'json',
			async : false,
			timeout: 59000,
			type: "GET",
			success: function(oResponse, textStatus, jqXHR) {
				oController.oData3 =  oResponse;
			},
			error: function(jqXHR, textStatus, errorThrown){
				if(textStatus==="timeout") {
					sap.ui.commons.MessageBox.alert(that.oBundle.getText("RequireShorterTimeMsg"), null, "Error");					
				} else {
					jQuery.sap.log.fatal("The following problem occurred: " + textStatus, jqXHR.responseText + "," + jqXHR.status +"," + jqXHR.statusText);
					sap.ui.commons.MessageBox.alert(that.oBundle.getText("DataErrorMsg"), null, "Error");
				};
			},
			complete: function(){

			}
		});		
	},

/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf equipment.kpi-header
 */
// onExit: function() {
//
// }
});