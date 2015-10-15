sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.detail", {
    
    onAfterRendering: function() {
    
         this.refreshChart();

    },

    convertString: function(date) {
        var year = date.substring(0, 4);
        var month = date.substring(4, 6);
        var day = date.substring(6, 8);

        return year+"/"+month+"/"+day;
    },

    refreshKPI : function() {
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
        var alertsKPIPage = sap.ui.getCore().byId("alertsKPI");
        alertsKPIPage.oController.refreshKPI();
        alertsKPIPage.oController.refreshAvg();
        //total visites
        var odata = new sap.ui.model.json.JSONModel();
        odata.setData(alertsKPIPage.oController.kpiModel);
        alertsKPIPage.setModel(odata, "kpitotal");
        //average
        var avgData = new sap.ui.model.json.JSONModel();
        avgData.setData(alertsKPIPage.oController.avgModel);
        alertsKPIPage.setModel(avgData, "avgnumber");
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
                console.log(data);
            }
        });

        oModel.setData(this.oData);
        return oModel;
    },

    refreshChart: function() {
        var dimen = "Month";
        sap.ui.getCore().byId("alertsDountChart").oController.refreshChart(dimen);
        sap.ui.getCore().byId("alertsColumnChart").oController.refreshChart(dimen);
        sap.ui.getCore().byId("alertsMapChart").oController.refresh();
    }

});