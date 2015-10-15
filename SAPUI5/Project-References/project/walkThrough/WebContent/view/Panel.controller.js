sap.ui.controller("root.view.Panel", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Panel
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Panel
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Panel
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Panel
*/
//	onExit: function() {
//
//	}

    show: function(){
        // read msg from i18n model
        console.log(this.getView().getModel("i18n").getResourceBundle());
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
         var sMsg = oBundle.getText("helloMsg", [sRecipient]);
         // show message
         sap.m.MessageToast.show(sMsg);
    },
    
    _getDialog : function () {
        if (!this._oDialog) {
           this._oDialog = sap.ui.jsfragment("root.view.HelloDialog",  this);
           this.getView().addDependent(this._oDialog);
        }
        return this._oDialog;
     },
     onOpenDialog: function (oView) {
        var oDialog = this._getDialog();
        // connect dialog to view (models, lifecycle)
        this.getView().addDependent(oDialog);
        // open dialog
        oDialog.open()
    },
    onCloseDialog : function () {
        this._getDialog().close();
    }
    
});