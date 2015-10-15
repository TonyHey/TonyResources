sap.ui.jsview("sap.stream.detailPage.timeSeriesAnalysis.lineChart", {

	getControllerName : function() {
		return "sap.stream.detailPage.timeSeriesAnalysis.lineChart";
	},

 
	createContent : function(oController) {
		var legend = new sap.viz.ui5.types.Legend({
            layout: new sap.viz.ui5.types.Legend_layout({
                position: sap.viz.ui5.types.Legend_layout_position.bottom 
            })
        });
		
		oController.olineChart = new sap.viz.ui5.Line ({
			width : "100%",
			height : "400px",
			legendGroup: legend,
			plotArea : {
				
			},
			title : {
				visible : false
			}
		});
	
		return oController.olineChart;
 		
	}

});