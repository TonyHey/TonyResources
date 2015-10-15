sap.ui.jsview("root.view.Panel", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Panel
	*/ 
	getControllerName : function() {
		return "root.view.Panel";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Panel
	*/ 
	createContent : function(oController) {
	    var createPanel = new sap.m.Panel("walkPanel",{
	        headerText:"{i18n>helloPanelTitle}",
	        width:"auto",
	        content:[
	            new sap.m.Button({
	                text:"{i18n>showHelloButtonText}",
	                press:function(){
	                    oController.show();
	                }
	            }),
	            new sap.m.Input("customInput",{
	                value:"{/recipient/name}",
	                description:"{/recipient/name}",
	                valueLiveUpdate: true,
	                width:"60%"
	            })
	        ]
	    });
	    return createPanel;
	}

});