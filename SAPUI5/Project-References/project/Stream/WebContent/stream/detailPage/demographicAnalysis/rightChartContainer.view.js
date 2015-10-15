sap.ui.jsview("sap.stream.detailPage.demographicAnalysis.rightChartContainer", {
 
	getControllerName : function() {
		return "sap.stream.detailPage.demographicAnalysis.rightChartContainer";
	},

	createContent : function(oController) {
	    var oBarChartright = new sap.ui.core.mvc.JSView({
            viewName: "sap.stream.detailPage.demographicAnalysis.chartView.BarChartright"
        });
    
        var oVizFrameright = new sap.ui.core.mvc.JSView({
            viewName: "sap.stream.detailPage.demographicAnalysis.chartView.VizFrameright"
        });
    
        var rightmap = sap.ui.view({
        type : sap.ui.core.mvc.ViewType.HTML,
        viewName : "sap.stream.detailPage.demographicAnalysis.chartView.mapright",
      //  controller : mapController
        }).addStyleClass("map");

        var ctborightBarChartContent = new sap.suite.ui.commons.ChartContainerContent({
            icon : "sap-icon://pie-chart",
            title : "Revenue By Country",
            content : oBarChartright
        });
        

        var ctborightVizFrameContent = new sap.suite.ui.commons.ChartContainerContent({
            icon : "sap-icon://vertical-bar-chart",
            title : "Revenue By Country",
            content : oVizFrameright
        });
        
        var ctbrightmapContent = new sap.suite.ui.commons.ChartContainerContent({
            icon : "sap-icon://map",
            title : "rightmap",
            content : rightmap
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
//          change : 
//                  function(oEvent){
//              measureProfit : new sap.viz.ui5.data.MeasureDefinition({
//                  name:"profit",
//                  value:"{profit}" 
//              });
//                
//          var oItem = oEvent.getParameters().selectedItem;
//          var key = oItem.getKey();
//          if(key == "revenue"){
//              
//              oDataset.removeAllMeasures();
//              oDataset.addMeasure(measureProfit);
//              
//          }else if(key == "profit"){
//              
//          }
//          
//          }
                        
     
        }).addStyleClass('timeSA-leftSelect');

        var ctb1 = new sap.suite.ui.commons.ChartContainer({
            content : [ctborightBarChartContent, ctborightVizFrameContent,ctbrightmapContent]
        }).addStyleClass("chart");
        
        ctb1.addDimensionSelector(oSelect);
        ctb1.setShowFullScreen(true);
        ctb1.setShowLegend(true);
//        ctb1.setShowZoom(false);
//      ctb.setAutoAdjustHeight(true);
        
        return ctb1;
	}

});