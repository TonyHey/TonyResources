sap.ui.jsview("sap.stream.alerts.alerts", {
     
    getControllerName : function() {
        return "sap.stream.alerts.alerts";
    },

    createContent : function(oController) {
        var that = this;
        //Title
        var tileLabel = new sap.m.Link({         
            text: "Alerts",
            press: function(){
               that.toDetailPage("alerts"); 
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
        var donutChartView = new sap.ui.core.mvc.JSView("", {
            viewName: "sap.stream.alerts.donutChart"
        });
        var donutChartCell = new sap.ui.commons.layout.MatrixLayoutCell({
            content: donutChartView
        }).addStyleClass("alerts-dountChart-page");
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
        }).addStyleClass("alerts-layout");

        return alertsLayout;
    },

    toDetailPage: function(pageName) {
        
        var oShell = sap.ui.getCore().byId("oShell");
        oShell.removeAllContent();
        var detailView = new sap.ui.core.mvc.JSView({
            viewName : "sap.stream.detailPage." + pageName + ".detail"
        });
        
        oShell.addContent(detailView);
//        oShell.setHeaderVisible(false);
    }

});
