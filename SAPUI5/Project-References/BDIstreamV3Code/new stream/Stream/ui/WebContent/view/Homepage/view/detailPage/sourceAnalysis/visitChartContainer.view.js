sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitChartContainer", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitChartContainer";
    },
 
    createContent : function(oController) {
            var that = this;
            this.donutChart = new sap.ui.core.mvc.JSView("sourceVisitDountChart",{
                viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitCharts.donutChart"
            });

            this.columnChart = new sap.ui.core.mvc.JSView("sourceVisitColumnChart",{
                viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitCharts.columnChart"
            });

            var mapChart = new sap.ui.core.mvc.HTMLView("sourceVisitMapChart", {
                viewName: "sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitCharts.map",
            }).addStyleClass("map");

            var oBundle = jQuery.sap.resources({
            	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
            	locale : sap.ui.getCore().getConfiguration().getLanguage() 
            });
            
            var donutChartContent = new sap.suite.ui.commons.ChartContainerContent({
                icon: "sap-icon://pie-chart",
                title: oBundle.getText("source.analysis.chart.title.revenue.by.country"),
                content: this.donutChart
            });

            var columnChartContent = new sap.suite.ui.commons.ChartContainerContent({
                icon: "sap-icon://vertical-bar-chart",
                title: oBundle.getText("source.analysis.chart.title.revenue.by.country"),
                content: this.columnChart
            });

            var mapChartContent = new sap.suite.ui.commons.ChartContainerContent({
                icon: "sap-icon://choropleth-chart",
                title: oBundle.getText("source.analysis.chart.title.map"),
                content: mapChart
            });

            this.oSelect = new sap.m.Select("sourceVisitSelected",{
                items: [
                        new sap.ui.core.Item({
                            key: "Browser",
                            text: oBundle.getText("source.analysis.chart.item.browser")
                        }),
                        new sap.ui.core.Item({
                            key: "Site",
                            text: oBundle.getText("source.analysis.chart.item.originating.site")
                        })
                ],
                change: function () {
                    //refresh Visits Chart
                    sap.ui.getCore().byId("sourceVisitDountChart").oController.refreshChart();
                    sap.ui.getCore().byId("sourceVisitColumnChart").oController.refreshChart();
                    sap.ui.getCore().byId("sourceVisitMapChart").oController.refresh();
                }
            }).addStyleClass('homepage-select');
            this.oKpiSelect = new sap.m.Select("sourceVisitKpiSelector", {
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
                    if (this.getSelectedKey() === "Duration") {
                        var page = sap.ui.getCore().byId("sourceAnalysis");

                        page.removeContent(page.getContent()[1]);
                        page.addContent(sap.ui.getCore().byId("sourceChartContanierVD"));
                    }
                }
            }).addStyleClass('homepage-select').setVisible(false);

            var visitChartContainer = new sap.suite.ui.commons.ChartContainer("sourceVisitChartContainer", {
                dimensionSelectors: [this.oSelect, this.oKpiSelect],
                content: [donutChartContent, columnChartContent, mapChartContent]
            });

            return visitChartContainer;
    }

});