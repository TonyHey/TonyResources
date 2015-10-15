sap.ui.jsview("root.view.Overview", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Overview
	*/ 
	getControllerName : function() {
		return "root.view.Overview";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Overview
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
          title: "{i18n>homePageTitle}",
          headerContent:[
                         sap.m.Button({
                             icon: "sap-icon://hello-world",
                             press: function(){
                                 oController.onOpenDialog();
                             }
                         })
          ],
          content: [
               new sap.ui.core.mvc.JSView({
                   viewName:"root.view.Panel"
               }),
               new sap.ui.core.mvc.JSView({
                     viewName:"root.view.InvoiceList"
                 })
          
          ]
		});
	}

});