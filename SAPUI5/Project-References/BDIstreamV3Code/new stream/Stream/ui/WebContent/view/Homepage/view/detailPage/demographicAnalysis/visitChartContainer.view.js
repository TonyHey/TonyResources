sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.demographicAnalysis.visitChartContainer", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.demographicAnalysis.visitChartContainer";
    },
 
    createContent : function(oController) {
        var that = this;
        this.donutChart = new sap.ui.core.mvc.JSView("visitDountChart", {
            viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.demographicAnalysis.visitCharts.donutChart"
        });

        this.columnChart = new sap.ui.core.mvc.JSView("visitColumnChart", {
            viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.demographicAnalysis.visitCharts.columnChart"
        });

        oController.mapChart = new sap.ui.core.mvc.HTMLView("visitMapChart", {
            viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.demographicAnalysis.visitCharts.map",
        }).addStyleClass("map");

        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });

        var donutChartContent = new sap.suite.ui.commons.ChartContainerContent({
            icon: "sap-icon://pie-chart",
            content: this.donutChart
        });

        var columnChartContent = new sap.suite.ui.commons.ChartContainerContent({
            icon: "sap-icon://vertical-bar-chart",
            content: this.columnChart
        });

        var mapChartContent = new sap.suite.ui.commons.ChartContainerContent({
            icon: "sap-icon://choropleth-chart",
            content: oController.mapChart
        });

        this.oSelect = new sap.m.Select("demographicVisitSelected", {
            items: [
                    new sap.ui.core.Item({
                        key: "AgeRange",
                        text: oBundle.getText("demographic.analysis.chart.item.age")
                    }),
                    new sap.ui.core.Item({
                        key: "Gender",
                        text: oBundle.getText("demographic.analysis.chart.item.gender")
                    })
            ],
            change: function() {
                var visitDountChart = sap.ui.getCore().byId("visitDountChart");
                var visitColumnChart = sap.ui.getCore().byId("visitColumnChart");

                visitDountChart.oController.refreshChart(this.getSelectedKey());
                visitColumnChart.oController.refreshChart(this.getSelectedKey());
                jQuery.proxy(oController.mapChart.getController().refresh(), oController);
            }
        }).addStyleClass('homepage-select');

        this.oKpiSelect = new sap.m.Select("demoVisitKpiSelector", {
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
                if (this.getSelectedKey() === "Duration") {
                    var page = sap.ui.getCore().byId("DemographicAnalysis");

                    page.removeContent(page.getContent()[1]);
                    page.addContent(sap.ui.getCore().byId("demoChartContanierVD"));
                }
            }
        }).addStyleClass('homepage-select').setVisible(false);

        var visitChartContainer = new sap.suite.ui.commons.ChartContainer({
            dimensionSelectors: [this.oSelect, this.oKpiSelect],
            content: [donutChartContent, columnChartContent, mapChartContent]
        });
        return visitChartContainer;
    }

});