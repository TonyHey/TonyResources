sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.kpi", {

    onInit: function() {
        this.refreshKpi();
    },

    onAfterRendering: function() {
        var defaultChart = "UniqueVisitors";
        if (sap.ui.getCore().byId(defaultChart)) {
            sap.ui.getCore().byId(defaultChart).addStyleClass("selected-kpi-title");
        }
    },

    refreshKpi: function() {
        this.kpiModel = new sap.ui.model.json.JSONModel();
        var result = this.getKpiData();
        
        if(result.status) {
            this.kpiModel.setData(result.data);
        } else {
            console.log("No data -- getKpiData() - [location: Homepage/view/detailPage/userNavigationAnalysis/kpi.ctl.js]");
            console.log(result.errorInfo);
        }

        this.getView().setModel(this.kpiModel, "kpiModel");
    },

    getKpiData: function() {
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.constant");
        
        var queryURL = "";
        var result = {
                status: true,
                data: {
                    uniqueVisitors: 0,
                    currentDayUV: 0,
                    top10Users: 0,
                    currentDayTop10Users: 0,
                    top10Pages: 0,
                    currentDayTop10Pages: 0
                },
                errorInfo: ""
        };
        var defaultServerIP = sap.rds.bdi.stream.Homepage.util.constant.DEFAULT_SERVER_IP;
        var util = sap.rds.bdi.stream.Homepage.util.dateConvert;
        var tempFilter = {
                action: "",
                after: "",
                before: "",
                serverIP: ""
        };

        /* get ServerIP */
        var serverSelectIP = sap.ui.getCore().byId("userNavigationAnalysisServerIP").getSelectedKey();
        if(serverSelectIP.length === 0) {
            tempFilter.serverIP = defaultServerIP;
        } else {
            tempFilter.serverIP = serverSelectIP;
        }

        // Unique Visitors
        tempFilter.action = "getCountStream";
        tempFilter.after = util.dateToString(sap.ui.getCore().byId("userNavigationAnalysisDateSelect").getDateValue());
        tempFilter.before = util.dateToString(sap.ui.getCore().byId("userNavigationAnalysisDateSelect").getSecondDateValue());

        queryURL = "ui/services/intelligence.xsjs?cmd=" + tempFilter.action
                                                        + "&dimen=" + "MONTH"
                                                        + "&after=" + tempFilter.after
                                                        + "&before=" + tempFilter.before
                                                        + "&serverIP=" + tempFilter.serverIP;

        jQuery.ajax({
            url: queryURL,
            dataType: 'json',
            async: false,
            type: "GET",
            success: function(data) {
                result.data.uniqueVisitors = data.businessData[0].Unique;
            },
            error: function(data){
                result = {
                        status: false,
                        errorInfo: data
                };
            }
        });

        // Current Day Unique Visitors
        tempFilter.action = "getCountStream";
        tempFilter.after = util.dateToString(new Date());
        tempFilter.before = util.dateToString(new Date());

        queryURL = "ui/services/intelligence.xsjs?cmd=" + tempFilter.action
                                                        + "&dimen=" + "MONTH"
                                                        + "&after=" + tempFilter.after
                                                        + "&before=" + tempFilter.before
                                                        + "&serverIP=" + tempFilter.serverIP;

        jQuery.ajax({
            url: queryURL,
            dataType: 'json',
            async: false,
            type: "GET",
            success: function(data) {
                result.data.currentDayUV = data.businessData[0].Unique;
            },
            error: function(data){
                result = {
                        status: false,
                        errorInfo: data
                };
            }
        });

        // Total Visits Top 10 Users
        tempFilter.action = "getCountUserNavigationalAnalysis";
        tempFilter.after = util.dateToString(sap.ui.getCore().byId("userNavigationAnalysisDateSelect").getDateValue());
        tempFilter.before = util.dateToString(sap.ui.getCore().byId("userNavigationAnalysisDateSelect").getSecondDateValue());

        queryURL = "ui/services/intelligence.xsjs?cmd=" + tempFilter.action
                                                        + "&after=" + tempFilter.after
                                                        + "&before=" + tempFilter.before
                                                        + "&serverIP=" + tempFilter.serverIP;

        jQuery.ajax({
            url: queryURL,
            dataType: 'json',
            async: false,
            type: "GET",
            success: function(data) {
                result.data.top10Users = data.businessData[0].Total;
            },
            error: function(data){
                result = {
                        status: false,
                        errorInfo: data
                };
            }
        });

        // Current Day Total Visits Top 10 Users
        tempFilter.action = "getCountUserNavigationalAnalysis";
        tempFilter.after = util.dateToString(new Date());
        tempFilter.before = util.dateToString(new Date());

        queryURL = "ui/services/intelligence.xsjs?cmd=" + tempFilter.action
                                                        + "&after=" + tempFilter.after
                                                        + "&before=" + tempFilter.before
                                                        + "&serverIP=" + tempFilter.serverIP;

        jQuery.ajax({
            url: queryURL,
            dataType: 'json',
            async: false,
            type: "GET",
            success: function(data) {
                result.data.currentDayTop10Users = data.businessData[0].Total;
            },
            error: function(data){
                result = {
                        status: false,
                        errorInfo: data
                };
            }
        });

        // Total Visits Top 10 Pages
        tempFilter.action = "getCountPagNavigationalAnalysis";
        tempFilter.after = util.dateToString(sap.ui.getCore().byId("userNavigationAnalysisDateSelect").getDateValue());
        tempFilter.before = util.dateToString(sap.ui.getCore().byId("userNavigationAnalysisDateSelect").getSecondDateValue());

        queryURL = "ui/services/intelligence.xsjs?cmd=" + tempFilter.action
                                                        + "&after=" + tempFilter.after
                                                        + "&before=" + tempFilter.before
                                                        + "&serverIP=" + tempFilter.serverIP;

        jQuery.ajax({
            url: queryURL,
            dataType: 'json',
            async: false,
            type: "GET",
            success: function(data) {
                result.data.top10Pages = data.businessData[0].Total;
            },
            error: function(data){
                result = {
                        status: false,
                        errorInfo: data
                };
            }
        });

        // Current Day Total Visits Top 10 Pages
        tempFilter.action = "getCountPagNavigationalAnalysis";
        tempFilter.after = util.dateToString(new Date());
        tempFilter.before = util.dateToString(new Date());

        queryURL = "ui/services/intelligence.xsjs?cmd=" + tempFilter.action
                                                        + "&after=" + tempFilter.after
                                                        + "&before=" + tempFilter.before
                                                        + "&serverIP=" + tempFilter.serverIP;

        jQuery.ajax({
            url: queryURL,
            dataType: 'json',
            async: false,
            type: "GET",
            success: function(data) {
                result.data.currentDayTop10Pages = data.businessData[0].Total;
            },
            error: function(data){
                result = {
                        status: false,
                        errorInfo: data
                };
            }
        });
        return result;
    },

    changeChart: function(dimension, that, oLink) {
        sap.ui.getCore().byId("UniqueVisitors").removeStyleClass("selected-kpi-title");
        sap.ui.getCore().byId("top10Users").removeStyleClass("selected-kpi-title");
        sap.ui.getCore().byId("top10Pages").removeStyleClass("selected-kpi-title");
        oLink.addStyleClass("selected-kpi-title");

        var measure = $(".selected-kpi-title");
        if (measure == undefined) {
            measure = "Unique Visitors";
        } else if (measure.text() == "Unique Visitors") {
            measure = "Unique Visitors";
        } else if (measure.text() == "Total Visits for Top 10 Users") {
            measure = "User";
        } else if (measure.text() == "Total Visits for Top 10 Pages Viewed") {
            measure = "Page";
        }
        sap.ui.getCore().byId("userNavigationChartContainer").getController().refreshChart(measure);
    }
});