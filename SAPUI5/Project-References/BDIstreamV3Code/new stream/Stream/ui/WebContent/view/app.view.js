sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.app", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.app";
    },

    createContent : function(oController) {
        oController.landPage = new sap.ui.core.mvc.HTMLView("landPage", {
            viewName : "sap.rds.bdi.stream.Homepage.view.landpage"
        });

        oController.app = new sap.m.App("streamApp", {
            pages: [
                    oController.landPage
            ],
            backgroundColor: "white"
        });

        return oController.app;
    }
});