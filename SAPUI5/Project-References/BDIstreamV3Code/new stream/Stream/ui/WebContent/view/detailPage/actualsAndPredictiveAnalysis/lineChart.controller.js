sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.actualsAndPredictiveAnalysis.lineChart", {

    onInit: function() {
        //this.refreshChart();
    },
    
    onAfterRendering : function () {
    	this.refreshChart();
    },
    
    refreshChart : function () {
    	
        jQuery.ajax({
            url: this._composeQueryURL(),
            dataType: 'json',
            async: true,
            type: "GET",
            context : this
            })
            .done(function (data) {
            	this.updateChart(data)
            })
            .fail(function () {
            	console.log("No data ------- getChartData() ------ [location: Homepage/view/detailPage/actualsAndPredictiveAnalysis/lineChart.ctl.js]");
            });       

    },
    
    updateChart: function(data) {
    	jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.constant");
    	var defaultDimension = sap.rds.bdi.stream.Homepage.util.constant.DEFAULT_DIMENSION;
    	
        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        
        this.lineChart.setModel(sap.ui.getCore().getModel("i18n"),"i18n");
    	
        this.oModel = new sap.ui.model.json.JSONModel(data);
        
        var dimensionSelect = sap.ui.getCore().byId("dimensionSelected").getSelectedKey();
        if(dimensionSelect.length == 0) {
        	dimensionSelect = defaultDimension;
        }   
        
        var dimName = oBundle.getText("predictive.analysis.month");
        if (dimensionSelect == "Day") {
        	dimensionSelect = "Days";
        	dimName = oBundle.getText("predictive.analysis.day")
        } else if (dimensionSelect == "Month") {
        	dimensionSelect = "YearMonth";
        	dimName = oBundle.getText("predictive.analysis.month")
        } else {
        	dimensionSelect = "Week";
        	dimName = oBundle.getText("predictive.analysis.week")
        }        


        this.dataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [ {
                axis: 1,
                name: "Time",
                value: "{" + dimensionSelect + "}"
            } ],
            measures: [
                {
                    //name: oBundle.getText("predictive.analysis.kpi.title.actual"),
                	name: "{i18n>predictive.analysis.kpi.title.actual}",
                    value: "{ActualData}"
                },
                {
                    //name: oBundle.getText("predictive.analysis.kpi.title.predictive"),
                	name: "{i18n>predictive.analysis.kpi.title.predictive}",
                    value: "{ForecastData}"
                }
            ],
            data: {
                path: "/businessData"
            }
        });

        
        this.lineChart.setDataset(this.dataset);
		this.lineChart.setModel(this.oModel);
	
		
		var measure1 = oBundle.getText("predictive.analysis.kpi.title.actual");
		var measure2 = oBundle.getText("predictive.analysis.kpi.title.predictive");
		//var measure1 = "{i18n>predictive.analysis.kpi.title.actual}";
		//var measure2 = "{i18n>predictive.analysis.kpi.title.predictive}";
		this.feedPrimaryValues2 = new sap.viz.ui5.controls.common.feeds.FeedItem({
			'uid' : "primaryValues",
			'type' : "Measure",
			//'values' : ["{i18n>predictive.analysis.kpi.title.actual}",
			 //          "{i18n>predictive.analysis.kpi.title.predictive}"]
			'values' : [measure1,measure2]
		});
		this.feedAxisLabels2 = new sap.viz.ui5.controls.common.feeds.FeedItem({
			'uid' : "axisLabels",
			'type' : "Dimension",
			'values' : [ new sap.viz.ui5.controls.common.feeds.AnalysisObject({
				'uid' : "Time",
				'type' : "Dimension",
				'name' : dimensionSelect
			}) ]
		});
		this.lineChart.removeAllFeeds();
		this.lineChart.addFeed(this.feedPrimaryValues2);
		this.lineChart.addFeed(this.feedAxisLabels2);
		
		this.lineChart.setVizProperties({
    		isFixedDataPointSize : true,
    		legendGroup : {
    			layout : {
    				position : "bottom",
    			}
    		},
    		title : {
    			visible : false
    		},
    		categoryAxis : {
				title : {
					text : dimName
				}
			}
    	});

    },

    _composeQueryURL: function() {
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.constant");
        
        var queryURL = "";
        var result = {};
        var defaultServerIP = sap.rds.bdi.stream.Homepage.util.constant.DEFAULT_SERVER_IP;
        var defaultPeriod = sap.rds.bdi.stream.Homepage.util.constant.DEFAULT_FORECAST_PERIODS;
        var defaultSource = sap.rds.bdi.stream.Homepage.util.constant.DEFAULT_SOURCE;
        var defaultMeasure = sap.rds.bdi.stream.Homepage.util.constant.DEFAULT_MEASURE;
        var defaultDimension = sap.rds.bdi.stream.Homepage.util.constant.DEFAULT_DIMENSION;
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

        /* get ServerIP */
        var serverSelectIP = sap.ui.getCore().byId("actualsAndPredictiveAnalysisServerIP").getSelectedKey();
        if(serverSelectIP.length == 0) {
            tempFilter.serverIP = defaultServerIP;
        } else {
            tempFilter.serverIP = serverSelectIP;
        }
        
        /* get Source */
        var sourceSelect = sap.ui.getCore().byId("actualsAndPredictiveAnalysisSourceSelect").getSelectedKey();
        if(sourceSelect.length == 0) {
            tempFilter.source = defaultSource;
        } else {
            tempFilter.source = sourceSelect;
        }
        
        /* get Forecast Period */
        var periodSelect = sap.ui.getCore().byId("forecastSelected").getSelectedKey();
        if(periodSelect.length == 0) {
            tempFilter.periods = defaultPeriod;
        } else {
            tempFilter.periods = periodSelect;
        }
       
        /* get Dimension */
        var dimensionSelect = sap.ui.getCore().byId("dimensionSelected").getSelectedKey();
        if(dimensionSelect.length == 0) {
            tempFilter.dimen = defaultDimension;
        } else {
            tempFilter.dimen = dimensionSelect;
        }                
        
        /* get Date */
        tempFilter.after = util.dateToString(sap.ui.getCore().byId("actualsAndPredictiveAnalysisDateSelect").getDateValue());
        tempFilter.before = util.dateToString(sap.ui.getCore().byId("actualsAndPredictiveAnalysisDateSelect").getSecondDateValue());
        
        /* get Measure */
        var measureSelect = sap.ui.getCore().byId("measureSelected").getSelectedKey();
        if(measureSelect.length == 0) {
        	measureSelect = defaultMeasure;
        }     
        switch(measureSelect) {
            case "Visits":
                tempFilter.action = "getPredictVisits";
                break;
            case "UV":
                tempFilter.action = "getPredictUV";
                break;
            case "Bandwidth":
                tempFilter.action = "getPredictBandwidth";
                break;    
            default:
                console.log("Error! No measures of " + measureSelect + " [location: Homepage/view/detailPage/actualsAndPredictiveAnalysis/lineChart.ctl.js]");
                return false;
        }

        queryURL = "ui/xsjs/api.xsjs/intelligence/" + tempFilter.action
											        + tempFilter.dimen
											        + "?after=" + tempFilter.after
											        + "&before=" + tempFilter.before
											        + "&serverIP=" + tempFilter.serverIP
											        + "&periods=" + tempFilter.periods
											        + "&source=" + tempFilter.source;
        return queryURL;
    }


   
});