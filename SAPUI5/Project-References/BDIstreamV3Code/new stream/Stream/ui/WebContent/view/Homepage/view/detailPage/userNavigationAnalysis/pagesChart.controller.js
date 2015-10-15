sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.pagesChart", {

	onInit: function() {
        var defaultMeasure = "Page";
        
        this.refreshChart(defaultMeasure);
    },

    onAfterRendering: function() {

    },

    refreshChart: function(measure) {
        this.oModel = new sap.ui.model.json.JSONModel();
        var result = this.getChartData(measure);
        
        if(result.status) {
            this.oModel.setData(result.data);
        } else {
            console.log("No data ------- getChartData() ------ [location: Homepage/view/detailPage/userNavigationAnalysis/pagesChart.ctl.js]");
        }
        
        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
           
        if(measure === "Unique Visitors") {
      	    var measureText = oBundle.getText("user.navigation.analysis.unique.visitors");
        } else if(measure === "User"){
      	    var measureText = oBundle.getText("user.navigation.analysis.user");
        } else if(measure === "Page"){
      	    var measureText = oBundle.getText("user.navigation.analysis.page");
        }
        
        this.dataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [ {
                axis: 1,
                name: measureText,
                value: "{" + measure + "}"
            } ],
            measures: [ {
                name: oBundle.getText("source.analysis.chart.visits"),
                value: "{Visits}"
            } ],
            data: {
                path: "/businessData"
            }
        });
        this.barChart.setModel(this.oModel);
        this.barChart.setDataset(this.dataset);
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
            case "User":
                tempFilter.action = "getTopUserVisits";
                break;
            case "Page":
                tempFilter.action = "getTopPageVisits";
                break;
            default:
                console.log("Error! No measures of " + measure + " [location: Homepage/view/detailPage/userNavigationAnalysis/pagesChart.ctl.js]");
                return false;
        }

        queryURL = "ui/xsjs/api.xsjs/intelligence/" + tempFilter.action
                                                        + "?after=" + tempFilter.after
                                                        + "&before=" + tempFilter.before
                                                        + "&serverIP=" + tempFilter.serverIP
                                                        + "&top=10";

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