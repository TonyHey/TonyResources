sap.ui.controller("root.view.App", {

	onInit: function() {
			
		
	},


	//	onBeforeRendering: function() {
	//
	//	},

	
	//	onAfterRendering: function() {
	//
	//	},


	//	onExit: function() {
	//
	//	}
	_getDialog : function () {
        if (!this._oDialog) {
           this._oDialog = sap.ui.jsfragment("root.view.HelloDialog",  this);
           this.getView().addDependent(this._oDialog);
        }
        return this._oDialog;
     },
     onOpenDialog: function () {
         
        var oDialog = this._getDialog();
        // connect dialog to view (models, lifecycle)
        this.getView().addDependent(oDialog);
        // open dialog
        oDialog.open();
    },
    onCloseDialog : function () {
        this._getDialog().close();
    }


});