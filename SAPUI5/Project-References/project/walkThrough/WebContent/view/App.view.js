sap.ui.jsview("root.view.App", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf root.view.App
	 */
	getControllerName: function() {
		return "root.view.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf root.view.App
	 */
	createContent: function(oController) {
//		var page1 = new sap.m.Page({
//			title: "{i18n>homePageTitle}",
//			headerContent:[
//			               sap.m.Button({
//			                   icon: "sap-icon://hello-world",
//			                   press: function(){
//			                       oController.onOpenDialog();
//			                   }
//			               })
//			],
//			content: [
//			     new sap.ui.core.mvc.JSView({
//			         viewName:"root.view.Panel"
//			     }),
//			     new sap.ui.core.mvc.JSView({
//                     viewName:"root.view.InvoiceList"
//                 })
//			
//			]
//		});
	    this.setDisplayBlock(true);
		var app = new sap.m.App("app",{});
//		app.addPage(page1);
		return app;
		
	}

});