sap.ui.controller("sap.rds.bdi.stream.Homepage.view.app", {

    toHome: function() {

        sap.ui.getCore().byId("streamApp").back("landPage");
        sap.ui.getCore().byId("oHomeButton").setVisible(false);
        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        var oPageTitle = new sap.m.Label({
            text: oBundle.getText("shell.page.title.overview")
        }).addStyleClass("detail-page-header-title");
        sap.ui.getCore().byId("oShell").setSearch(oPageTitle);

        setTimeout(function(){
            var oShellTitle = oBundle.getText("shell.title.stream.intelligence");
            if($(".shell-header-title").text() === "") {
                $(".sapUiUfdShellIco").append("<label class='shell-header-title'>" + oShellTitle + "<label>");
            }
        });
    }
});