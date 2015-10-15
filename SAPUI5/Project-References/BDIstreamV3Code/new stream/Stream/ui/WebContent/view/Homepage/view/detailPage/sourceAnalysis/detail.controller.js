sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.detail", {
    
     onAfterRendering: function() {

     },

     convertString: function(date) {

         var year = date.substring(0, 4);
         var month = date.substring(4, 6);
         var day = date.substring(6, 8);

         return year+"/"+month+"/"+day;
    },

    getServer: function() {

        var oModel = new sap.ui.model.json.JSONModel();
        var that = this;
        jQuery.ajax({
            url: "ui/xsjs/api.xsjs/intelligence/getAllServerIP",
            dataType: 'json',
            async: false,
            type: "GET",
            success: function(data) {
                that.oData = data;
            },
            error: function(data){
                console.log("Tracing[05] ----------- getAllServerIP ------ fail");
            }
        });
        oModel.setData(this.oData);

        return oModel;
    },

    refreshKPI : function() {
        sap.ui.getCore().byId("sourceAnalysisKpi").oController.refreshKpi();
    },

    refreshChart: function() {
        sap.ui.getCore().byId("sourceVisitChartView").oController.refreshChart();
        sap.ui.getCore().byId("sourceVDChartView").oController.refreshChart();
    }
});