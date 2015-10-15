sap.ui.controller("sap.rds.bdi.stream.Homepage.view.alerts.pieChart", {

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
            console.log("No data ------- getChartData() ------ [location: Homepage/view/alerts/pieChart.ctl.js]");
        }

        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        
        this.dataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [{
                axis: 1, 
                name: oBundle.getText("homepage.tile.chart.alert"), 
                value: "{AlertType}"
            }],                     
            measures: [{
                name: oBundle.getText("homepage.tile.chart.percent"),  
                value: '{Percent}'   
            }],
            data: {
                path: "/businessData"
            }
        });

        this.pieChart.setModel(this.oModel);
        this.pieChart.setDataset(this.dataset);        
    },
    /*
     * getChartData
     *  
     */
    getChartData: function(dimen) {
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.constant");
        
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
        var serverSelectIP = sap.ui.getCore().byId("shellView").getController().homeView.getController().serverSelect.getSelectedKey();
        if(serverSelectIP.length === 0) {
            tempFilter.serverIP = defaultServerIP;
        } else {
            tempFilter.serverIP = serverSelectIP;
        }

        tempFilter.before = util.dateToString(new Date());
        tempFilter.action = "getAlertReport";

        switch(dimen) {
            case "Month":
            {
                tempFilter.after = util.afterDateToString(dimen);
                break;
            }
            case "Week":
            {
                tempFilter.after = util.afterDateToString(dimen);
                break;
            }
            case "Day":
            {
                tempFilter.after = util.afterDateToString(dimen);   
                break;
            }
            default:
                console.log("Error! No dimensions of " + dimen + " [location: Homepage/view/alerts/pieChart.ctl.js]");
                return false;
        }

        queryURL = "ui/services/intelligence.xsjs?cmd=" + tempFilter.action
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