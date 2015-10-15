sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.actualsAndPredictiveAnalysis.chartContainer", {

    onInit: function() {
        
    },

    refreshChart: function() {
        this.lineChartView.getController().refreshChart();
    },
    
    refreshKpi: function() {
        var measure = sap.ui.getCore().byId("measureSelected").getSelectedKey();
        var dimension = sap.ui.getCore().byId("dimensionSelected").getSelectedKey();
        var period = sap.ui.getCore().byId("forecastSelected").getSelectedKey();
        sap.ui.getCore().byId("predictiveKpiView").getController().refreshKpi(measure, dimension, period);
    }
});