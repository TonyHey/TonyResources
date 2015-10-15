sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.demographicAnalysis.kpi", {

    onInit: function() {
        this.refreshKpi();
    },

    refreshKpi: function() {
        this.kpiModel = new sap.ui.model.json.JSONModel();
        var result = this.getKpiData();
        if(result.status) {
            this.kpiModel.setData(result.data);
        } else {
            console.log("No data -- getKpiData() - [location: Homepage/view/detailPage/demographicAnalysis/kpi.ctl.js]");
            console.log(result.errorInfo);
        }

        this.getView().setModel(this.kpiModel, "kpiModel");
    },

    getKpiData: function() {
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.constant");
        var after = sap.ui.getCore().byId("demographicDate").getDateValue();
        var before = sap.ui.getCore().byId("demographicDate").getSecondDateValue();
        var queryURL = "";
        var result = {
                status: true,
                data: {
                    visitsValue: null,
                    visitsDurationValue: null
                },
                errorInfo: null
        };
        var defaultServerIP = sap.rds.bdi.stream.Homepage.util.constant.DEFAULT_SERVER_IP;
        var util = sap.rds.bdi.stream.Homepage.util.dateConvert;
        var tempFilter = {
                action: "getStreamCountAll",
                after: "",
                before: "",
                serverIP: ""
        };
        var serverSelectIP = sap.ui.getCore().byId("demographicIP").getSelectedKey();

        if(serverSelectIP.length === 0) {
            tempFilter.serverIP = defaultServerIP;
        } else {
            tempFilter.serverIP = serverSelectIP;
        }

        tempFilter.before = util.dateToString(before);
        tempFilter.after = util.dateToString(after);
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

                result.data.visitsValue = data.businessData[0].Visits + " " + data.businessData[0]["Visits_scale"];;
                result.data.visitsDurationValue = util.numberToHourString(data.businessData[0]["Visits Duration Average"]);
            },
            error: function(data){
                result = {
                        status: false,
                        errorInfo: data
                };
            }
        });

        return result;
    }
});