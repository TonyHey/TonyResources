sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.timeSeriesAnalysis.kpi", {

    onInit: function() {
//        this.refreshKPI("Month");
    },

    refreshKPI: function(dimen, that) {
        //get KPI Data
        this.kpiData;
        //data binding 
        this.oModel = new sap.ui.model.json.JSONModel();
        var result = this.getKpiData(dimen, this, that);
        //Bind model to KPI

    },

    getKpiData: function(dimen, that, view) {
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.constant");

        var after = sap.ui.getCore().byId("detailDateSelect").getDateValue();
        var before = sap.ui.getCore().byId("detailDateSelect").getSecondDateValue();
        var queryURL = "";
        var result = {};
        var defaultServerIP = sap.rds.bdi.stream.Homepage.util.constant.DEFAULT_SERVER_IP;
        var util = sap.rds.bdi.stream.Homepage.util.dateConvert;
        var tempFilter = {
                action: "",
                dimen: "",
                after: "",
                before: "",
                serverIP: ""
        };
        /* get ServerIP */
        var serverSelectIP = sap.ui.getCore().byId("timeSAServerIP").getSelectedKey();
        if(serverSelectIP.length === 0) {
            tempFilter.serverIP = defaultServerIP;
        } else {
            tempFilter.serverIP = serverSelectIP;
        }

        tempFilter.before = util.dateToString(before);
        tempFilter.action = "getStreamCountAll";
        tempFilter.after = util.dateToString(after);

        queryURL = "ui/xsjs/api.xsjs/intelligence/" + tempFilter.action
                                                   + "?after=" + tempFilter.after
                                                   + "&before=" + tempFilter.before
                                                   + "&serverIP=" + tempFilter.serverIP;

        jQuery.ajax({
            url: queryURL,
            dataType: 'json',
            async: true,
            type: "GET",
            success: function(data) {
                data.businessData[0]["Visits Duration Average"] = util.numberToHourString(data.businessData[0]["Visits Duration Average"]);
                data.businessData[0]["Unique Visitors"] = data.businessData[0]["Unique Visitors"] + " " + data.businessData[0]["UniqueVisitors_scale"];
                data.businessData[0]["Visits"] = data.businessData[0]["Visits"] + " " + data.businessData[0]["Visits_scale"];
                data.businessData[0]["Pages"] = data.businessData[0]["Pages"] + " " + data.businessData[0]["Pages_scale"];
                data.businessData[0]["Bandwidth"] = data.businessData[0]["Bandwidth"] + " " + data.businessData[0]["Bandwidth_scale"];
                result = {
                        status: true,
                        data: data
                };
                that.kpiData = result.data;
                that.oModel.setData(that.kpiData);
                view.setModel(that.oModel);
            },
            error: function(data){
                result = {
                        status: false,
                        data: data
                };
            }
        });

        return result;
    },

    changeKPI: function(dimen) {

        this.refreshKPI(dimen);
    },

    refreshLineChart: function(title) {
        this.lineChartView = sap.ui.getCore().byId("timeSeriesLineChart");
        var lineChartController = this.lineChartView.oController;
        var kpiTitleData = title;

        if( title == "Unique" ) {
            lineChartController.refreshChartData("Unique Visitors");
        }else if( title == "avgVisitDuration" ) {
            lineChartController.refreshChartData("Visits Duration Average");
        }else {
            lineChartController.refreshChartData(title); 
        }

    },

    refreshBarChart: function(title) {
        var barChartView = sap.ui.getCore().byId("timeSeriesColumnChart");
        var barChartController = barChartView.oController;

        if( title == "Unique" ) {
            barChartController.refreshColumnChartData("Unique Visitors");
        }else if( title == "avgVisitDuration" ) {
            barChartController.refreshColumnChartData("Visits Duration Average");
        }else {
            barChartController.refreshColumnChartData(title);
        }
    }

});