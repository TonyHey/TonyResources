sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.shell", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.shell";
    },

    createContent : function(oController) {

        //Page Title

    	var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        oController.oPageTitle = new sap.m.Label({
            text: oBundle.getText("shell.page.title.overview")
        }).addStyleClass("detail-page-header-title");

        oController.userItem = new sap.ui.unified.ShellHeadUserItem({
            image : "sap-icon://customer-and-contacts",
            username : "Hi",
            press: jQuery.proxy(oController.handleUserItemPress, oController)
        });
        
        oController.oShell = new sap.ui.unified.Shell("oShell", {
            icon: "ui/WebContent/image/sap_50x26.png",
            searchVisible : true,
            user: oController.userItem,
            
        });

        return oController.oShell;
    }
});