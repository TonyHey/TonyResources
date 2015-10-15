sap.ui.jsview("sap.stream.mostVisitedPages.columnChart", {

    getControllerName: function() {
        return "sap.stream.mostVisitedPages.columnChart";
    },

    createContent: function(oController) {
        oController.columnChart = new sap.viz.ui5.Column("", {
            width: "100%",
            height: "200px",
            plotArea: {
                colorPalette: ['#3496f2']
            },
            legend: {
                visible: false
            },
        });

        return oController.columnChart;
    }
});