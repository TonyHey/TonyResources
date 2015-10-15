sap.ui.jsview("sap.stream.detailPage.sourceAnalysis.anotherChartView", {

    getControllerName : function() {
        return "sap.stream.detailPage.sourceAnalysis.anotherChartView";
    },

    createContent : function(oController) {
        //Chart View
        oController.oBarChart = new sap.viz.ui5.Bar({
            width: "100%",
            height: "400px",
        });

        oController.barChartContent = new sap.suite.ui.commons.ChartContainerContent({
                icon: "sap-icon://bar-chart",
                title: "Time Series",
                content: oController.oBarChart
        });

        oController.oChartContainer = new sap.suite.ui.commons.ChartContainer("",{
            content: [oController.barChartContent],
        });
        oController.oChartContainer.setShowFullScreen(true).setShowPersonalization(false).setAutoAdjustHeight(true);

        return oController.oChartContainer;
    }
});