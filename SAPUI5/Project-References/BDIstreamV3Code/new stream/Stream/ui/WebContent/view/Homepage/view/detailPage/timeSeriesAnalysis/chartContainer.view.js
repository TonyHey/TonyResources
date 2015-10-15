
sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.timeSeriesAnalysis.chartContainer", {

	getControllerName : function() {
		return "sap.rds.bdi.stream.Homepage.view.detailPage.timeSeriesAnalysis.chartContainer";
	},

	createContent : function(oController) {	
		var that = this;
		
		var lineChartView =  new sap.ui.core.mvc.JSView ("timeSeriesLineChart", {
			viewName: 'sap.rds.bdi.stream.Homepage.view.detailPage.timeSeriesAnalysis.lineChart'
		});
		
		var barChartView = new sap.ui.core.mvc.JSView ("timeSeriesColumnChart", {
			viewName: 'sap.rds.bdi.stream.Homepage.view.detailPage.timeSeriesAnalysis.barChart'
		});
		
		var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
		
		var oChartContainerContent = new sap.suite.ui.commons.ChartContainerContent ({
        	icon: "sap-icon://line-chart",
			title: oBundle.getText("time.series.analysis.line.chart"),
			content: lineChartView
        });
		
		var oCCC = new sap.suite.ui.commons.ChartContainerContent ({
			icon: "sap-icon://bar-chart",
			content: barChartView
		});
        
        var oChartContainer = new sap.suite.ui.commons.ChartContainer ({
        	showPersonalization: false,
        	showFullScreen: false,
        	showLegend: true,
        	title: '',
        	content: [oChartContainerContent]
        });
        
	    var selectString = new sap.m.Select({
		items: [
		         new sap.ui.core.Item({text:oBundle.getText("time.series.analysis.top10.user")}),
 	             new sap.ui.core.Item({text:oBundle.getText("time.series.analysis.top5.user")}),
 	             new sap.ui.core.Item({text:oBundle.getText("time.series.analysis.top10.weeks")})
		        ]			
		
	    }).addStyleClass("timeSA-leftSelect");	
	
        oChartContainer.addContent (oCCC);
      
        return oChartContainer;
	},

});