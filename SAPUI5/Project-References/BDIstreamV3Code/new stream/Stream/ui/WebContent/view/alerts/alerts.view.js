sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.alerts.alerts", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.alerts.alerts";
    },

    createContent : function(oController) {
        var oBundle = jQuery.sap.resources({
            url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
            locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        var that = this;
        //Title
        var tileLabel = new sap.m.Link({
            text: oBundle.getText("homepage.tile.title.alerts"),
            press: function(){
               that.toDetailPage(); 
            }
        }).addStyleClass('homepage-tile-title');
        var titleCell = new sap.ui.commons.layout.MatrixLayoutCell({
            content: tileLabel
        });
        var tileTileRow = new sap.ui.commons.layout.MatrixLayoutRow({
            height: '53px',
            cells: [titleCell]
        });
 
        //donut Chart
        var donutChartView = new sap.ui.core.mvc.JSView("", {
            viewName: "sap.rds.bdi.stream.Homepage.view.alerts.donutChart"
        });
        var donutChartCell = new sap.ui.commons.layout.MatrixLayoutCell({
            content: donutChartView
        }).addStyleClass("trafficSA-barChart-page");
        var donutChartRow = new sap.ui.commons.layout.MatrixLayoutRow({
            height : '200px',
            cells: [donutChartCell]
        });

        //Alerts MatrixLayout
        var alertsLayout = new sap.ui.commons.layout.MatrixLayout({
            width: '98%',
            layoutFixed: true,
            columns: 1,
            rows: [tileTileRow, donutChartRow]
        }).addStyleClass("alert-homepage");

        return alertsLayout;
    },

    toDetailPage: function() {
        if (sap.ui.getCore().byId("alertsPage") == undefined) {
            var alertsPage = new sap.ui.core.mvc.JSView("alertsPage", {
              viewName : "sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.detail"
              });
            sap.ui.getCore().byId("streamApp").addPage(alertsPage);
        }
        sap.ui.getCore().byId("oHomeButton").setVisible(true);
        sap.ui.getCore().byId("streamApp").to("alertsPage");

        var oBundle = jQuery.sap.resources({
            url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
            locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        var oPageTitle = new sap.m.Label({
            text: oBundle.getText("shell.page.title.alerts.analysis")
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
