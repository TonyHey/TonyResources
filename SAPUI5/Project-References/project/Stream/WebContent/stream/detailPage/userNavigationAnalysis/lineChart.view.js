sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.lineChart", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.lineChart";
    },

    createContent : function(oController) {
        var oLegend = new sap.viz.ui5.types.Legend({
            layout: new sap.viz.ui5.types.Legend_layout({
                position: sap.viz.ui5.types.Legend_layout_position.bottom 
            })
        });
        oController.lineChart = new sap.viz.ui5.Line({
            width : "100%",
            height : "400px",
            legendGroup: oLegend,
            plotArea : {
                
            },
            title : {
                visible : false
            }
        });

        return oController.lineChart;
    }
});