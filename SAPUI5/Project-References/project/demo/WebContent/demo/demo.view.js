sap.ui.jsview("demo.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf demo.demo
	*/ 
	getControllerName : function() {
		return "demo.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf demo.demo
	*/ 
	createContent : function(oController) {
	 // Prepare business data
        
    
        // A Dataset defines how the model data is mapped to the chart 
        oController.oDataset = new sap.viz.ui5.data.FlattenedDataset({
            // a Bar Chart requires exactly one dimension (x-axis) 
            dimensions : [ {
                axis : 1, // must be one for the x-axis, 2 for y-axis
                name : 'Country',
                value : "{Country}"
            } ],
            // it can show multiple measures, each results in a new set of bars in a new color 
            measures : [
            // measure 1
            {
                name : 'Profit', // 'name' is used as label in the Legend 
                value : '{profit}' // 'value' defines the binding for the displayed value   
            } ],
            // 'data' is used to bind the whole data collection that is to be displayed in the chart 
            data : {
                path : "/businessData"
            }
        });
    
        // create a VizContainer
        var oVizContainer = new sap.viz.ui5.VizContainer("chart",{
            'uiConfig' : {
                'layout' : 'vertical',
                'enableMorphing' : true
            },
            'width': '100%',
            'height': '100%'
        });
    
        // attach the model to the chart and display it
        oVizContainer.setVizData(oController.oDataset);
        
    
        // set feeds
        var aobjCountry = new sap.viz.ui5.controls.common.feeds.AnalysisObject({
            uid : "Country_id",
            name : "Country",
            type : "Dimension"
        }), aobjProfit = new sap.viz.ui5.controls.common.feeds.AnalysisObject({
            uid : "Profit_id",
            name : "Profit",
            type : "Measure"
        });
        var feedPrimaryValues = new sap.viz.ui5.controls.common.feeds.FeedItem({
            uid : "primaryValues",
            type : "Measure",
            values : [ aobjProfit ]
        }), feedAxisLabels = new sap.viz.ui5.controls.common.feeds.FeedItem({
            uid : "axisLabels",
            type : "Dimension",
            values : [ aobjCountry ]
        });

        oVizContainer.addFeed(feedPrimaryValues);
        oVizContainer.addFeed(feedAxisLabels);
    
        // attach event listener for feedschange
        oVizContainer.attachEvent('feedsChanged', function(e) {
            // You could add your own logic to handle feedsChanged to set new dataset to vizContainer.
            // Reset current data for demo purpose.
            oVizContainer.setVizData(new sap.viz.ui5.data.FlattenedDataset({
                dimensions : [ {
                    axis : 1,
                    name : 'Country',
                    value : "{Country}"
                } ], measures : [ {
                    name : 'Profit', 
                    value : '{profit}'
                } ], data : {
                    path : "/businessData"
                }
            }));
            
        });
        
        return oVizContainer;
	}
	
	

});