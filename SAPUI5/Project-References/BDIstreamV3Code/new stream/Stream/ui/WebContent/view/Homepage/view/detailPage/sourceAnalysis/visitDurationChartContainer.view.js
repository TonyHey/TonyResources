sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitDurationChartContainer", {

	getControllerName : function() {
		return "sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitDurationChartContainer";
	},

	createContent : function(oController) {
        var donutChart = new sap.ui.core.mvc.JSView("sourceVisitDurationDountChart", {
            viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitDurationCharts.donutChart"
        });

        var columnChart = new sap.ui.core.mvc.JSView("sourceVisitDurationColumnChart", {
            viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitDurationCharts.columnChart"
        });

        var mapChart = new sap.ui.core.mvc.HTMLView("sourceVisitDurationMapChart", {
            viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitDurationCharts.map",
        }).addStyleClass("map");

        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        
        var donutChartContent = new sap.suite.ui.commons.ChartContainerContent({
            icon: "sap-icon://pie-chart",
            content: donutChart
        });

        var columnChartContent = new sap.suite.ui.commons.ChartContainerContent({
            icon: "sap-icon://vertical-bar-chart",
            content: columnChart
        });

        var mapChartContent = new sap.suite.ui.commons.ChartContainerContent({
            icon: "sap-icon://choropleth-chart",
            content: mapChart
        });

        this.oSelect = new sap.m.Select("sourceVisitDurationSelected",{
            items: [
                    new sap.ui.core.Item({
                        key: "Site",
                        text: oBundle.getText("source.analysis.chart.item.originating.site")
                    }),
                    new sap.ui.core.Item({
                        key: "Browser",
                        text: oBundle.getText("source.analysis.chart.item.browser")
                    })
            ],
            change: function () {
                //refresh Visit Duration Chart
                sap.ui.getCore().byId("sourceVisitDurationDountChart").oController.refreshChart();
                sap.ui.getCore().byId("sourceVisitDurationColumnChart").oController.refreshChart();
                sap.ui.getCore().byId("sourceVisitDurationMapChart").oController.refresh();
            }
        }).addStyleClass('homepage-select');
        this.oKpiSelect = new sap.m.Select("sourceVDKpiSelector", {
            items: [
                    new sap.ui.core.Item({
                        key: "Visits",
                        text: oBundle.getText("source.analysis.kpi.label.total.visits")
                    }),
                    new sap.ui.core.Item({
                        key: "Duration",
                        text: oBundle.getText("source.analysis.kpi.label.avg.duration")
                    })
            ],
            change: function() {
                if (this.getSelectedKey() === "Visits") {
                    var page = sap.ui.getCore().byId("sourceAnalysis");

                    page.removeContent(page.getContent()[1]);
                    page.addContent(sap.ui.getCore().byId("sourceChartContanierV"));
                }
            }
        }).addStyleClass('homepage-select').setVisible(false);
        var visitDurationChartContainer = new sap.suite.ui.commons.ChartContainer({
            dimensionSelectors: [this.oSelect, this.oKpiSelect],
            content : [donutChartContent, columnChartContent, mapChartContent]
        }).addStyleClass("chart");

        return visitDurationChartContainer;
	}

});