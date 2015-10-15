sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.sourceAnalysis.sourceAnalysis", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.sourceAnalysis.sourceAnalysis";
    },

    createContent : function(oController) {
        var that = this;
        //Title
        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        var tileLabel = new sap.m.Link({
            text: oBundle.getText("homepage.tile.title.sourece.analysis"),
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

        //Donut Chart
        var donutChartView = new sap.ui.core.mvc.JSView("",{
            viewName: "sap.rds.bdi.stream.Homepage.view.sourceAnalysis.donutChart"
        })
        var donutChartCell = new sap.ui.commons.layout.MatrixLayoutCell({
            content: donutChartView
        }).addStyleClass("trafficSA-barChart-page");
        var donutChartRow = new sap.ui.commons.layout.MatrixLayoutRow({
            height: '200px',
            cells: [donutChartCell]
        });

        //Alerts MatrixLayout
        var trafficSALayout = new sap.ui.commons.layout.MatrixLayout({
            width: '98%',
            layoutFixed: true,
            columns: 1,
            rows: [tileTileRow, donutChartRow]
        }).addStyleClass("trafficSA-content");

        return trafficSALayout;
        
    },

    toDetailPage: function(pageName) {
        if (sap.ui.getCore().byId("sourcePage") == undefined) {
            var sourcePage = new sap.ui.core.mvc.JSView("sourcePage", {
              viewName : "sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.detail"
              });
            sap.ui.getCore().byId("streamApp").addPage(sourcePage);
        }
        sap.ui.getCore().byId("oHomeButton").setVisible(true);
        sap.ui.getCore().byId("streamApp").to("sourcePage");

        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        var oPageTitle = new sap.m.Label({
            text: oBundle.getText("shell.page.title.source.analysis")
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
