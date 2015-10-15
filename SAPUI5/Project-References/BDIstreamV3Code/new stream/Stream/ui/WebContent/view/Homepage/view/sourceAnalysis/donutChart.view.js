sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.sourceAnalysis.donutChart", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.sourceAnalysis.donutChart";
    },

    createContent : function(oController) {
        oController.donutChart = new sap.viz.ui5.Donut({
                width: "260px",
                height: "260px",
        
                legend: {
                    visible: false
                },
                dataLabel: {
                	"hideWhenOverlap": true,
                	"visible": true,
                	//"position":"outside",
                	"formatString": [["0.00%"],["0.00%"]]
                },
                plotArea: {
                    colorPalette: ['#3496f2', '#d1dd1b', '#f8a12e', '#ce82bf', '#ffe02e']
                }
            }).addStyleClass("trafficSA-barChart");

        return oController.donutChart;
    }
});