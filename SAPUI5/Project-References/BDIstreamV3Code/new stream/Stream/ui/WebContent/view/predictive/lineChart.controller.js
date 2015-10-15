sap.ui.controller("sap.rds.bdi.stream.Homepage.view.predictive.lineChart", {

    onAfterRendering: function() {
        var defaultType = "Visits";

        this.refreshChart(defaultType);
    },

    refreshChart: function(type) {
        this.oModel = new sap.ui.model.json.JSONModel();
        var result = this.getChartData(type, this);
        
        if(result.status) {
            this.oModel.setData(result.data);
        }
        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        
        this.dataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [{   
                axis: 1,
                name: oBundle.getText("homepage.tile.chart.forecast.month"),
                value: "{YearMonth}"
            }],
            measures: [
                {
                    name: oBundle.getText("homepage.tile.chart.actual.data"),
                    value: "{ActualData}"
                },
                {
                    name: oBundle.getText("homepage.tile.chart.forecast.data"),
                    value: "{ForecastData}"
                }
            ],
            data: {
                path: "/businessData"
            }
        });
        
        this.lineChart.setModel(this.oModel);
        this.lineChart.setDataset(this.dataset);
        
    },

    /*
     * getChartData
     *  
     */
    getChartData: function(type, that) {
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.constant");
        
        var queryURL = "";
        var result = {};
        var defaultServerIP = sap.rds.bdi.stream.Homepage.util.constant.DEFAULT_SERVER_IP;
        var defaultPeriods = sap.rds.bdi.stream.Homepage.util.constant.DEFAULT_FORECAST_PERIODS
        var util = sap.rds.bdi.stream.Homepage.util.dateConvert;
        var tempFilter = {
                action: "",
                dimen: "",
                after: "",
                before: "",
                serverIP: "",
                periods: defaultPeriods
        };
        var serverSelectIP = "";

        /* get ServerIP */
        if (sap.ui.getCore().byId("serverSelector") != undefined) {
            serverSelectIP = sap.ui.getCore().byId("serverSelector").getSelectedKey();
        }
        if (serverSelectIP.length === 0) {
            tempFilter.serverIP = defaultServerIP;
        } else {
            tempFilter.serverIP = serverSelectIP;
        }

        tempFilter.dimen = "Month";
        tempFilter.before = util.dateToString(new Date());
        tempFilter.after = util.afterDateToString(tempFilter.dimen, 12);

        switch(type) {
            case "Visits":
            {
                tempFilter.action = "getPredictVisits";
                break;
            }
            case "Bandwidth":
            {
                tempFilter.action = "getPredictBandwidth";
                break;
            }
            case "UV":
            {
                tempFilter.action = "getPredictUV";
                break;
            }
            default:
                console.log("Error! No dimensions of " + dimen + " [location: Homepage/view/predictive/lineChart.ctl.js]");
                return false;
        }

        queryURL = "ui/xsjs/api.xsjs/intelligence/" + tempFilter.action
                                                        + tempFilter.dimen
                                                        + "?after=" + tempFilter.after
                                                        + "&before=" + tempFilter.before
                                                        + "&serverIP=" + tempFilter.serverIP
                                                        + "&periods=" + tempFilter.periods;

        jQuery.ajax({
            url: queryURL,
            dataType: 'json',
            async: true,
            type: "GET",
            success: function(data) {
                result = {
                        status: true,
                        data: data
                };
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

});