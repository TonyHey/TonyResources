sap.ui.controller("sap.stream.detailPage.timeSeriesAnalysis.detail", {

	onInit: function(){
		
	},
	
	onAfterRendering: function() {
		this.setPageTitle("Time Series Analysis");
		
    },

    toHome: function() {
        sap.ui.getCore().byId("shellView").getController().homeView.getController().toHome();
    },
        
    setStyle: function(e) {
    	
    	this.oLink1.removeStyleClass('detail-page-circle-selected');
    	this.oLink2.removeStyleClass('detail-page-circle-selected');
    	this.oLink3.removeStyleClass('detail-page-circle-selected');
    	this.oLink4.removeStyleClass('detail-page-circle-selected');
    	e.addStyleClass ('detail-page-circle-selected');
    	
    },
    
    setPageTitle: function(titleText) {
        this.oPageTitle.setText(titleText);
        sap.ui.getCore().byId("oShell").setSearch(this.oPageTitle);
    },

    getServer: function() {

        var oModel = new sap.ui.model.json.JSONModel();
        var that = this;
        jQuery.ajax({
            url: "ui/services/intelligence.xsjs?cmd=getAllServerIP",
            dataType: 'json',
            async: false,
            type: "GET",
            success: function(data) {
                that.oData = data;
            },
            error: function(data){
                console.log("Tracing[05] ----------- getAllServerIP ------ fail");
                console.log(data);
            }
        });

        oModel.setData(this.oData);
        
        return oModel;
        
    },
    
});