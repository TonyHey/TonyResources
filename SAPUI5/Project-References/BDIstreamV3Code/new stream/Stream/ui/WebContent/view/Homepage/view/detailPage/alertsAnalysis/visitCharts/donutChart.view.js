sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.visitCharts.donutChart", {

    getControllerName: function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.visitCharts.donutChart";
    },

    createContent: function(oController) {
    	var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        oController.donutChart = new sap.viz.ui5.Donut({
        	width: "100%",
        	height: "400px",
            plotArea: {
                colorPalette: ['#f8a12e', '#d1dd1b', '#3496f2', '#ce82bf', '#ffe02e']
            },
            title: new sap.viz.ui5.types.Title ({
                visible: true,
                text: oBundle.getText("alerts.analysis.chart.total.visit"),
                layout: new sap.viz.ui5.types.Title_layout ({
                    position: "bottom"
                })
            })
        });

        return oController.donutChart;
    }
    
});