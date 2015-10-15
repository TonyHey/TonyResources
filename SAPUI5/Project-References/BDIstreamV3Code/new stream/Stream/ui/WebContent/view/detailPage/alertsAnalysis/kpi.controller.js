sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.kpi", {
	
    refreshKPI: function() {
        //get KPI Data
        this.kpiModel;
        var result = this.getKpiData();
        
        if(result.status) {
//            var totalLocale = result.data.businessData[0].Total.toLocaleString('en-IN');
//            result.data.businessData[0].Total = totalLocale;
            this.kpiModel = result.data;
        } else {
            console.log("No data ------- getKPItData() ------ [location: Homepage/view/detailPage/alertsAnalysis/kpi.ctl.js]");
        }
        //Bind model to KPI
        
    },

    getKpiData: function(dimen) {
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.constant");
        var IP = sap.ui.getCore().byId("alertsIP");

        var after = sap.ui.getCore().byId("alertsDate").getDateValue();
        var before = sap.ui.getCore().byId("alertsDate").getSecondDateValue();
        var queryURL = "";
        var result = {};
        var defaultServerIP = sap.rds.bdi.stream.Homepage.util.constant.DEFAULT_SERVER_IP;
        var util = sap.rds.bdi.stream.Homepage.util.dateConvert;
        var tempFilter = {
//                action: "getKpiAgeAnalysis",
        		action: "getAlertCountAll",
                dimen: "",
                after: "",
                before: "",
                serverIP: ""
        };
        /* get ServerIP */
//        var serverSelectIP = sap.ui.getCore().byId("shellView").getController().homeView.getController().serverSelect.getSelectedKey();
        var serverSelectIP = sap.ui.getCore().byId("alertsIP").getSelectedKey();
     
        if(serverSelectIP.length === 0) {
            tempFilter.serverIP = defaultServerIP;
        } else {
            tempFilter.serverIP = serverSelectIP;
        }

        tempFilter.before = util.dateToString(before);
        tempFilter.after = util.dateToString(after);
        queryURL = "ui/xsjs/api.xsjs/alert/" + tempFilter.action
                                                        + "?after=" + tempFilter.after
                                                        + "&before=" + tempFilter.before
                                                        + "&serverIP=" + tempFilter.serverIP;

        jQuery.ajax({
            url: queryURL,
            dataType: 'json',
            async: false,
            type: "GET",
            success: function(data) {
                result = {
                        status: true,
                        data:   data
                };
                result.data.Total = data.businessData[0].Total + " " + data.businessData[0]["Total_scale"];
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

    refreshAvg: function() {
        this.avgModel;
        var result = this.getAvgData();
        
        if(result.status) {
            this.avgModel = result.data;
            
        } else {
            console.log("No data ------- getChartData() ------ [location: Homepage/view/avg/avg.ctl.js]");
        }
    },

    getAvgData: function() {
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.constant");

        var queryURL = "";
        var result = {
                status: true,
                data: {
                    currentMonthVisitDuration: 0,
                    lastMonthVisitDuration: 0,
                    lastMonthTrend: 0,
                    avgVisitDuration: 0
                }
        };
        var defaultServerIP = sap.rds.bdi.stream.Homepage.util.constant.DEFAULT_SERVER_IP;
        var util = sap.rds.bdi.stream.Homepage.util.dateConvert;
        var after = util.dateToString(sap.ui.getCore().byId("alertsDate").getDateValue());
        var before = util.dateToString(sap.ui.getCore().byId("alertsDate").getSecondDateValue());
        var tempFilter = {
                action: "getDurationCount",
                after: "",
                before: "",
                serverIP: ""
        };

        /* get ServerIP */
        var serverSelectIP = sap.ui.getCore().byId("alertsIP").getSelectedKey();
        if(!serverSelectIP.length) {
            tempFilter.serverIP = defaultServerIP;
        } else {
            tempFilter.serverIP = serverSelectIP;
        }

        // Get current month VisitDuration
        tempFilter.after = util.firstDayOfCurrentMonth();
        tempFilter.before = util.dateToString(new Date());

        queryURL = "ui/xsjs/api.xsjs/intelligence/" + tempFilter.action
                                                        + "?after=" + tempFilter.after
                                                        + "&before=" + tempFilter.before
                                                        + "&serverIP=" + tempFilter.serverIP;

        jQuery.ajax({
            url: queryURL,
            dataType: 'json',
            async: false,
            type: "GET",
            success: function(data) {
                result.data.currentMonthVisitDuration = data.businessData;
            },
            error: function(data){
                result = {
                        status: false,
                        data: data
                };
            }
        });
        // Get last month VisitDuration
        tempFilter.after = util.firstDayOfLastMonth();
        tempFilter.before = util.lastDayOfLastMonth();

        queryURL = "ui/xsjs/api.xsjs/intelligence/" + tempFilter.action
                                                    + "?after=" + tempFilter.after
                                                    + "&before=" + tempFilter.before
                                                    + "&serverIP=" + tempFilter.serverIP;

        jQuery.ajax({
            url: queryURL,
            dataType: 'json',
            async: false,
            type: "GET",
            success: function(data) {
                result.data.lastMonthVisitDuration = data.businessData;
            },
            error: function(data){
                result = {
                        status: false,
                        data: data
                };
            }
        });
        // Get lastMonthTrend of the month before last month VisitDuration
        tempFilter.after = util.firstDayOfTheMonthBeforeLast();
        tempFilter.before = util.lastDayOfTheMonthBeforeLast();

        queryURL = "ui/xsjs/api.xsjs/intelligence/" + tempFilter.action
                                                    + "?after=" + tempFilter.after
                                                    + "&before=" + tempFilter.before
                                                    + "&serverIP=" + tempFilter.serverIP;

        jQuery.ajax({
            url: queryURL,
            dataType: 'json',
            async: false,
            type: "GET",
            success: function(data) {
                var lastMonthVD = result.data.lastMonthVisitDuration;
                var monthBeforeLastMonthVD = data.businessData;
                var trend = Math.round(((lastMonthVD - monthBeforeLastMonthVD) / monthBeforeLastMonthVD)*100);
                
                result.data.lastMonthTrend = trend >= 0 ? "+" + trend + "%": "-" + trend + "%";
            },
            error: function(data){
                result = {
                        status: false,
                        data: data
                };
            }
        });
        // Get average month VisitDuration
        // tempFilter.after = util.firstDayOfLast12Months();
        // tempFilter.before = util.lastDayOfLast12Months();
        tempFilter.after = after;
        tempFilter.before = before;

        queryURL = "ui/xsjs/api.xsjs/intelligence/" + tempFilter.action
                                                    + "?after=" + tempFilter.after
                                                    + "&before=" + tempFilter.before
                                                    + "&serverIP=" + tempFilter.serverIP;

        jQuery.ajax({
            url: queryURL,
            dataType: 'json',
            async: false,
            type: "GET",
            success: function(data) {
                var temp = data.businessData;

                result.data.avgVisitDuration = Math.round(temp/12);
            },
            error: function(data){
                result = {
                        status: false,
                        data: data
                };
            }
        });

        // Convert result type --> "XX:XX"
        result.data.currentMonthVisitDuration = util.numberToHourString(result.data.currentMonthVisitDuration);
        result.data.lastMonthVisitDuration = util.numberToHourString(result.data.lastMonthVisitDuration);
        result.data.avgVisitDuration = util.numberToHourString(result.data.avgVisitDuration);

        return result;
    }
});