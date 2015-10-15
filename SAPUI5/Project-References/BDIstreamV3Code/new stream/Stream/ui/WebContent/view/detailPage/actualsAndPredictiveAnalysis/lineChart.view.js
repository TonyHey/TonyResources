sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.actualsAndPredictiveAnalysis.lineChart", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.actualsAndPredictiveAnalysis.lineChart";
    },

    createContent : function(oController) {
        /*var oLegend = new sap.viz.ui5.types.Legend({
            layout: new sap.viz.ui5.types.Legend_layout({
                position: sap.viz.ui5.types.Legend_layout_position.bottom 
            })
        });
        
        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        
        var oTextView = new sap.ui.commons.TextView({
        	width : "100%",
            height : "100%",
        	text : oBundle.getText("predictive.analysis.not.enough.data"),
        	design: sap.ui.commons.TextViewDesign.H4,
            textAlign:sap.ui.core.TextAlign.Center
            });
        
        oController.lineChart = new sap.viz.ui5.Line({
            width : "100%",
            height : "400px",
            legendGroup: oLegend,
            plotArea : {
                
            },
            title : {
                visible : false
            },
            noData :  oTextView
        });*/
        oController.lineChart = new sap.viz.ui5.controls.VizFrame("forecastChartId",{
        	width : "100%",
            height : "400px",       	
        	vizType:"line",
        	}); 
        
       // oController.lineChart.setModel(this.getModel("i18n"),"i18n");

        return oController.lineChart;
    }
});