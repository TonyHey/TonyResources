sap.ui.jsview("sap.stream.mostVisitedPages.mostVisitedPages", {

    getControllerName: function() {
        return "sap.stream.mostVisitedPages.mostVisitedPages";
    },

    createContent: function(oController) {
        var that = this;
        //Title
        var tileLabel = new sap.m.Link({
            text: "Most Visited Pages",
            press: function(){
                that.toDetailPage("mostVisitedPages");
            }
        }).addStyleClass('homepage-tile-title');

        var titleCell = new sap.ui.commons.layout.MatrixLayoutCell({
            content: tileLabel
        });

        var tileTileRow = new sap.ui.commons.layout.MatrixLayoutRow({
            height: '53px',
            cells: [titleCell]
        });

        //Column Chart
        var columnChartView = new sap.ui.core.mvc.JSView("",{
            viewName: "sap.stream.mostVisitedPages.columnChart"
        });

        var columnChartCell = new sap.ui.commons.layout.MatrixLayoutCell({
            colSpan: 2,
            content: columnChartView
        });

        var columnChartRow = new sap.ui.commons.layout.MatrixLayoutRow({
            height: '200px',
            cells: [columnChartCell]
        });

        //mostVisitedPages MatrixLayout
        var mostVisitedPagesLayout = new sap.ui.commons.layout.MatrixLayout({
            width: '98%',
            layoutFixed: true,
            columns: 2,
            widths: ['50%', '50%'],
            rows: [tileTileRow, columnChartRow]
        });

        return mostVisitedPagesLayout;
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