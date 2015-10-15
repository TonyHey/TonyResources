sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.chartContainer", {

    onInit: function() {

    },

    onAfterRendering: function() {

    },

    refreshChart: function(measure) {
        console.log(measure);
        console.log(this.oChartContainer.getContent()[0].getContent());
        this.oChartContainer.removeAllContent();

        if (measure == "Unique Visitors") {
            this.barChartView.getController().refreshChart(measure);
            this.oChartContainer.addContent(this.oLineChart);

        } else if (measure == "User") {
            this.barChartView.getController().refreshChart(measure);
            this.oChartContainer.addContent(this.oBarChart);

        } else if (measure == "Page") {
            this.barChartView.getController().refreshChart(measure);
            this.oChartContainer.addContent(this.oBarChart);

        } else {
            this.barChartView.getController().refreshChart(measure);
            this.oChartContainer.addContent(this.oLineChart);

        }
        console.log(this.oChartContainer.getContent()[0].getContent());
    }
});