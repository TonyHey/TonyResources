sap.ui.jsview("sap.stream.detailPage.timeSeriesAnalysis.chartContainer", {

	getControllerName : function() {
		return "sap.stream.detailPage.timeSeriesAnalysis.chartContainer";
	},

	createContent : function(oController) {	

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
		
		var lineChartView =  new sap.ui.core.mvc.JSView ({
			viewName: 'sap.stream.detailPage.timeSeriesAnalysis.lineChart'
		});
		
		var barChartView = new sap.ui.core.mvc.JSView ({
			viewName: 'sap.stream.detailPage.timeSeriesAnalysis.barChart'
		});
		
		var oChartContainerContent = new sap.suite.ui.commons.ChartContainerContent ({
        	icon: "sap-icon://line-chart",
			title: "vizFrame Line Chart Sample",
			content: lineChartView
        });
		
		var oCCC = new sap.suite.ui.commons.ChartContainerContent ({
			icon: "sap-icon://bar-chart",
			content: barChartView
		});
        
        var oChartContainer = new sap.suite.ui.commons.ChartContainer ({
        	showPersonalization: true,
        	showFullScreen: true,
        	showLegend: true,
        	title: '',
        	content: [oChartContainerContent]
        });
        
	    var selectString = new sap.m.Select({
		items: [
		         new sap.ui.core.Item({text:"By Top 10 Users"}),
 	             new sap.ui.core.Item({text:"By Top 5 Users"}),
 	             new sap.ui.core.Item({text:"By Top 10 Weeks"})
		        ]			
		
	    }).addStyleClass("timeSA-leftSelect");	
	
        oChartContainer.addDimensionSelector (selectString);
        oChartContainer.addDimensionSelector(toolbar);
        oChartContainer.addContent (oCCC);
      
        return oChartContainer;
	}

});