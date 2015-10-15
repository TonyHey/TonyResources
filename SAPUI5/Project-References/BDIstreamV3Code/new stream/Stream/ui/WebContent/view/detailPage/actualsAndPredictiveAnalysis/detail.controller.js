sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.actualsAndPredictiveAnalysis.detail", {

    onAfterRendering: function() {
        
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
                console.log("Error! - GetAllServerIP - fail- Location: [Homepage/view/detailPage/actualsAndPredictiveAnalysis/detail.ctl.js]");
                console.log(data);
            }
        });

        oModel.setData(this.oData);
        return oModel;
    },

    refreshKPI : function() {
        var measure = sap.ui.getCore().byId("measureSelected").getSelectedKey();
        var dimension = sap.ui.getCore().byId("dimensionSelected").getSelectedKey();
        var period = sap.ui.getCore().byId("forecastSelected").getSelectedKey();
        this.oKpiView.getController().refreshKpi(measure, dimension, period);
    },

    refreshChart: function() {
        this.oChartView.getController().refreshChart();
    },

    convertString: function(dateStr) {
        var year = dateStr.substring(0, 4);
        var month = dateStr.substring(4, 6);
        var day = dateStr.substring(6, 8);

        return year+"/"+month+"/"+day;
    },
});