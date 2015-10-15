sap.ui.controller("sap.stream.detailPage.actualsAndPredictiveAnalysis.detail", {
	
   	toHome: function() {

        sap.ui.getCore().byId("shellView").getController().homeView.getController().toHome();
    },

    toDetailPage: function() {
        
        this.actualsAndPredictiveAnalysisPage.removeAllContent();
        var newView = new sap.ui.core.mvc.JSView({
          viewName : "sap.stream.detailPage.sourceAnalysis.kpiHeader"
        });
        var newChartView = new sap.ui.core.mvc.JSView({
            viewName : "sap.stream.detailPage.sourceAnalysis.chartView"
            });
        this.actualsAndPredictiveAnalysisPage.addContent(newChartView);
        
    },

    setPageTitle: function(titleText) {
        this.oPageTitle.setText(titleText);
        sap.ui.getCore().byId("oShell").setSearch(this.oPageTitle);
    },

    onAfterRendering: function() {
        this.setPageTitle("Actuals and Predictive Analysis");
    },
    
    setStyle: function(e) {
    	
    	this.oneBtn.removeStyleClass('detail-page-circle-selected');
    	this.twoBtn.removeStyleClass('detail-page-circle-selected');
    	this.threeBtn.removeStyleClass('detail-page-circle-selected');
    	this.fourBtn.removeStyleClass('detail-page-circle-selected');
    	e.addStyleClass ('detail-page-circle-selected');
    	
    },


});