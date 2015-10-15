sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.visitCharts.columnChart", {

    getControllerName: function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.visitCharts.columnChart";
    },

    createContent: function(oController) {
        oController.columnChart = new sap.viz.ui5.Column({
            width: "100%",
            height: "450px",
            title: {
                visible: false,
            },
            plotArea: {
                colorPalette: ['#3496f2', '#ce82bf', '#ffe02e']
            }
        }).addStyleClass("sourceAnalysis-detail-columnChart");

        return oController.columnChart;
    } 
    
});