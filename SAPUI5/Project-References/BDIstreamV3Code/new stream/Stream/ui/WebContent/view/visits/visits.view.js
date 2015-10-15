sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.visits.visits", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.visits.visits";
    },
 
    createContent : function(oController) {
        var that = this;
        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        var tileTitle = new sap.m.Link({
            text: oBundle.getText("homepage.tile.title.visits"),
            press: function(){
                that.toDetailPage();
            }
        }).addStyleClass('homepage-tile-title homepage-tile-title-margin');

        var mainText = new sap.ui.commons.TextView({
            text: "{oModel>/currentMonthVisits}"
        }).addStyleClass('main-text');

        var monthLabel = new sap.m.Label({
            text: oBundle.getText("homepage.tile.label.last.month")
        }).addStyleClass('homepage-tile-label');

        var monthValue = new sap.ui.commons.TextView({
            text: "{oModel>/lastMonthVisits}"
        }).addStyleClass('homepage-tile-value');

        oController.monthValueTrend = new sap.ui.commons.TextView({
            text: "{oModel>/lastMonthTrend}"
        });

        var monthLayout = new sap.ui.layout.HorizontalLayout({
            content: [monthValue, oController.monthValueTrend]
        });

        var averageLabel = new sap.m.Label({
            text: oBundle.getText("homepage.tile.label.average")
        }).addStyleClass('homepage-tile-label');

        var averageValue = new sap.ui.commons.TextView({
            text: "{oModel>/avgVisits}"
        }).addStyleClass('homepage-tile-value');

        var averageLayout = new sap.ui.layout.HorizontalLayout({
            content: [averageValue]
        });

        var visitsLayout = new sap.ui.commons.layout.MatrixLayout();

        visitsLayout.createRow(tileTitle);
        visitsLayout.createRow(mainText);
        visitsLayout.createRow(monthLabel);
        visitsLayout.createRow(monthLayout);
        visitsLayout.createRow(averageLabel);
        visitsLayout.createRow(averageLayout);

        return visitsLayout;
    },

    toDetailPage: function(pageName) {
        if (sap.ui.getCore().byId("demographicPage") == undefined) {
            var demographicPage = new sap.ui.core.mvc.JSView("demographicPage", {
                viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.demographicAnalysis.detail"
            });
            sap.ui.getCore().byId("streamApp").addPage(demographicPage);
        }

        sap.ui.getCore().byId("oHomeButton").setVisible(true);
        sap.ui.getCore().byId("streamApp").to("demographicPage");

        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        var oPageTitle = new sap.m.Label({
            text: oBundle.getText("shell.page.title.demographic.analysis")
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