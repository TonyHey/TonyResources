sap.ui.jsview("sap.rds.bdi.stream.logConfig.views.main", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.logConfig.views.main";
    },

    createContent : function(oController) {
    	oController.oBundle = jQuery.sap.resources({
			url : "ui/WebContent/i18n/i18n.properties",
			locale : sap.ui.getCore().getConfiguration().getLanguage() 
		});
    
        oController.chartToolBar = new sap.ui.core.mvc.JSView("alertchartToolBar", {viewName: "sap.rds.bdi.stream.logConfig.views.chartToolBar"});
        oController.header = new sap.ui.core.mvc.JSView("header", {
        	viewName: "sap.rds.bdi.stream.logConfig.views.header",
        	height: "50px"
        });
                
        
        this.shell = new sap.m.Shell({
            app: new sap.m.App({
                pages: [
                        new sap.m.Page("alertPage", {
                            title: oController.oBundle.getText("logConfigurationBtn"), 
                            showNavButton: false,
                            navButtonTap: function(){
                                window.location.assign(window.location.href.replace(/#.*/, "#"));
                            },
                            content: [
                                      oController.header,
                                      oController.chartToolBar
                            ]
                        })
                ]
            })
        });
        return this.shell;
    }
});