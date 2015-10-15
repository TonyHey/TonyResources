sap.ui.controller("sap.stream.detailPage.sourceAnalysis.anotherChartView", {

    onInit: function() {
        this.oModel = new sap.ui.model.json.JSONModel({
            businessData: [
                {Country: "Canada",revenue:410.87,profit:-141.25, population:34789000},
                {Country: "China",revenue:338.29,profit:133.82, population:1339724852},
                {Country: "France",revenue:487.66,profit:348.76, population:65350000},
                {Country: "Germany",revenue:470.23,profit:217.29, population:81799600},
                {Country: "India",revenue:170.93,profit:117.00, population:1210193422},
                {Country: "United States",revenue:905.08,profit:609.16, population:313490000}
            ]
        });

        this.oDataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [ 
                {
                    axis: 1,
                    name: 'Country', 
                    value: "{Country}"
                } 
            ],
            measures: [ 
                {
                    name: 'Profit',
                    value: '{profit}'
                },
                {
                    name: 'Revenue', 
                    value: '{revenue}'
                } 
            ],
            data: {
                path: "/businessData"
            }
        });

        this.oBarChart.setModel(this.oModel);
        this.oBarChart.setDataset(this.oDataset);
    },

    onBeforeRendering: function() {

    },

    onAfterRendering: function() {

    }
});