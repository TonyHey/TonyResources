sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.demographicAnalysis.visitDurationCharts.columnChart", {

    onBeforeRendering: function() {
        var page = sap.ui.getCore().byId("DemographicAnalysis");
        var chartContent = page.getContent()[1];

        if (chartContent.getId() === "demoVDChartView") {
            var chartGrid = sap.ui.getCore().byId("demoChartGrid");
            var visitChartButtons = sap.ui.getCore().byId("demoVisitChartView").oController.bar.getContentRight();

            page.removeContent(chartContent);
            chartGrid.addContent(sap.ui.getCore().byId("demoVisitChartView"));
            chartGrid.addContent(sap.ui.getCore().byId("demoVDChartView"));
            visitChartButtons[2].setType(sap.m.ButtonType.Default);
            visitChartButtons[0].setType(sap.m.ButtonType.Accept);
            sap.ui.getCore().byId("demoVisitChartApp").backToTop();
            page.addContent(chartGrid);
            sap.ui.getCore().byId("demographicKPI").oController.refreshKpi();
        }

        sap.ui.getCore().byId("demoVisitKpiSelector").setVisible(false);
        sap.ui.getCore().byId("demoVDKpiSelector").setVisible(false);
    },

    onAfterRendering: function() {
        this.refreshChart();
    },

    refreshChart: function() {
        this.oModel = new sap.ui.model.json.JSONModel();
        var visitSelector = sap.ui.getCore().byId("demographicVisitDurationSelected");
        
        var oBundle = jQuery.sap.resources({
            url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
            locale : sap.ui.getCore().getConfiguration().getLanguage() 
        }); 

        if (visitSelector == undefined || visitSelector.getSelectedKey() == undefined) {
            var selectOpt = "Gender";
        } else {
            var selectOpt = visitSelector.getSelectedKey();
        }
        if (selectOpt == "AgeRange") {
            var dimen = "AGE_RANGE";
            var dimenText = oBundle.getText("demographic.analysis.age.range");
        } else {
            var dimen = "GENDER";
            var dimenText = oBundle.getText("demographic.analysis.gender");
        }
        var result = this.getChartData(dimen);

        if(result.status) {
            this.oModel.setData(result.data);
        } else {
            console.log("No data ------- getChartData() ------ [location: Homepage/view/detailPage/sourceAnalysis/visitCharts/donutChart.ctl.js]");
        }

        this.dataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [ {
                axis: 1,
                name: dimenText,
                value: '{' + dimen + '}'
            } ],
            measures: [ {
                name: oBundle.getText("demographic.analysis.chart.visits.duration"),
                value: '{VISITS_DURATION}'
            } ],
            data: {
                path: "/businessData"
            }
        });
        this.columnChart.setModel(this.oModel);
        this.columnChart.setDataset(this.dataset);
    },
    /*
     * getChartData
     *  
     */
    getChartData: function(dimen) {
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.constant");
        var after = sap.ui.getCore().byId("demographicDate").getDateValue();
        var before = sap.ui.getCore().byId("demographicDate").getSecondDateValue();
        
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
        var serverSelectIP = sap.ui.getCore().byId("demographicIP").getSelectedKey();

        if(serverSelectIP.length === 0) {
            tempFilter.serverIP = defaultServerIP;
        } else {
            tempFilter.serverIP = serverSelectIP;
        }
        // set date range
        tempFilter.after = util.dateToString(after);
        tempFilter.before = util.dateToString(before);

        switch(dimen) {
            case "AGE_RANGE":
            {
                tempFilter.action = "getStreamAgeChart";
                break;
            }
            case "GENDER":
            {
                tempFilter.action = "getStreamGenderChart";
                break;
            }
            default:
                console.log("Error! No dimensions of " + dimen + " [location: Homepage/view/detailPage/sourceAnalysis/visitCharts/donutChart.ctl.js]");
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