sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.predictive.predictive", {

    getControllerName: function() {
        return "sap.rds.bdi.stream.Homepage.view.predictive.predictive";
    },

    createContent: function(oController) {
        var that = this;
        //Title
        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        var tileLabel = new sap.m.Link({
            text: oBundle.getText("homepage.tile.title.forecast"),
            press: function(){
                that.toDetailPage();
            }
        }).addStyleClass('homepage-tile-title');

        var titleCell = new sap.ui.commons.layout.MatrixLayoutCell({
            content: tileLabel
        });
        //Select
        var predictiveSelect = new sap.m.Select({
            autoAdjustWidth: true,
            items: [
                     new sap.ui.core.Item({
                         text:oBundle.getText("homepage.tile.select.forecast.visits"),
                         key: "Visits"
                     }),
                     new sap.ui.core.Item({
                         text:oBundle.getText("homepage.tile.select.forecast.Bandwidth"),
                         key: "Bandwidth"
                     }),
                     new sap.ui.core.Item({
                         text:oBundle.getText("homepage.tile.select.forecast.unique.visitors"),
                         key: "UV"
                     })
            ],
            change: function() {
                that.chartView.getController().refreshChart(this.getSelectedKey());
            }
        }).addStyleClass("homepage-select");
        var selectCell = new sap.ui.commons.layout.MatrixLayoutCell({
            colSpan: 1,
            content: predictiveSelect,
            hAlign: sap.ui.commons.layout.HAlign.Right
        });
        
        var titleRow = new sap.ui.commons.layout.MatrixLayoutRow({
            height: '53px',
            cells: [titleCell, selectCell]
        });

        //Chart
        this.chartView = new sap.ui.core.mvc.JSView("",{
            viewName: "sap.rds.bdi.stream.Homepage.view.predictive.lineChart"
        });

        var chartCell = new sap.ui.commons.layout.MatrixLayoutCell({
            colSpan: 2,
            content: this.chartView
        });

        var chartRow = new sap.ui.commons.layout.MatrixLayoutRow({
            height: '240px',
            cells: [chartCell]
        });

        //predictive MatrixLayout
        var predictiveLayout = new sap.ui.commons.layout.MatrixLayout({
            width: '98%',
            layoutFixed: true,
            columns: 2,
            widths: ['50%', '50%'],
            rows: [titleRow, chartRow]
        });

        return predictiveLayout;
    },

    toDetailPage: function() {
        if (sap.ui.getCore().byId("forecastPage") == undefined) {
            var forecastPage = new sap.ui.core.mvc.JSView("forecastPage", {
              viewName : "sap.rds.bdi.stream.Homepage.view.detailPage.actualsAndPredictiveAnalysis.detail"
              });
            sap.ui.getCore().byId("streamApp").addPage(forecastPage);
        }
        sap.ui.getCore().byId("oHomeButton").setVisible(true);
        sap.ui.getCore().byId("streamApp").to("forecastPage");
        
        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        var oPageTitle = new sap.m.Label({
            text: oBundle.getText("shell.page.title.predictive.analysis")
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