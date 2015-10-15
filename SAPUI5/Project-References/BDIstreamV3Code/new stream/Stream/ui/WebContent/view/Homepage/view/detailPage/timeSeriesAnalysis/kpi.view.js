
sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.timeSeriesAnalysis.kpi", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.timeSeriesAnalysis.kpi";
    },
 
    createContent : function(oController) {
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
        var util = sap.rds.bdi.stream.Homepage.util.dateConvert;

        oController.refreshKPI("Day", this);

        //current data
        var currentDay = sap.ui.getCore().byId("timeSeriesLineChart").oController.currentData.businessData;
        var currentDayLength = currentDay.length-1;
        var currentData = currentDay[currentDayLength];
        currentData["Bandwidth"] = currentData["Bandwidth"] + " " + currentData["Bandwidth_scale"];
        currentData["Visits Duration Average"] = util.numberToHourString(currentData["Visits Duration Average"]);

        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        
        var uniqueVisitors = this.createKpiCell(oBundle.getText("time.series.analysis.unique.visitors"), 
                                                "Unique", 
                                                oController, 
                                                "{/businessData/0/Unique Visitors}",
                                                currentData["Unique Visitors"]);

        var visits = this.createKpiCell(oBundle.getText("time.series.analysis.visits"), 
                                        "Visits", 
                                        oController, 
                                        "{/businessData/0/Visits}",
                                        currentData.Visits);

        var pagesViewed = this.createKpiCell(oBundle.getText("time.series.analysis.pages.viewed"), 
                                             "Pages", 
                                             oController, 
                                             "{/businessData/0/Pages}",
                                             currentData.Pages);

        var bandWidth = this.createKpiCell( oBundle.getText("time.series.analysis.bandwidth"), 
                                            "Bandwidth", 
                                            oController, 
                                            "{/businessData/0/Bandwidth}",
                                            currentData.Bandwidth);

        var avgVisitDuration = this.createKpiCell(oBundle.getText("time.series.analysis.avg.duration"), 
                                                "avgVisitDuration", 
                                                oController, 
                                                "{/businessData/0/Visits Duration Average}",
                                                currentData["Visits Duration Average"]);

                   

        var oHeaderContainer = new sap.suite.ui.commons.HeaderContainer ({
            scrollStep: 400,
            showDividers: true,
            items: [uniqueVisitors, visits, pagesViewed, bandWidth, avgVisitDuration]
        }).addStyleClass('kpi-wrapper');
        
        
        var oPanel = new sap.ui.commons.Panel("timeSeriesCollapsePanel",{
        		content: oHeaderContainer,
        		applyContentPadding: false
        });

        
        sap.ui.getCore().byId("Unique").addStyleClass("selected-kpi-title");
//        return oHeaderContainer;
        return oPanel;
    },

    createKpiCell: function(name, key, oController, value, currentData) {

        //title
        var kpiTitleName;
        
        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });

        kpiTitleName = new sap.m.Link(key, {
            text: name,
            press: function() {
                oController.refreshLineChart(key);// selected property
                oController.refreshBarChart(key);
                $(".sapSuiteHdrCellNorth>a").removeClass("selected-kpi-title");
                $("#"+key).addClass("selected-kpi-title");
            }
        }).addStyleClass("kpi-title");

        //value
        var kpiValueName = new sap.ui.commons.TextView ({
            design: sap.ui.commons.TextViewDesign.H1,
            text: value,
            enabled: false
        }).addStyleClass("kpi-value");

        //current
        var currentValue = new sap.ui.commons.TextView ({
            text: currentData, 
            enabled: false
        }).addStyleClass("kpi-lastday-value");

        var kpiCell = new sap.suite.ui.commons.HeaderCell ({
            height: '120px',
            north: new sap.suite.ui.commons.HeaderCellItem({
                content: kpiTitleName
            }),
            east: new sap.suite.ui.commons.HeaderCellItem ({
                content: kpiValueName
            }),
            south: new sap.suite.ui.commons.HeaderCellItem ({
                content: new sap.ui.layout.HorizontalLayout ({
                    content: [
                        new sap.m.Label ({text:oBundle.getText("time.series.analysis.current.month")}).addStyleClass("kpi-lastday"),
                        currentValue,   
                    ]
                }).addStyleClass("kpi-bottom")
            })
        });

        return kpiCell;  

    }

});