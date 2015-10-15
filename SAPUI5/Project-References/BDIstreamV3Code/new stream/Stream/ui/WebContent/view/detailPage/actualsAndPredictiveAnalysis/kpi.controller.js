sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.actualsAndPredictiveAnalysis.kpi", {

	onInit: function() {
        var defaultMeasure = "Visits";
        var defaultDimen = "Month";
        var defaultPeriod = 5;
        
        this.refreshKpi(defaultMeasure, defaultDimen, defaultPeriod);
    },

    refreshKpi: function(measure, dimen, period) {
        this.kpiModel = new sap.ui.model.json.JSONModel();
        var result = this.getKpiData(measure, dimen, period);
                
        if(result.status) {
            this.kpiModel.setData(result.data);
        } else {
            console.log("No data ------- getKpiData() ------ [location: Homepage/view/detailPage/actualsAndPredictiveAnalysis/kpi.ctl.js]");
        }

        this.getView().setModel(this.kpiModel, "kpiModel");
        
    },

    getKpiData: function(measure, dimen, period) {
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.constant");
        
        var queryURL = "";
        var result = {
                status: true,
                data: {
                	visitsActual: 0,
                	visitsPredictive: 0,
                	visitsScale: "",
                	UVActual: 0,
                	UVPredictive: 0,
                	UVScale: "",
                	BandwidthActual: 0,
                	BandwidthPredictive: 0,
                	BandwidthScale: ""
                },
                errorInfo: ""
        };
        var defaultServerIP = sap.rds.bdi.stream.Homepage.util.constant.DEFAULT_SERVER_IP;
        var defaultSource = sap.rds.bdi.stream.Homepage.util.constant.DEFAULT_SOURCE;
        var util = sap.rds.bdi.stream.Homepage.util.dateConvert;
        var tempFilter = {
                action: "",
                dimen: "",
                after: "",
                before: "",
                serverIP: "",
                periods: "",
                source: ""
        };

        /* get Source */
        var sourceSelect = sap.ui.getCore().byId("actualsAndPredictiveAnalysisSourceSelect").getSelectedKey();
        if(sourceSelect.length === 0) {
            tempFilter.source = defaultSource;
        } else {
            tempFilter.source = sourceSelect;
        }         
        
        /* get ServerIP */
        var serverSelectIP = sap.ui.getCore().byId("actualsAndPredictiveAnalysisServerIP").getSelectedKey();
        if(serverSelectIP.length === 0) {
            tempFilter.serverIP = defaultServerIP;
        } else {
            tempFilter.serverIP = serverSelectIP;
        }

        tempFilter.periods = period;
        tempFilter.dimen = dimen;
        tempFilter.after = util.dateToString(sap.ui.getCore().byId("actualsAndPredictiveAnalysisDateSelect").getDateValue());
        tempFilter.before = util.dateToString(sap.ui.getCore().byId("actualsAndPredictiveAnalysisDateSelect").getSecondDateValue());
        
        switch(measure) {
        
            case "Visits":
                tempFilter.action = "getPredictVisits";
                queryURL = "ui/xsjs/api.xsjs/intelligence/" + tempFilter.action
		        + tempFilter.dimen
		        + "?after=" + tempFilter.after
		        + "&before=" + tempFilter.before
		        + "&serverIP=" + tempFilter.serverIP
		        + "&periods=" + tempFilter.periods
		        + "&source=" + tempFilter.source;
				jQuery.ajax({
					url: queryURL,
					dataType: 'json',
					async: false,
					type: "GET",
					success: function(data) {
						if(data.additionalData.length == 0 && data.businessData.length == 0){
							result.data.visitsActual = 0;
							result.data.visitsPredictive = 0;
							result.data.visitsScale = '';
						} else{
							result.data.visitsActual = data.additionalData[0].ActualDataAvg;
							result.data.visitsPredictive = data.additionalData[0].ForecastDataAvg;
							result.data.visitsScale = data.additionalData[0].DataScale;
						}
					},
					error: function(data){
						result = {
							status: false,
							data: data
						};
					}
				});
				sap.ui.getCore().byId("visitsActualCompare").setColor("Error");
				sap.ui.getCore().byId("visitsPredictiveCompare").setColor("Error");
				sap.ui.getCore().byId("UVActualCompare").setColor("Neutral");
				sap.ui.getCore().byId("UVPredictiveCompare").setColor("Neutral");
				sap.ui.getCore().byId("BandwidthActualCompare").setColor("Neutral");
				sap.ui.getCore().byId("BandwidthPredictiveCompare").setColor("Neutral");
                break;
                
            case "UV":
            	tempFilter.action = "getPredictUV";
                queryURL = "ui/xsjs/api.xsjs/intelligence/" + tempFilter.action
		        + tempFilter.dimen
		        + "?after=" + tempFilter.after
		        + "&before=" + tempFilter.before
		        + "&serverIP=" + tempFilter.serverIP
		        + "&periods=" + tempFilter.periods
		        + "&source=" + tempFilter.source;
				jQuery.ajax({
					url: queryURL,
					dataType: 'json',
					async: false,
					type: "GET",
					success: function(data) {
						if(data.additionalData.length == 0 && data.businessData.length == 0){
							result.data.UVActual = 0;
							result.data.UVPredictive = 0;
							result.data.UVScale = '';
						} else{
							result.data.UVActual = data.additionalData[0].ActualDataAvg;
							result.data.UVPredictive = data.additionalData[0].ForecastDataAvg;
							result.data.UVScale = data.additionalData[0].DataScale;
						}
					},
					error: function(data){
						result = {
							status: false,
							data: data
						};
					}
				});
				sap.ui.getCore().byId("visitsActualCompare").setColor("Neutral");
				sap.ui.getCore().byId("visitsPredictiveCompare").setColor("Neutral");
				sap.ui.getCore().byId("UVActualCompare").setColor("Error");
				sap.ui.getCore().byId("UVPredictiveCompare").setColor("Error");
				sap.ui.getCore().byId("BandwidthActualCompare").setColor("Neutral");
				sap.ui.getCore().byId("BandwidthPredictiveCompare").setColor("Neutral");
                break;
                
            case "Bandwidth":
            	tempFilter.action = "getPredictBandwidth";
                queryURL = "ui/xsjs/api.xsjs/intelligence/" + tempFilter.action
		        + tempFilter.dimen
		        + "?after=" + tempFilter.after
		        + "&before=" + tempFilter.before
		        + "&serverIP=" + tempFilter.serverIP
		        + "&periods=" + tempFilter.periods
		        + "&source=" + tempFilter.source;
				jQuery.ajax({
					url: queryURL,
					dataType: 'json',
					async: false,
					type: "GET",
					success: function(data) {
						if(data.additionalData.length == 0 && data.businessData.length == 0){
							result.data.BandwidthActual = 0;
							result.data.BandwidthPredictive = 0;
							result.data.BandwidthScale = '';
						} else{
							result.data.BandwidthActual = data.additionalData[0].ActualDataAvg;
							result.data.BandwidthPredictive = data.additionalData[0].ForecastDataAvg;
							result.data.BandwidthScale = data.additionalData[0].DataScale;
						}
					},
					error: function(data){
						result = {
							status: false,
							data: data
						};
					}
				});
				sap.ui.getCore().byId("visitsActualCompare").setColor("Neutral");
				sap.ui.getCore().byId("visitsPredictiveCompare").setColor("Neutral");
				sap.ui.getCore().byId("UVActualCompare").setColor("Neutral");
				sap.ui.getCore().byId("UVPredictiveCompare").setColor("Neutral");
				sap.ui.getCore().byId("BandwidthActualCompare").setColor("Error");
				sap.ui.getCore().byId("BandwidthPredictiveCompare").setColor("Error");
                break;
                
            default:
                console.log("Error! No measures of " + measure + " [location: Homepage/view/detailPage/actualsAndPredictiveAnalysis/lineChart.ctl.js]");
                return false;
        }

        return result;
    }
});