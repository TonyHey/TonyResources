jQuery.sap.declare("root.Component");
sap.ui.core.UIComponent.extend("root.Component",{
	
        metadata : {
 
               manifest:"json"
		},
		getControllerName: function(){
		    return "root.view.HelloDialog";
		},
		
		
		init: function(){
		 	sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
			
		 	var oModel = new sap.ui.model.json.JSONModel("model/data.json");
		 	this.setModel(oModel);
			
		 	var i18nModel = new sap.ui.model.resource.ResourceModel({
	         	bundleName: "root.i18n.i18n"
		 	});
	     	this.setModel(i18nModel, "i18n");
	     	
	     // set invoice model
	        var oInvoiceModel = new sap.ui.model.json.JSONModel("model/Invoices.json");
	        this.setModel(oInvoiceModel, "invoice");

	        
	        
	        // var oInvoiceModel = new sap.ui.model.odata.ODataModel("proxy/http/services.odata.org/V2/Northwind/Northwind.svc/");
         //    oInvoiceModel.setUseBatch(false);
         //    this.setModel(oInvoiceModel, "invoice");
	     	
	     // create the views based on the url/hash
            this.getRouter().initialize();
	     	
		}
   });