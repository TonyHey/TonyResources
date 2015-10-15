sap.ui.jsview("sap.stream.detailPage.sourceAnalysis.chartView", {

    getControllerName : function() {
        return "sap.stream.detailPage.sourceAnalysis.chartView";
    },

    createContent : function(oController) {
        oController.oLineChart = new sap.viz.ui5.Line({
            width: "100%",
            height: "400px",
        });

        oController.lineChartContent = new sap.suite.ui.commons.ChartContainerContent({
                icon: "sap-icon://line-chart",
                title: "Source Analysis",
                content: oController.oLineChart
        });

        oController.oChartContainer = new sap.suite.ui.commons.ChartContainer("",{
            content: [oController.lineChartContent],
        });
        oController.oChartContainer.setShowFullScreen(true).setShowPersonalization(false).setAutoAdjustHeight(true);

        return oController.oChartContainer;
    }
});