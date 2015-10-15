sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.barChart", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.barChart";
    },

    createContent : function(oController) {
        var legend = new sap.viz.ui5.types.Legend({
            layout: new sap.viz.ui5.types.Legend_layout({
                position: sap.viz.ui5.types.Legend_layout_position.bottom 
            })
        });

        oController.barChart = new sap.viz.ui5.Bar({
            width : "100%",
            height : "400px",
            legendGroup: legend,
            plotArea: {
                colorPalette: ['#3496f2', '#ce82bf', '#ffe02e']
            },
            title : {
                visible : false
            },
        });
    
        return oController.barChart;
    }
});