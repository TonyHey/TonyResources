jQuery.sap.declare("sap.rds.bdi.stream.config.Component");
jQuery.sap.require("sap.rds.bdi.stream.config.MyRouter");

sap.ui.core.UIComponent.extend("sap.rds.bdi.stream.config.Component", {
    metadata : {
        name : "Configuration",
        version : "1.0",
        includes : ["css/stylesheet.css"],
        dependencies : {
            libs : ["sap.m", "sap.ui.layout", "sap.ui.commons", "sap.ui.table", "sap.ui.core"], 
            components : []
        },
        config : {
            resourceBundle : "i18n/i18n.properties",
            title: "Configuration"
        },
        routing : {
            config : {
                routerClass : sap.rds.bdi.stream.config.MyRouter,
                viewType : "JS",
                viewPath : "sap.rds.bdi.stream.config.view",
                targetAggregation : "detailPages",
                clearTarget : false
            },
            routes : [
                {
                    pattern : "",
                    name : "main",
                    view : "Master",
                    targetAggregation : "masterPages",
                    targetControl : "splitApp",
                    subroutes : [
                        {
                            pattern : "{product}/:tab:",
                            name : "product",
                            view : "Detail"
                        }
                    ]
                },
                {
                    name : "catchallMaster",
                    view : "Master",
                    targetAggregation : "masterPages",
                    targetControl : "splitApp",
                    subroutes : [
                        {
                            pattern : ":all*:",
                            name : "catchallDetail",
                            view : "NotFound"
                        }
                    ]
                }
            ]
        }
    },

    init: function(){
        jQuery.sap.require("sap.rds.bdi.stream.config.MyRouter");
        
        sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

        var mConfig = this.getMetadata().getConfig();

        // always use absolute paths relative to our own component
        // (relative paths will fail if running in the Fiori Launchpad)
        var rootPath = jQuery.sap.getModulePath("sap.rds.bdi.stream.config");

        // set i18n model
        var i18nModel = new sap.ui.model.resource.ResourceModel({
            bundleUrl : [rootPath, mConfig.resourceBundle].join("/")
        });
        this.setModel(i18nModel, "i18n");
        
        // set device model
        var deviceModel = new sap.ui.model.json.JSONModel({
            isTouch : sap.ui.Device.support.touch,
            isNoTouch : !sap.ui.Device.support.touch,
            isPhone : sap.ui.Device.system.phone,
            isNoPhone : !sap.ui.Device.system.phone,
            listMode : sap.ui.Device.system.phone ? "None" : "SingleSelectMaster",
            listItemType : sap.ui.Device.system.phone ? "Active" : "Inactive"
        });
        deviceModel.setDefaultBindingMode("OneWay");
        this.setModel(deviceModel, "device");
        
//        var router = this.getRouter();
//        router.myNavToWithoutHash = sap.rds.bdi.stream.config.MyRouter.prototype.myNavToWithoutHash;
//        if (!sap.ui.Device.system.phone){
//            router.myNavToWithoutHash( "sap.rds.bdi.stream.config.view.General","JS",false);
//        }
        
        this.getRouter().initialize();
        
    },

    createContent: function(){
        return sap.ui.core.mvc.JSView({viewName: "sap.rds.bdi.stream.config.view.App"});
    }
});