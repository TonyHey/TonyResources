sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.demographicAnalysis.visitDurationChartContainer", {

	getControllerName : function() {
		return "sap.rds.bdi.stream.Homepage.view.detailPage.demographicAnalysis.visitDurationChartContainer";
	},

	createContent : function(oController) {
        var donutChart = new sap.ui.core.mvc.JSView("visitDurationDountChart",{
            viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.demographicAnalysis.visitDurationCharts.donutChart"
        });

        var columnChart = new sap.ui.core.mvc.JSView("visitDurationColumnChart",{
            viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.demographicAnalysis.visitDurationCharts.columnChart"
        });

        var mapChart = new sap.ui.core.mvc.HTMLView("visitDurationMapChart",{
            viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.demographicAnalysis.visitDurationCharts.map",
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

        this.oSelect = new sap.m.Select("demographicVisitDurationSelected",{
            items : [new sap.ui.core.Item({
                key : "Gender",
                text : oBundle.getText("demographic.analysis.chart.item.gender")
            }),

            new sap.ui.core.Item({
                key : "AgeRange",
                text : oBundle.getText("demographic.analysis.chart.item.age")
            })],
            change: function() {
                //refresh Chart
                sap.ui.getCore().byId("visitDurationDountChart").oController.refreshChart();
                sap.ui.getCore().byId("visitDurationColumnChart").oController.refreshChart();
                sap.ui.getCore().byId("visitDurationMapChart").oController.refresh();
            }
        }).addStyleClass('homepage-select');

        this.oKpiSelect = new sap.m.Select("demoVDKpiSelector", {
            items: [
                    new sap.ui.core.Item({
                        key: "Visits",
                        text: oBundle.getText("demographic.analysis.kpi.label.total.visits")
                    }),
                    new sap.ui.core.Item({
                        key: "Duration",
                        text: oBundle.getText("demographic.analysis.kpi.label.avg.duration")
                    })
            ],
            change: function() {
                if (this.getSelectedKey() === "Visits") {
                    var page = sap.ui.getCore().byId("DemographicAnalysis");

                    page.removeContent(page.getContent()[1]);
                    page.addContent(sap.ui.getCore().byId("demoChartContanierV"));
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