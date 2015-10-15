sap.ui.jsview("sap.stream.detailPage.demographicAnalysis.chartView.BarChartright", {

	getControllerName : function() {
		return "sap.stream.detailPage.demographicAnalysis.chartView.BarChartright";
	},

	createContent : function(oController) {
	      var oModel10 = new sap.ui.model.json.JSONModel({
	            BusinessData:[
	                {Country: "Canada",revenue:410.87,profit:141.25},
	                {Country: "China",revenue:338.29,profit:133.82},
	                {Country: "France",revenue:487.66,profit:348.76},
	                {Country: "Germany",revenue:470.23,profit:217.29},
	                {Country: "India",revenue:170.93,profit:117},
	                {Country: "United States",revenue:905.80,profit:609.16}
	            ]
	        });
	      
	      var oDataset1 = new sap.viz.ui5.data.FlattenedDataset({
	            dimensions:[
	               {
	                   axis:1,
	                   name:"Country",
	                   value:"{Country}"
	               }         
	                        ],
	             measures :[
	               {    
	                    name:"profit",
	                    value:"{profit}"
	               }
	                        ],
	             data:{
	                 path:"/BusinessData"
	             }
	        });
	      
	        var orightBarChart = new sap.viz.ui5.Donut({
	        	width: '100%',
	            plotArea:{
	            },
	            title:{
	                visible:true,
	                text:"profit By Country"
	            },
	            dataset : oDataset1
	        }).addStyleClass("barchart");
	        
	        orightBarChart.setModel(oModel10);
	        
	        return orightBarChart;
	}

});