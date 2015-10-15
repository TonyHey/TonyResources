sap.ui.controller("sap.rds.bdi.stream.Homepage.view.timeSeries.areaChart", {

    onAfterRendering: function() {
        var defaultDimen = "Month";
        
        this.refreshChart(defaultDimen);
    },

    refreshChart: function(dimen) {
        this.oModel = new sap.ui.model.json.JSONModel();
        var result = this.getChartData(dimen, this);
        
        if(result.status) {
            this.oModel.setData(result.data);
        }

        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        
        var dimenText = "Month";
        
        if(dimen == "Month") {
        	dimenText = oBundle.getText("homepage.tile.label.month");
        } else if (dimen == "Week") {
        	dimenText = oBundle.getText("homepage.tile.label.week");
        } else if (dimen == "Day") {
        	dimenText = oBundle.getText("homepage.tile.label.day");
        }
        
        this.dataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [ {
                axis: 1,
                name: dimenText,
                value: "{" + dimen + "}"
            } ],
            measures: [ {
                name: oBundle.getText("homepage.tile.chart.time.series.unique.visitors"),
                value: '{Unique Visitors}'
            } ],
            data: {
                path: "/businessData"
            }
        });
        this.areaChart.setModel(this.oModel);
        this.areaChart.setDataset(this.dataset);
    },
    /*
     * getChartData
     *  
     */
    getChartData: function(dimen, that) {
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

        tempFilter.before = util.dateToString(new Date());

        switch(dimen) {
            case "Month":
            {
                tempFilter.action = "getStreamMonth";
                tempFilter.after = util.afterDateToString(dimen);
                break;
            }
            case "Week":
            {
                tempFilter.action = "getStreamWeek";
                tempFilter.after = util.afterDateToString(dimen);
                break;
            }
            case "Day":
            {
                tempFilter.action = "getStreamDay";
                tempFilter.after = util.afterDateToString(dimen);   
                break;
            }
            default:
                console.log("Error! No dimensions of " + dimen + " [location: Homepage/view/timeSeries/areaChart.ctl.js]");
                return false;
        }

        queryURL = "ui/xsjs/api.xsjs/intelligence/" + tempFilter.action
                                                        + "?after=" + tempFilter.after
                                                        + "&before=" + tempFilter.before
                                                        + "&serverIP=" + tempFilter.serverIP;

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
    }
});