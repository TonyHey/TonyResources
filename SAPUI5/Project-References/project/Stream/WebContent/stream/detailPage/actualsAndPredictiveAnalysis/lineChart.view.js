sap.ui.jsview("sap.stream.detailPage.actualsAndPredictiveAnalysis.lineChart", {

	getControllerName: function() {
		return "sap.stream.detailPage.actualsAndPredictiveAnalysis.lineChart";
	},

	createContent: function(oController) {
 		
		oController.oLineChart = new sap.viz.ui5.Line({
				width: "100%",
				height: "500px",
		});

		return oController.oLineChart;
		
	}

});