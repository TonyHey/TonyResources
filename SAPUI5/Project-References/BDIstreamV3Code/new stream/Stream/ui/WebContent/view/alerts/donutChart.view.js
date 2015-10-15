sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.alerts.donutChart", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.alerts.donutChart";
    },

    createContent : function(oController) {
        oController.donutChart = new sap.viz.ui5.Donut("", {
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
                colorPalette: ['#f8a12e', '#d1dd1b', '#3496f2', '#ce82bf', '#ffe02e']
            }
        });

        return oController.donutChart;
    }
});