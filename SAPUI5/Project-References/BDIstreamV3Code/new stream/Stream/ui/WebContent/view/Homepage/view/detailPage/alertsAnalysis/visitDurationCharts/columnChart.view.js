sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.visitDurationCharts.columnChart", {

    getControllerName: function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.visitDurationCharts.columnChart";
    },

    createContent: function(oController) {
        var oModel10 = new sap.ui.model.json.JSONModel({
            BusinessData: [
                {Event: "Excessive Use",Duration:278.51,profit:141.25},
                {Event: "Data Changes",Duration:398.62,profit:133.82},
                {Event: "Fraud and Criminal Activities",Duration:875.00,profit:348.76},
                {Event: "Suspicious Behaviour",Duration:465.54,profit:217.29},
                {Event: "Memory Changes",Duration:623.65,profit:117}
            ]
        });
        
        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        
        var oDataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [{   
                   axis: 1,
                   name: oBundle.getText("alerts.analysis.chart.event"),
                   value: "{Event}"
                }],            
             measures: [{   
                    name: oBundle.getText("alerts.analysis.chart.duration"),
                    value: "{Duration}"
                }],
             data: {
                 path: "/BusinessData"
             }
        });
        
        var oBarChart = new sap.viz.ui5.Column({
            plotArea: {},
            title: {
                visible: true,
                text: oBundle.getText("alerts.analysis.avg.visit.duration")
            },
            dataset: oDataset
        }).addStyleClass("barchart");

        oBarChart.setModel(oModel10);
        
        return oBarChart;
    }

});