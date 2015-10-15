sap.ui.controller("sap.stream.detailPage.sourceAnalysis.detail", {

    onAfterRendering: function() {
        this.anotherKpiHeaderView.setVisible(false);
        this.anotherChartView.setVisible(false);
        this.setPageTitle("Source Analysis");
    },

    toHome: function() {
        sap.ui.getCore().byId("shellView").getController().homeView.getController().toHome();
    },

    showView: function(viewName) {
        if (viewName === "SourceAnalysis") {
            this.sourceAnalysisPage.removeAllContent();
            this.sourceAnalysisPage.addContent(this.kpiHeaderView);
            this.sourceAnalysisPage.addContent(this.chartView);
            this.setPageTitle("Source Analysis");
        } else if (viewName === "timeSeries") {
            this.sourceAnalysisPage.removeAllContent();
            this.sourceAnalysisPage.addContent(this.anotherKpiHeaderView.setVisible(true));
            this.sourceAnalysisPage.addContent(this.anotherChartView.setVisible(true));
            this.setPageTitle("Time Series");
        }
    },

    setPageTitle: function(titleText) {
        this.oPageTitle.setText(titleText);
        sap.ui.getCore().byId("oShell").setSearch(this.oPageTitle);
    },
    
    setStyle: function(e) {
    	
    	this.sourceAnalysisLink.removeStyleClass('detail-page-circle-selected');
    	this.timeSeriesLink.removeStyleClass('detail-page-circle-selected');
    	e.addStyleClass ('detail-page-circle-selected');
    	
    },
    

});