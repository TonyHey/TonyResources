sap.ui.controller("sap.stream.timeSeries.areaChart", {

    onInit: function() {
        var defaultDimen = "Month";
        
        this.refreshChart(defaultDimen);
    },

    refreshChart: function(dimen) {
        this.oModel = new sap.ui.model.json.JSONModel();
        var result = this.getChartData(dimen);
        
        if(result.status) {
            this.oModel.setData(result.data);
        } else {
            console.log("No data ------- getChartData() ------ [Local: stream/timeSeries/areaChart.ctl.js]");
        }

        this.dataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [ {
                axis: 1,
                name: dimen,
                value: "{" + dimen + "}"
            } ],
            measures: [ {
                name: 'Unique Visitors',
                value: '{Unique Visitors}'
            } ],
            data: {
                path: "/businessData"
            }
        });
        this.areaChart.setModel(this.oModel);
        this.areaChart.setDataset(this.dataset);
    },
    /*
     * getChartData
     *  
     */
    getChartData: function(dimen) {
        jQuery.sap.require("util.dateConvert");
        jQuery.sap.require("util.constant");
        
        var queryURL = "";
        var result = {};
        var defaultServerIP = Stream.util.constant.DEFAULT_SERVER_IP;
        var util = Stream.util.dateConvert;
        var tempFilter = {
                action: "",
                dimen: "",
                after: "",
                before: "",
                serverIP: ""
        };

        /* get ServerIP */
        var serverSelectIP = sap.ui.getCore().byId("shellView").getController().homeView.getController().serverSelect.getSelectedKey();
        if(serverSelectIP.length === 0) {
            tempFilter.serverIP = defaultServerIP;
        } else {
            tempFilter.serverIP = serverSelectIP;
        }

        tempFilter.before = util.dateToString(new Date());

        switch(dimen) {
            case "Month":
            {
                tempFilter.action = "getStream";
                tempFilter.dimen = "MONTH";
                tempFilter.after = util.afterDateToString(dimen);
                break;
            }
            case "Week":
            {
                tempFilter.action = "getStreamWeek";
                tempFilter.after = util.afterDateToString(dimen);
                break;
            }
            case "Day":
            {
                tempFilter.action = "getStream";
                tempFilter.dimen = "DAY";
                tempFilter.after = util.afterDateToString(dimen);   
                break;
            }
            default:
                console.log("Error! No dimensions of " + dimen + " [Local: stream/timeSeries/areaChart.ctl.js]");
                return false;
        }

        queryURL = "./services/intelligence.xsjs?cmd=" + tempFilter.action
                                                        + "&dimen=" + tempFilter.dimen
                                                        + "&after=" + tempFilter.after
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
                        data: data
                };
            },
            error: function(data){
                result = {
                        status: false,
                        data: data
                };
            }
        });

        return result;
    }
});