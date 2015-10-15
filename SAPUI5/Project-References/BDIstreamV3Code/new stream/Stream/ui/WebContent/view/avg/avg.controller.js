sap.ui.controller("sap.rds.bdi.stream.Homepage.view.avg.avg", {

    onAfterRendering: function() {
        this.refreshChart();
    },

    refreshChart: function() {
        this.oModel = new sap.ui.model.json.JSONModel();
        var result = this.getChartData(this);

        if(result.status) {
            this.oModel.setData(result.data);
        } else {
            console.log("No data ------- getChartData() ------ [location: Homepage/view/avg/avg.ctl.js]");
        }

        this.getView().setModel(this.oModel, "viewModel");
    },

    getChartData: function(that) {
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
        var tempFilter = {
                action: "getStreamCountAll",
                after: "",
                before: "",
                serverIP: ""
        };
        var serverSelectIP = "";

        /* get ServerIP */
        if (sap.ui.getCore().byId("serverSelector") != undefined) {
            serverSelectIP = sap.ui.getCore().byId("serverSelector").getSelectedKey();
        }
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
                result.data.currentMonthVisitDuration = data.businessData[0]["Visits Duration Average"];
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
                result.data.lastMonthVisitDuration = data.businessData[0]["Visits Duration Average"];
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
                var monthBeforeLastMonthVD = data.businessData[0]["Visits Duration Average"];
                var trend = Math.round(((lastMonthVD - monthBeforeLastMonthVD) / monthBeforeLastMonthVD)*100);

                result.data.lastMonthTrend = trend >= 0 ? "+" + trend + "%": "" + trend + "%";
                that.checkTrend(that, result);
            },
            error: function(data){
                result = {
                        status: false,
                        data: data
                };
            }
        });
        // Get average month VisitDuration
        tempFilter.after = util.firstDayOfLast12Months();
        tempFilter.before = util.lastDayOfLast12Months();

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
                var temp = data.businessData[0]["Visits Duration Average"];
                result.data.avgVisitDuration = Math.round(temp/12);
            },
            error: function(data){
                result = {
                        status: false,
                        data: data
                };
            }
        });

        // Convert result type --> "MM:SS"
        result.data.currentMonthVisitDuration = util.numberToHourString(result.data.currentMonthVisitDuration);
        result.data.lastMonthVisitDuration = util.numberToHourString(result.data.lastMonthVisitDuration);
        result.data.avgVisitDuration = util.numberToHourString(result.data.avgVisitDuration);

        return result;
    },

    checkTrend: function(that, result) {
        var trendValue = result.data.lastMonthTrend;

        if(trendValue.slice(0, 1) === "-") {
            that.monthValueTrend.addStyleClass("homepage-tile-value-trend-negative");
        } else {
            that.monthValueTrend.addStyleClass("homepage-tile-value-trend-positive");
        }
    }
});