sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitCharts.columnChart", {

    onBeforeRendering: function() {
        var page = sap.ui.getCore().byId("sourceAnalysis");
        var chartContent = page.getContent()[1];

        if (chartContent.getId() === "sourceVisitChartView") {
            var chartGrid = sap.ui.getCore().byId("sourceChartGrid");
            var VDChartButtons = sap.ui.getCore().byId("sourceVDChartView").oController.bar.getContentRight();

            page.removeContent(chartContent);
            chartGrid.addContent(sap.ui.getCore().byId("sourceVisitChartView"));
            chartGrid.addContent(sap.ui.getCore().byId("sourceVDChartView"));
            VDChartButtons[2].setType(sap.m.ButtonType.Default);
            VDChartButtons[0].setType(sap.m.ButtonType.Accept);
            sap.ui.getCore().byId("sourceVDChartApp").backToTop();
            page.addContent(chartGrid);
            sap.ui.getCore().byId("sourceAnalysisKpi").oController.refreshKpi();
        }

        sap.ui.getCore().byId("sourceVisitKpiSelector").setVisible(false);
        sap.ui.getCore().byId("sourceVDKpiSelector").setVisible(false);
    },

    onAfterRendering: function() {
        this.refreshChart();
    },

    refreshChart: function() {
        this.oModel = new sap.ui.model.json.JSONModel();
        var visitSelector = sap.ui.getCore().byId("sourceVisitSelected");

        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });

        if (visitSelector == undefined || visitSelector.getSelectedKey() == undefined) {
            var selectOpt = "Browser";
        } else {
            var selectOpt = visitSelector.getSelectedKey();
        }
        if (selectOpt == "Site") {
            var dimen = "ORIGINATING_SITE";
            var dimenText = oBundle.getText("source.analysis.originating.site");
        } else {
            var dimen = "BROWSER";
            var dimenText = oBundle.getText("source.analysis.browser");
        }
        var result = this.getChartData(dimen);

        if(result.status) {
            this.oModel.setData(result.data);
        } else {
            console.log("No data ------- getChartData() ------ [location: Homepage/view/detailPage/sourceAnalysis/visitCharts/columnChart.ctl.js]");
        }
       
        this.dataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [ {
                axis: 1,
                name: dimenText,
                value: '{' + dimen + '}'
            } ],
            measures: [ {
                name: oBundle.getText("source.analysis.chart.visits"),
                value: '{VISITS}'
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
        var after = sap.ui.getCore().byId("sourceAnalysisDate").getDateValue();
        var before = sap.ui.getCore().byId("sourceAnalysisDate").getSecondDateValue();
        
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
        var serverSelectIP = sap.ui.getCore().byId("sourceAnalysisIP").getSelectedKey();

        if(serverSelectIP.length === 0) {
            tempFilter.serverIP = defaultServerIP;
        } else {
            tempFilter.serverIP = serverSelectIP;
        }
        // set date range
        tempFilter.after = util.dateToString(after);
        tempFilter.before = util.dateToString(before);

        switch(dimen) {
            case "BROWSER":
            {
                tempFilter.action = "getStreamBrowserChart";
                break;
            }
            case "ORIGINATING_SITE":
            {
                tempFilter.action = "getStreamOriginChart";
                break;
            }
            default:
                console.log("Error! No dimensions of " + dimen + " [location: Homepage/view/detailPage/sourceAnalysis/visitDurationCharts/columnChart.ctl.js]");
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