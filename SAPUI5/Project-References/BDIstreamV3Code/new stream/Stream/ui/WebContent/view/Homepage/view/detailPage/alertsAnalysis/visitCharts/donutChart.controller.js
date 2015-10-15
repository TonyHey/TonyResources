sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.visitCharts.donutChart", {

    onInit : function() {
        var defaultDimen = "Month";
        
        this.refreshChart(defaultDimen);
    },

    refreshChart: function(dimen) {
        this.oModel = new sap.ui.model.json.JSONModel();
        var result = this.getChartData(dimen);
        
        if(result.status) {
            this.oModel.setData(result.data);
        } else {
            console.log("No data ------- getChartData() ------ [location: Homepage/view/detailPage/alertsAnalysis/donutChart.ctl.js]");
        }

        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        
        this.dataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [{
                axis: 1, 
                name: oBundle.getText("alerts.analysis.chart.alert"), 
                value: "{AlertType}"
            }],                     
            measures: [{
                name: oBundle.getText("alerts.analysis.chart.percent"), 
                value: '{Percent}'   
            }],
            data: {
                path: "/businessData"
            }
        });
        this.donutChart.setModel(this.oModel);
        this.donutChart.setDataset(this.dataset);        
    },
    /*
     * getChartData
     *  
     */
    getChartData: function(dimen) {
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.constant");
        var after = sap.ui.getCore().byId("alertsDate").getDateValue();
        var before = sap.ui.getCore().byId("alertsDate").getSecondDateValue();
        
        var queryURL = "";
        var result = {};
        var defaultServerIP = sap.rds.bdi.stream.Homepage.util.constant.DEFAULT_SERVER_IP;
        var util = sap.rds.bdi.stream.Homepage.util.dateConvert;
        var tempFilter = {
                action: "",
                after: "",
                before: "",
                serverIP: ""
        };

        /* get ServerIP */
        var serverSelectIP = sap.ui.getCore().byId("alertsIP").getSelectedKey();
        if(serverSelectIP.length === 0) {
            tempFilter.serverIP = defaultServerIP;
        } else {
            tempFilter.serverIP = serverSelectIP;
        }

        tempFilter.before = util.dateToString(before);
        tempFilter.after = util.dateToString(after);
        tempFilter.action = "getAlertCountAll";
        
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