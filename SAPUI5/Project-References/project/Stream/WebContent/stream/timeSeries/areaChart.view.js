sap.ui.jsview("sap.stream.timeSeries.areaChart", {

    getControllerName : function() {
        return "sap.stream.timeSeries.areaChart";
    },

    createContent : function(oController) {
        oController.areaChart = new sap.viz.ui5.Area({
            width: "100%",
            height: "200px",
            plotArea: {
                colorPalette: ['#c6e5fc']
            },
            legend: {
                visible: false
            },
            title: {
                visible: false,
                text: ''
            },
            yAXis: {
                title: {
                    visible: false
                }
            }
        });

        var oXAxis = new sap.viz.ui5.types.Axis({
        });
        var oTitle = new sap.viz.ui5.types.Axis_title({
            text: ' '
        });
        oXAxis.setTitle(oTitle);
        oXAxis.getAxisline().setVisible(false);
        oXAxis.getAxisTick().setVisible(false); 

        var oYAxis = new sap.viz.ui5.types.Axis({
            visible: true
        });

        var oLegendGroup = new sap.viz.ui5.types.Legend({
        });
        oController.areaChart.setXAxis(oXAxis);
        oController.areaChart.setYAxis(oYAxis);
        oController.areaChart.setLegendGroup(oLegendGroup);
        
        return oController.areaChart;
    }
});