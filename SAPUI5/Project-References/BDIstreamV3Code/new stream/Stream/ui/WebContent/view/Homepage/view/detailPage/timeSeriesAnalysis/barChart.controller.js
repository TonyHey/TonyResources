sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.timeSeriesAnalysis.barChart", {

    onInit: function() {
        
        this.refreshColumnChartData("Unique Visitors");
    },

    refreshColumnChartData: function(kpiTitle) {
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.constant");
        var defaultServerIP = sap.rds.bdi.stream.Homepage.util.constant.DEFAULT_SERVER_IP;
        var defaultDataSource = sap.rds.bdi.stream.Homepage.util.constant.DEFAULT_SOURCE;

        this.oData;

        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
        var util = sap.rds.bdi.stream.Homepage.util.dateConvert;
        var detailDateSelect = sap.ui.getCore().byId("detailDateSelect");

        this.afterDate = util.dateToString(detailDateSelect.getDateValue());
        this.beforeDate = util.dateToString(detailDateSelect.getSecondDateValue());
        //get serverIP
        var serverSelectIP = sap.ui.getCore().byId("timeSAServerIP").getSelectedKey();
        if (serverSelectIP.length === 0) {
            this.ip = defaultServerIP;
        } else {
            this.ip = serverSelectIP;
        }


        this.oService = "ui/xsjs/api.xsjs/intelligence/getStreamMonth?after=" + this.afterDate + 
                        "&before=" + this.beforeDate + "&serverIP=" + this.ip; 
        this.getColumnChartData(this.oService, this);

        this.oModel = new sap.ui.model.json.JSONModel();    
        this.oModel.setData(this.oData);
        // check data path
        var dataPath = "/businessData";
    
        var oBundle = jQuery.sap.resources({
            url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
            locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        
        if(kpiTitle === "Unique Visitors") {
      	    var kpiText = oBundle.getText("time.series.analysis.unique.visitors");
        } else if (kpiTitle === "Visits"){
        	var kpiText = oBundle.getText("time.series.analysis.visits");
        } else if (kpiTitle === "Pages"){
        	var kpiText = oBundle.getText("time.series.analysis.pages.viewed");
        } else if (kpiTitle === "Bandwidth"){
        	var kpiText = oBundle.getText("time.series.analysis.bandwidth");
        } else if (kpiTitle === "Visits Duration Average"){
        	var kpiText = oBundle.getText("time.series.analysis.avg.duration");
        }
        
        this.oDataset = new sap.viz.ui5.data.FlattenedDataset({
         dimensions : [{
          axis : 1,
          name : oBundle.getText("time.series.analysis.month"), 
          value : "{Month}"
        } 
      ],

      measures : [ 
        {
          name : kpiText, 
          value : "{"+kpiTitle +"}"
        }
      ],
          
      data : {
        path : dataPath
      }
          
    });

        
        
        this.olineChart.setModel(this.oModel);
        this.olineChart.setDataset(this.oDataset);
    },

    getColumnChartData: function(sServiceUrl, oController) {
        jQuery.ajax({
            url: sServiceUrl,
            dataType: 'json',
            async : false,
            timeout: 59000,
            type: "GET",
            success: function(oResponse, textStatus, jqXHR) {
                oController.oData =  oResponse;
            },
            error: function(jqXHR, textStatus, errorThrown){
                if(textStatus==="timeout") {
                    sap.ui.commons.MessageBox.alert(oBundle.getText("RequireShorterTimeMsg"), null, "Error");                                 
                } else {
                    jQuery.sap.log.fatal("The following problem occurred: " + textStatus, jqXHR.responseText + "," + jqXHR.status +"," + jqXHR.statusText);

                };
            },
            complete: function(){

            }
        });          
  },

  handleMonthData: function(that) {
        // Handle MonthData
        var oController = that;
        var oMonthData = oController.oData;
        oController.oData = {
            businessData: [
                {"Date":0,"Days":"","Year":"","Month":"","Day":"","Unique Visitors":0,"Visits":0,"Pages":0,"Hits":0,"Bandwidth":0},
            ]
        };
             var Month = new Array();
             var j = 0;

             if(oMonthData.businessData[0]!=undefined){
                     Month[j] = oMonthData.businessData[0].Month;
                     for (i in oMonthData.businessData) {
                       if (oMonthData.businessData[i].Month == Month[j]) {
                         oController.oData.businessData[j].Date = oMonthData.businessData[i].Date;
                         oController.oData.businessData[j].Days = oMonthData.businessData[i].Days;
                         oController.oData.businessData[j].Year = oMonthData.businessData[i].Year;
                         oController.oData.businessData[j].Month = oMonthData.businessData[i].Month;
                         oController.oData.businessData[j].Day = oMonthData.businessData[i].Day;
                         oController.oData.businessData[j]['Unique Visitors'] += oMonthData.businessData[i]['Unique Visitors'];
                         oController.oData.businessData[j].Visits += oMonthData.businessData[i].Visits;
                         oController.oData.businessData[j].Pages += oMonthData.businessData[i].Pages;
                         oController.oData.businessData[j].Hits += oMonthData.businessData[i].Hits;
                         oController.oData.businessData[j].Bandwidth += oMonthData.businessData[i].Bandwidth;
                       } else {
                         j++;
                         Month[j] = oMonthData.businessData[i].Month;
                         oController.oData.businessData[j] = {"Date":0,"Days":"","Year":"","Month":"","Day":"","Unique Visitors":0,"Visits":0,"Pages":0,"Hits":0,"Bandwidth":0};
                         oController.oData.businessData[j].Date = oMonthData.businessData[i].Date;
                         oController.oData.businessData[j].Days = oMonthData.businessData[i].Days;
                         oController.oData.businessData[j].Year = oMonthData.businessData[i].Year;
                         oController.oData.businessData[j].Month = oMonthData.businessData[i].Month;
                         oController.oData.businessData[j].Day = oMonthData.businessData[i].Day;
                         oController.oData.businessData[j]['Unique Visitors'] += oMonthData.businessData[i]['Unique Visitors'];
                         oController.oData.businessData[j].Visits += oMonthData.businessData[i].Visits;
                         oController.oData.businessData[j].Pages += oMonthData.businessData[i].Pages;
                         oController.oData.businessData[j].Hits += oMonthData.businessData[i].Hits;
                         oController.oData.businessData[j].Bandwidth += oMonthData.businessData[i].Bandwidth;
                       }                                       
                     }

             }         
  },

});