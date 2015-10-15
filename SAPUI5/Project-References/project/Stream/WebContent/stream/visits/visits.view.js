sap.ui.jsview("sap.stream.visits.visits", {

    getControllerName : function() {
        return "sap.stream.visits.visits";
    },
 
    createContent : function(oController) {
        var that = this;
        var tileTile = new sap.m.Link({
            text: 'Visits',
            press: function(){
                that.toDetailPage("actualsAndPredictiveAnalysis");
            }
        }).addStyleClass('homepage-tile-title homepage-tile-title-margin');

        var mainText = new sap.ui.commons.TextView({
            text: '12,276'
        }).addStyleClass('main-text');

        var monthLabel = new sap.m.Label({
            text: 'Last Month:'
        }).addStyleClass('homepage-tile-label');

        var monthValue = new sap.ui.commons.TextView({
            text: '36,125'
        }).addStyleClass('homepage-tile-value');

        var monthValueTrend = new sap.ui.commons.TextView({
            text: '(+14%)'
        }).addStyleClass('homepage-tile-value-trend-positive');

        var monthLayout = new sap.ui.layout.HorizontalLayout({
            content: [monthValue, monthValueTrend]
        });

        var averageLabel = new sap.m.Label({
            text: 'Average:'
        }).addStyleClass('homepage-tile-label');

        var averageValue = new sap.ui.commons.TextView({
            text: '28,945'
        }).addStyleClass('homepage-tile-value');

        var averageValueTrend = new sap.ui.commons.TextView({
            text: '(-16%)'
        }).addStyleClass('homepage-tile-value-trend-negative');

        var averageLayout = new sap.ui.layout.HorizontalLayout({
            content: [averageValue, averageValueTrend]
        });

        var avgMatrixLayout = new sap.ui.commons.layout.MatrixLayout();

        avgMatrixLayout.createRow(tileTile);
        avgMatrixLayout.createRow(mainText);
        avgMatrixLayout.createRow(monthLabel);
        avgMatrixLayout.createRow(monthLayout);
        avgMatrixLayout.createRow(averageLabel);
        avgMatrixLayout.createRow(averageLayout);

        return avgMatrixLayout;
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