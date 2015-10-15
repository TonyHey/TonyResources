sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.lineChart", {

    onInit: function() {
        var defaultMeasure = "Unique Visitors";
        
        this.refreshChart(defaultMeasure);
    },

    refreshChart: function(measure) {
        this.oModel = new sap.ui.model.json.JSONModel();
        var result = this.getChartData(measure);
        
        if(result.status) {
            this.oModel.setData(result.data);
        } else {
            console.log("No data ------- getChartData() ------ [location: Homepage/view/detailPage/userNavigationAnalysis/lineChart.ctl.js]");
        }

        this.dataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [ {
                axis: 1,
                name: "Month",
                value: "{Month}"
            } ],
            measures: [ {
                name: measure,
                value: '{'+ measure + '}'
            } ],
            data: {
                path: "/businessData"
            }
        });
        this.lineChart.setModel(this.oModel);
        this.lineChart.setDataset(this.dataset);
    },

    getChartData: function(measure) {
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.constant");
        
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
        var serverSelectIP = sap.ui.getCore().byId("userNavigationAnalysisServerIP").getSelectedKey();
        if(serverSelectIP.length === 0) {
            tempFilter.serverIP = defaultServerIP;
        } else {
            tempFilter.serverIP = serverSelectIP;
        }

        tempFilter.after = util.dateToString(sap.ui.getCore().byId("userNavigationAnalysisDateSelect").getDateValue());
        tempFilter.before = util.dateToString(sap.ui.getCore().byId("userNavigationAnalysisDateSelect").getSecondDateValue());

        switch(measure) {
            case "Unique Visitors":
                tempFilter.action = "getStreamMonth";
                break;
            default:
                console.log("Error! No measures of " + measure + " [location: Homepage/view/detailPage/userNavigationAnalysis/lineChart.ctl.js]");
                return false;
        }

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