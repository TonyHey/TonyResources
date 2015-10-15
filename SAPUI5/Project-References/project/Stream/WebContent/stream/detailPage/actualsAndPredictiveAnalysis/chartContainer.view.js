sap.ui.jsview("sap.stream.detailPage.actualsAndPredictiveAnalysis.chartContainer", {

	getControllerName: function() {
		return "sap.stream.detailPage.actualsAndPredictiveAnalysis.chartContainer";
	},

	createContent: function(oController) {
 		
 		//select date
 		var month = new sap.m.Link({

			text: "Month",
			press: function(){

			}
		});

		var week = new sap.m.Link({

			text: "Week",
			press: function(){

			}
		});

		var day = new sap.m.Link({

			text: "Day",
			press: function(){

			}
		});

		var hour = new sap.m.Link({

			text: "Hour",
			press: function(){

			}
		});

		var toolbar = new sap.ui.commons.Toolbar().addStyleClass("actuals-APA-select-Date");

		toolbar.addItem(month);
		toolbar.addItem(week);
		toolbar.addItem(day);
		toolbar.addItem(hour);	

 		//Chart View
 		var lineChart = new sap.ui.core.mvc.JSView({
 		    viewName: "sap.stream.detailPage.actualsAndPredictiveAnalysis.lineChart"
 		});

 		var lineChartContent = new sap.suite.ui.commons.ChartContainerContent({
 				icon: "sap-icon://line-chart",
 				title: "vizFrame Line Chart Sample",
 				content: lineChart
 		});

 		var ctb = new sap.suite.ui.commons.ChartContainer({
 			content: [lineChartContent],
 		});
 		ctb.setShowFullScreen(true);
 		ctb.setShowPersonalization(false);
 		ctb.setAutoAdjustHeight(true);

 		//select number
 		var selectNumberData = {
 						"items": [
 							{
 								"text": "Number of visits"
 							},

 							{
 								"text": "Number of unique visitors"
 							},

 							{
 								"text": "Bandwidth"
 							}
 						],
 		};
 		var selectNumberModel = new sap.ui.model.json.JSONModel();
 		selectNumberModel.setData(selectNumberData);
 		var oItemTemplate = new sap.ui.core.Item({
 			text: "{number>text}"
 		});
 		var selectNumber = new sap.m.Select({
 			items: {
 					path: "number>/items",
 					template: oItemTemplate
 			},
 		}).addStyleClass("no-border");
 		selectNumber.setModel(selectNumberModel, "number");

 		//select forecast
 		var forecastTemplate = new sap.ui.core.Item({
 			text: "{forecast>text}"
 		});
 		var forecast = new sap.m.Select({
 			items: {
 					path: "forecast>/items",
 					template: forecastTemplate
 			},
 		}).addStyleClass("no-border");
 		forecast.setModel(selectNumberModel, "forecast");

 		ctb.addDimensionSelector(selectNumber);
 		ctb.addDimensionSelector(forecast);
 		ctb.addDimensionSelector(toolbar);

 		return ctb;
	}

});