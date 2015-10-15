jQuery.sap.declare("root.model.formatter");

root.model.formatter = {
        
        statusText: function (sStatus) {
            var i18nModel = new sap.ui.model.resource.ResourceModel({
                bundleName: "root.i18n.i18n"
            });
            sap.ui.getCore().byId("invoiceList").setModel(i18nModel, "i18n");
            console.log(sap.ui.getCore().byId("invoiceList").getModel("i18n"));
            var resourceBundle = sap.ui.getCore().byId("invoiceList").getModel("i18n").getResourceBundle();
            switch (sStatus) {
                case "A":
                    return resourceBundle.getText("invoiceStatusA");
                case "B":
                    return resourceBundle.getText("invoiceStatusB");
                case "C":
                    return resourceBundle.getText("invoiceStatusC");
                default:
                    return sStatus;
            }
        }
        
        
};