jQuery.sap.declare("sap.rds.bdi.stream.logConfig.Component");

sap.ui.core.UIComponent.extend("sap.rds.bdi.stream.logConfig.Component", {
    metadata : {
        name : "Log Configuration",
        title : "Log Configuration",
        version : "1.0",
        includes : [ ],
        dependencies : {
            libs : ["sap.m", "sap.suite.ui.commons", "sap.ca.ui", "sap.ui.table", "sap.ui.commons", "sap.ui.unified"],
            components : []
        },
        config : {
            title: "Log Configuration"
        }
    },

    init: function(){
        sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

        var mConfig = this.getMetadata().getConfig();

        var rootPath = jQuery.sap.getModulePath("sap.rds.bdi.mfg.signal.apps.alert");
        
        // set device model
        var deviceModel = new sap.ui.model.json.JSONModel({
            isTouch : sap.ui.Device.support.touch,
            isNoTouch : !sap.ui.Device.support.touch,
            isPhone : sap.ui.Device.system.phone,
            isNoPhone : !sap.ui.Device.system.phone,
            listMode : sap.ui.Device.system.phone ?  "None" : "SingleSelectMaster",
            listItemType : sap.ui.Device.system.phone ? "Active" : "Inactive"
        });
        deviceModel.setDefaultBindingMode("OneWay");
        this.setModel(deviceModel, "device");
    },

    createContent: function(){
        return new sap.ui.core.mvc.JSView("mainJsView", {viewName: "sap.rds.bdi.stream.logConfig.views.main"});
    }
});