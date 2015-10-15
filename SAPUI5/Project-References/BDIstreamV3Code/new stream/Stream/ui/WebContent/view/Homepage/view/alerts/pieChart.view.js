sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.alerts.pieChart", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.alerts.pieChart";
    },

    createContent : function(oController) {
        //Change the position of Legend
        var legend = new sap.viz.ui5.types.Legend({
            layout: new sap.viz.ui5.types.Legend_layout({
                position: sap.viz.ui5.types.Legend_layout_position.bottom 
            })
        });

        oController.pieChart = new sap.viz.ui5.Pie("", {
            width: "260px",
            height: "260px",
            legendGroup: legend,
            plotArea: {
                colorPalette: ['#f8a12e', '#d1dd1b', '#3496f2', '#ce82bf', '#ffe02e']
            }
        });

        return oController.pieChart;
    }
});