sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.predictive.lineChart", {

    getControllerName: function() {
        return "sap.rds.bdi.stream.Homepage.view.predictive.lineChart";
    },

    createContent: function(oController) {
    	var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        oController.lineChart = new sap.viz.ui5.Line("", {
            width: "100%",
            height: "230px",
            plotArea: {
                colorPalette: ['#f8a12e', '#d1dd1b', '#3496f2', '#ce82bf', '#ffe02e']
            },
            legend: {
                visible: true
            },
            title: {
                text: oBundle.getText("homepage.tile.chart.predict.visit"),
                visible: false
            }
        }).addStyleClass("homepage-predictive-tile-lineChart");

        var oXAxis = new sap.viz.ui5.types.Axis({
            title: new sap.viz.ui5.types.Axis_title({
                text: ' '
            })
        });
        oXAxis.getAxisline().setVisible(false);
        oXAxis.getAxisTick().setVisible(false); 
        oController.lineChart.setXAxis(oXAxis);
        oController.lineChart.getLegendGroup().getLayout().setPosition(sap.viz.ui5.types.Legend_layout_position.bottom);

        return oController.lineChart;
    }
});