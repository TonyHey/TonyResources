sap.ui.controller("sap.stream.trafficSourceAnalysis.donutChart", {

    onInit : function() {
        this.model = new sap.ui.model.json.JSONModel({
            businessData: [ {
                Country: "Search Traffic",
                profit: 369.25
            }, {
               Country: "Referral",
                profit: 333.82
            }, {
                Country: "Country3",
                profit: 348.76
            } ]
        });

        this.dataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [{
                axis: 1, 
                name: 'Country', 
                value: "{Country}"
            }],
            measures: [{
                name: 'Profits',  
                value: '{profit}'   
            }],
            data: {
                path: "/businessData"
            }
        });
             
        this.donutChart.setModel(this.model);
        this.donutChart.setDataset(this.dataset);        
    },
    
    onAfterRendering: function() {

    }
});