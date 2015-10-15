jQuery.sap.declare("root.view.HelloDialog", {
    
    _getDialog : function () {
        if (!this._oDialog) {
           this._oDialog = sap.ui.jsfragment("root.view.HelloDialog",  this);
           this.getView().addDependent(this._oDialog);
        }
        return this._oDialog;
     },
    open: function (oView) {
        var oDialog = this._getDialog();
        // connect dialog to view (models, lifecycle)
        oView.addDependent(oDialog);
        // open dialog
        oDialog.open();
    },
    onCloseDialog : function () {
        this._getDialog().close();
    }
    
})