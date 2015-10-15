sap.ui.controller("sap.stream.detailPage.timeSeriesAnalysis.lineChart", {

	onInit: function() {
		
		this.oModel = new sap.ui.model.json.JSONModel({
			businessData : [
				{Country :"Canada",revenue:410.87,profit:-141.25, population:34789000},
				{Country :"China",revenue:338.29,profit:133.82, population:1339724852},
				{Country :"France",revenue:487.66,profit:348.76, population:65350000},
				{Country :"Germany",revenue:470.23,profit:217.29, population:81799600},
				{Country :"India",revenue:170.93,profit:117.00, population:1210193422},
				{Country :"United States",revenue:905.08,profit:609.16, population:313490000}
			]
		});		

		this.oDataset = new sap.viz.ui5.data.FlattenedDataset({

			dimensions : [ 
				{
					axis : 1, // must be one for the x-axis, 2 for y-axis
					name : 'Country', 
					value : "{Country}"
				} 
			],

			measures : [ 
				{
					name : 'Profit', // 'name' is used as label in the Legend 
					value : '{profit}' // 'value' defines the binding for the displayed value   
				},
				{
					name : 'Revenue', 
					value : '{revenue}'
				},
				{
					name : 'population', 
					value : '{population}'
				}
			],
			
			data : {
				path : "/businessData"
			}
			
		});
		
		this.olineChart.setModel(this.oModel);
		this.olineChart.setDataset(this.oDataset);
	},

});