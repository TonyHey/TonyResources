sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitCharts.donutChart", {

    getControllerName: function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitCharts.donutChart";
    },

    createContent: function(oController) {

        oController.donutChart = new sap.viz.ui5.Donut({
            width: "100%",
            height: "400px",
            plotArea: {
                colorPalette: ['#3496f2', '#d1dd1b', '#f8a12e', '#ce82bf', '#ffe02e','#12C14D']
            },
            title: new sap.viz.ui5.types.Title ({
                visible: true,
                text: "Total Visits",
                layout: new sap.viz.ui5.types.Title_layout ({
                    position: "bottom"
                })
            })
        }).addStyleClass("sourceAnalysis-detail-donutchart");
        
        return oController.donutChart;
    }

});