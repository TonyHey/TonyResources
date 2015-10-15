sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.visitDurationChartContainer", {

	getControllerName : function() {
		return "sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.visitDurationChartContainer";
	},

	createContent : function(oController) {
        var donutChart = new sap.ui.core.mvc.JSView({
            viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.visitDurationCharts.donutChart"
        });

        var columnChart = new sap.ui.core.mvc.JSView({
            viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.visitDurationCharts.columnChart"
        });

        var mapChart = new sap.ui.core.mvc.HTMLView({
            viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.visitDurationCharts.map",
        }).addStyleClass("map");
        
        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });

        var donutChartContent = new sap.suite.ui.commons.ChartContainerContent({
            icon: "sap-icon://pie-chart",
            title: oBundle.getText("alerts.analysis.avg.visit.duration"),
            content: donutChart
        });

        var columnChartContent = new sap.suite.ui.commons.ChartContainerContent({
            icon: "sap-icon://vertical-bar-chart",
            title: oBundle.getText("alerts.analysis.avg.visit.duration"),
            content: columnChart
        });

        var mapChartContent = new sap.suite.ui.commons.ChartContainerContent({
            icon: "sap-icon://choropleth-chart",
            title: oBundle.getText("alerts.analysis.chart.map"),
            content: mapChart
        });
/*
        var oSelect = new sap.m.Select({
            items : [new sap.ui.core.Item({
                key : "events",
                text : "By Events"
            }),

            new sap.ui.core.Item({
                key : "???",
                text : "By ???"
            })]
        });
*/
/*
        var ctb1 = new sap.suite.ui.commons.ChartContainer({
            content : [donutChartContent, columnChartContent, mapChartContent]
        }).addStyleClass("chart");
*/
        
        var ctb1 = new sap.suite.ui.commons.ChartContainer({
            content: [donutChartContent, columnChartContent, mapChartContent]
        });
        
//        ctb1.addDimensionSelector(oSelect);
        ctb1.setShowFullScreen(false);
        ctb1.setShowLegend(false);
//      ctb1.setShowZoom(false);
//      ctb.setShowPersonalization(true);
//      ctb.setAutoAdjustHeight(true);
        
        return ctb1;
	}

});