sap.ui.controller("sap.stream.alerts.donutChart", {

    onInit : function() {
        this.Model = new sap.ui.model.json.JSONModel({
            businessData: [ {
                Country: "Dormant",
                profit: 141.25
            }, {
                Country: "Warnings",
                profit: 133.82
            }, {
                Country: "Country3",
                profit: 348.76
            }, {
                Country: "Country4",
                profit: 217.29
            }, {
                Country: "Country5",
                profit: 117.00
            }, {
                Country: "Country6",
                profit: 609.16
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

        this.donutChart.setModel(this.Model);
        this.donutChart.setDataset(this.dataset);        
    }
});