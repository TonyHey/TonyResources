sap.ui.jsview("sap.stream.alerts.donutChart", {

    getControllerName : function() {
        return "sap.stream.alerts.donutChart";
    },

    createContent : function(oController) {
        //Change the position of Legend
        var legend = new sap.viz.ui5.types.Legend({
            layout: new sap.viz.ui5.types.Legend_layout({
                position: sap.viz.ui5.types.Legend_layout_position.bottom 
            })
        });

        oController.donutChart = new sap.viz.ui5.Donut("", {
            width: "260px",
            height: "260px",
            legendGroup: legend,
            plotArea: {
                colorPalette: ['#3496f2', '#d1dd1b', '#f8a12e', '#ce82bf', '#ffe02e']
            }
        });

        return oController.donutChart;
    }
});