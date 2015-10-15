sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitCharts.columnChart", {

    getControllerName: function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitCharts.columnChart";
    },

    createContent: function(oController) {

        oController.columnChart = new sap.viz.ui5.Column({
            width: "100%",
            height: '400px',
            plotArea: {
                colorPalette: ['#3496f2', '#ce82bf', '#ffe02e']
            },
            title: new sap.viz.ui5.types.Title ({
                visible: true,
                text: "Total Visits",
                layout: new sap.viz.ui5.types.Title_layout ({
                    position: "bottom"
                })
            }),
        }).addStyleClass("sourceAnalysis-detail-columnChart");
        
        return oController.columnChart;
    }

});