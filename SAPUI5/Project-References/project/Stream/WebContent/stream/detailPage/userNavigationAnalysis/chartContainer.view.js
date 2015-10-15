sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.chartContainer", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.chartContainer";
    },

    createContent : function(oController) { 
        var that = this;

        oController.lineChartView =  new sap.ui.core.mvc.JSView({
            viewName: 'sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.lineChart'
        });

        oController.barChartView = new sap.ui.core.mvc.JSView({
            viewName: 'sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.barChart'
        });
        
        oController.oLineChart = new sap.suite.ui.commons.ChartContainerContent({
            icon: "sap-icon://line-chart",
            content: oController.lineChartView
        });

        oController.oBarChart = new sap.suite.ui.commons.ChartContainerContent({
            icon: "sap-icon://bar-chart",
            content: oController.barChartView
        });

        oController.oChartContainer = new sap.suite.ui.commons.ChartContainer({
            showPersonalization: false,
            showFullScreen: false,
            showLegend: true,
            content: [oController.oLineChart]
        });

        return oController.oChartContainer;
    },

});