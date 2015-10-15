sap.ui.jsview("sap.stream.detailPage.demographicAnalysis.leftChartContainer", {

	getControllerName : function() {
		return "sap.stream.detailPage.demographicAnalysis.leftChartContainer";
	},
 
	createContent : function(oController) {
	        var oBarChartleft = new sap.ui.core.mvc.JSView({
	            viewName: "sap.stream.detailPage.demographicAnalysis.chartView.BarChartleft"
	        });
	    
	        var oVizFrameleft = new sap.ui.core.mvc.JSView({
                viewName: "sap.stream.detailPage.demographicAnalysis.chartView.VizFrameleft"
            });
	    
            var map = sap.ui.view({
            type : sap.ui.core.mvc.ViewType.HTML,
            viewName : "sap.stream.detailPage.demographicAnalysis.chartView.map",
          //  controller : mapController
            }).addStyleClass("map");

	        var ctboBarChartContent = new sap.suite.ui.commons.ChartContainerContent({
	            icon : "sap-icon://pie-chart",
	            title : "Revenue By Country",
	            content : oBarChartleft
	        });
	        

	        var ctboVizFrameContent = new sap.suite.ui.commons.ChartContainerContent({
	            icon : "sap-icon://vertical-bar-chart",
	            title : "Revenue By Country",
	            content : oVizFrameleft
	        });
	        
	        var ctbmapContent = new sap.suite.ui.commons.ChartContainerContent({
	            icon : "sap-icon://map",
	            title : "map",
	            content : map
	        });
	        
	        var oSelect = new sap.m.Select({
	            items : [new sap.ui.core.Item({
	                key : "revenue",
	                text : "By Revenue"
	            }),

	            new sap.ui.core.Item({
	                key : "profit",
	                text : "By Profit"
	            })],	                        
	     
	        }).addStyleClass('timeSA-leftSelect');

	        var ctb = new sap.suite.ui.commons.ChartContainer({
	            content : [ctboBarChartContent, ctboVizFrameContent,ctbmapContent]
	        });
	        
	        ctb.addDimensionSelector(oSelect);
	        ctb.setShowFullScreen(true);
//	        ctb.setShowLegend(true);
//	        ctb.setAutoAdjustHeight(true);
	        
	        return ctb;
	}

});