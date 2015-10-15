sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.visitChartContainer", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.visitChartContainer";
    },
 
    createContent : function(oController) {
	        var that = this;
	        this.donutChart = new sap.ui.core.mvc.JSView("alertsDountChart", {
	            viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.visitCharts.donutChart"
	        });
	
	        this.columnChart = new sap.ui.core.mvc.JSView("alertsColumnChart", {
	            viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.visitCharts.columnChart"
	        });

            var mapChart = new sap.ui.core.mvc.HTMLView("alertsMapChart", {
                viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.visitCharts.map",
            }).addStyleClass("map");

            var donutChartContent = new sap.suite.ui.commons.ChartContainerContent({
                icon: "sap-icon://pie-chart",
                title: "Total Visit",
                content: this.donutChart
            });
            
            var oBundle = jQuery.sap.resources({
            	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
            	locale : sap.ui.getCore().getConfiguration().getLanguage() 
            });

            var columnChartContent = new sap.suite.ui.commons.ChartContainerContent({
                icon: "sap-icon://vertical-bar-chart",
                title: oBundle.getText("alerts.analysis.chart.total.visit"),
                content: this.columnChart
            });

            var mapChartContent = new sap.suite.ui.commons.ChartContainerContent({
                icon: "sap-icon://choropleth-chart",
                title: oBundle.getText("alerts.analysis.chart.map"),
                content: mapChart
            });

            var visitChartContainer = new sap.suite.ui.commons.ChartContainer({
                content: [donutChartContent, columnChartContent, mapChartContent]
            });

            visitChartContainer.setShowFullScreen(false);

            return visitChartContainer;
    }

});