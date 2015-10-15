sap.ui.controller("sap.rds.bdi.stream.Homepage.view.visits.visits", {

    onAfterRendering: function() {
        var defaultDimen = "Month";

        this.refreshChart(defaultDimen);

    },

    refreshChart: function(dimen) {
        this.oModel = new sap.ui.model.json.JSONModel();
        var result = this.getChartData(dimen, this);

        if(result.status) {
            this.oModel.setData(result.data);
        }

        this.getView().setModel(this.oModel, "oModel");
    },

    getChartData: function(dimen, that) {
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.constant");
        
        var queryURL = "";
        var result = {
                status: true,
                data: {
                    currentMonthVisits: 0,
                    lastMonthVisits: 0,
                    lastMonthTrend: 0,
                    avgVisits: 0
                }
        };
        var defaultServerIP = sap.rds.bdi.stream.Homepage.util.constant.DEFAULT_SERVER_IP;
        var util = sap.rds.bdi.stream.Homepage.util.dateConvert;
        var tempFilter = {
                action: "",
                dimen: "",
                after: "",
                before: "",
                serverIP: ""
        };

        var serverSelectIP = "";
        /* get ServerIP */
        if (sap.ui.getCore().byId("serverSelector") != undefined) {
            serverSelectIP = sap.ui.getCore().byId("serverSelector").getSelectedKey();
        }
        if (!serverSelectIP.length) {
            tempFilter.serverIP = defaultServerIP;
        } else {
            tempFilter.serverIP = serverSelectIP;
        }

        tempFilter.action = "getStreamCountAll";
        // Get current month Visits
        tempFilter.after = util.firstDayOfCurrentMonth();
        tempFilter.before = util.dateToString(new Date());

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
                result.data.currentMonthVisits = data.businessData[0].Visits;
                that.oModel.setData(result.data);
            },
            error: function(data){
                result = {
                        status: false,
                        data: data
                };
            }
        });
        // Get last month Visits
        tempFilter.after = util.firstDayOfLastMonth();
        tempFilter.before = util.lastDayOfLastMonth();

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
                result.data.lastMonthVisits = data.businessData[0].Visits;
                that.oModel.setData(result.data);
            },
            error: function(data){
                result = {
                        status: false,
                        data: data
                };
            }
        });
        // Get lastMonthTrend of the month before last month Visits
        tempFilter.after = util.firstDayOfTheMonthBeforeLast();
        tempFilter.before = util.lastDayOfTheMonthBeforeLast();

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
                var lastMonthVisits = result.data.lastMonthVisits;
                var monthBeforeLastMonthVisits = data.businessData[0].Visits;
                var trend = Math.round(((lastMonthVisits - monthBeforeLastMonthVisits) / monthBeforeLastMonthVisits)*100);
                
                result.data.lastMonthTrend = trend > 0 ? "+" + trend + "%": "" + trend + "%";

                that.checkTrend(that, result);
                that.oModel.setData(result.data);
            },
            error: function(data){
                result = {
                        status: false,
                        data: data
                };
            }
        });
        // Get average month Visits
        tempFilter.after = util.firstDayOfLast12Months();
        tempFilter.before = util.lastDayOfLast12Months();

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
                var temp = data.businessData[0].Visits_origin;
                result.data.avgVisits = Math.round(temp/12);
                that.oModel.setData(result.data);
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

    checkTrend: function(that, result) {
        var trendValue = result.data.lastMonthTrend;

        if(trendValue.slice(0, 1) === "-") {
            that.monthValueTrend.addStyleClass("homepage-tile-value-trend-negative");
        } else {
            that.monthValueTrend.addStyleClass("homepage-tile-value-trend-positive");
        }
    }
});