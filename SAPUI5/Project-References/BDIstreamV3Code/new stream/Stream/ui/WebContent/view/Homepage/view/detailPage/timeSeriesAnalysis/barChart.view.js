sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.timeSeriesAnalysis.barChart", {

	getControllerName : function() {
		return "sap.rds.bdi.stream.Homepage.view.detailPage.timeSeriesAnalysis.barChart";
	},

	createContent : function(oController) {
		var legend = new sap.viz.ui5.types.Legend({
            layout: new sap.viz.ui5.types.Legend_layout({
                position: sap.viz.ui5.types.Legend_layout_position.bottom 
            })
        });
		
		oController.olineChart = new sap.viz.ui5.Column ({
			width : "100%",
			height : "400px",
			legendGroup: legend,
			plotArea : {
				
			},
			title : {
				visible : false
			},
            plotArea: {
                colorPalette: ['#0ABEE5', '#AFDB58', '#FFC15B', '#E892C4']
            }
		});
	
		return oController.olineChart;
	}

});