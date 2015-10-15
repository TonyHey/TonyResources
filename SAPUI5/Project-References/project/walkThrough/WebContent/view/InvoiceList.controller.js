sap.ui.controller("root.view.InvoiceList", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.InvoiceList
*/
    formatter: jQuery.sap.require("root.model.formatter"),
	onInit: function() {
	    var oViewModel = new sap.ui.model.json.JSONModel({
            currency: "EUR"
        });
        this.getView().setModel(oViewModel, "view");
        
        

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.InvoiceList
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.InvoiceList
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.InvoiceList
*/
//	onExit: function() {
//
//	}
	onFilterInvoices : function (oEvent) {

        // build filter array
        var aFilter = [];
        var sQuery = oEvent.getParameter("query");
        if (sQuery) {
            aFilter.push(new sap.ui.model.Filter("ProductName", sap.ui.model.FilterOperator.Contains, sQuery));
        }

        // filter binding
        var oTable = sap.ui.getCore().byId("invoiceList");
        var oBinding = oTable.getBinding("items");
        oBinding.filter(aFilter);
    }

});