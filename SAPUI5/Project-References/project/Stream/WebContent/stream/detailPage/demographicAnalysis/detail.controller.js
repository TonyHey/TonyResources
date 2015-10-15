sap.ui.controller("sap.stream.detailPage.demographicAnalysis.detail", {
	
	 onAfterRendering: function() {
		 this.setPageTitle("Demo Graphic Analysis");
	    },

	    toHome: function() {
	        sap.ui.getCore().byId("shellView").getController().homeView.getController().toHome();
	    },
	    
	    setPageTitle: function(titleText) {
	        this.oPageTitle.setText(titleText);
	        sap.ui.getCore().byId("oShell").setSearch(this.oPageTitle);
	    },
	    
	    setStyle: function(e) {
	    	
	    	this.oLink1.removeStyleClass('detail-page-circle-selected');
	    	this.oLink2.removeStyleClass('detail-page-circle-selected');
	    	this.oLink3.removeStyleClass('detail-page-circle-selected');
	    	this.oLink4.removeStyleClass('detail-page-circle-selected');
	    	e.addStyleClass ('detail-page-circle-selected');
	    	
	    },
	    
   
});