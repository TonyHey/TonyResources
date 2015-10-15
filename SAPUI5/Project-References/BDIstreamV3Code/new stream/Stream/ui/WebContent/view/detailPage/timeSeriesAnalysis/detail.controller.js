sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.timeSeriesAnalysis.detail", {

    onAfterRendering: function() {

        this.refreshLineChart();
        this.refreshColumnChart();

    
    },

    getServer: function(that) {

        var oModel = new sap.ui.model.json.JSONModel();
        jQuery.ajax({
            url: "ui/xsjs/api.xsjs/intelligence/getAllServerIP",
            dataType: 'json',
            async: true,
            type: "GET",
            success: function(data) {
                oModel.setData(data);
                that.oServerSelect.setModel(oModel, "select-model");
            },
            error: function(data){
                console.log("Tracing[05] ----------- getAllServerIP ------ fail");
                console.log(data);
            }
        });

    },

    getDate: function() {

    },

    refreshKPI : function() {
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
        var timeSeriesKPIPage = sap.ui.getCore().byId("timeSeriesKPIPage");
        timeSeriesKPIPage.oController.refreshKPI("Month", timeSeriesKPIPage);

        var oModel = new sap.ui.model.json.JSONModel();
        oModel.setData(timeSeriesKPIPage.oController.kpiData);
        timeSeriesKPIPage.setModel(oModel);

    },

    convertString: function(date) {

        var year = date.substring(0, 4);
        var month = date.substring(4, 6);
        var day = date.substring(6, 8);

        return year+"/"+month+"/"+day;
    },

    refreshLineChart: function() {

        var selected = $(".selected-kpi-title").attr("id");
        if ( selected == "Unique" ) {
            selected = "Unique Visitors";
        }else if ( selected == "avgVisitDuration" ) {
            selected = "Visits Duration Average";
        };
        
        this.lineChartView = sap.ui.getCore().byId("timeSeriesLineChart");
        var lineChartController = this.lineChartView.oController;
        lineChartController.refreshChartData(selected);

    },

    refreshColumnChart: function() {

        var selected = $(".selected-kpi-title").attr("id");
        if ( selected == "Unique" ) {
            selected = "Unique Visitors";
        }else if ( selected == "avgVisitDuration" ) {
            selected = "Visits Duration Average";
        };

        this.columnChartView = sap.ui.getCore().byId("timeSeriesColumnChart");
        var columnChartController = this.columnChartView.oController;
        columnChartController.refreshColumnChartData(selected);

    }

});