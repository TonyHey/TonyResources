sap.ui.jsview("sap.rds.bdi.stream.config.view.App", {
//    
//    getControllerName : function() {
//        return "sap.rds.bdi.mfg.signal.config.view.App";
//    },

    createContent : function(oController) {
        var app = new sap.m.SplitApp("splitApp");
        
        return app;
    }
})