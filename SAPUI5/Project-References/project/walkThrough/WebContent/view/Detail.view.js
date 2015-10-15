sap.ui.jsview("root.view.Detail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Detail
	*/ 
	getControllerName : function() {
		return "root.view.Detail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Detail
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "{i18n>detailPageTitle}",
			customHeader: new sap.m.ObjectHeader({title:"Invoice"}),
			content: [
			          
			]
		});
	}

});