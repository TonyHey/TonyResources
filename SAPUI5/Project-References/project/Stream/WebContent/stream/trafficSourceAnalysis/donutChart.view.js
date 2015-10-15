sap.ui.jsview("sap.stream.trafficSourceAnalysis.donutChart", {

    getControllerName : function() {
        return "sap.stream.trafficSourceAnalysis.donutChart";
    },

    createContent : function(oController) {
        var legend = new sap.viz.ui5.types.Legend({
            layout: new sap.viz.ui5.types.Legend_layout({
                position: sap.viz.ui5.types.Legend_layout_position.bottom
            })
        });
        oController.donutChart = new sap.viz.ui5.Donut({
                width: "260px",
                height: "260px",
                legendGroup: legend,
                plotArea: {
                    colorPalette: ['#3496f2', '#d1dd1b', '#f8a12e', '#ce82bf', '#ffe02e']
                }
            }).addStyleClass("trafficSA-barChart");

            return oController.donutChart;
    }
});