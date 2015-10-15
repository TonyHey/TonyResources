sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.kpi", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.alertsAnalysis.kpi";
    },

    createContent: function(oController) {
    	oController.refreshKPI();
        oController.refreshAvg();
        return this.createKPI(oController);
    },

    createKPI: function(oController) {
        var arr = [];
        var kpiTotal = new sap.ui.model.json.JSONModel();
        kpiTotal.setData(oController.kpiModel);
        this.setModel(kpiTotal,"kpitotal");
/*
        var avgNumber = new sap.ui.model.json.JSONModel();
        avgNumber.setData(oController.avgModel);
        this.setModel(avgNumber,"avgnumber");
*/
        //total visits
        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        var kpiTitleName = new sap.m.Label({
            text: oBundle.getText("alerts.analysis.kpi.label.total.alerts")
        }).addStyleClass("kpi-title");
//    	}).addStyleClass("kpi-big-title");
              
        var kpiValueName = new sap.ui.commons.TextView("alertsKpiValue", {
            design: sap.ui.commons.TextViewDesign.H1,
            // text: this.kpiValue[i],
            text: "{kpitotal>/Total}",
            enabled: false
        }).addStyleClass("kpi-green-value");
        
        var kpiBox = new sap.suite.ui.commons.HeaderCell ({
            height: '90px',
            north: new sap.suite.ui.commons.HeaderCellItem({
                content: kpiTitleName
            }),
            east: new sap.suite.ui.commons.HeaderCellItem ({
                content: kpiValueName
            })
        });   
        arr.push(kpiBox);
/*        
        //average length of stay
        var avgTitleName = new sap.m.Label({
            text: "Average Length of Stay"
        }).addStyleClass("kpi-big-title");

        var avgValueName = new sap.ui.commons.TextView ({
            design: sap.ui.commons.TextViewDesign.H1,
            // text: this.kpiValue[i],
            text: "{avgnumber>/avgVisitDuration}",
            enabled: false
        }).addStyleClass("kpi-green-value");

        var avgBox = new sap.suite.ui.commons.HeaderCell ({
            height: '150px',
            north: new sap.suite.ui.commons.HeaderCellItem({
                content: avgTitleName
            }),
            east: new sap.suite.ui.commons.HeaderCellItem ({
                content: avgValueName
            })
        }); 
        arr.push(avgBox);
*/
        var oHeaderContainer = new sap.suite.ui.commons.HeaderContainer ({
            scrollStep: 400,
            showDividers: true,
            items: arr
        }).addStyleClass('kpi-wrapper');

        var oPanel = new sap.ui.commons.Panel("alertsCollapsePanel",{
    		content: oHeaderContainer,
    		applyContentPadding: false
        });
        
//        return oHeaderContainer;
        return oPanel;

    }

});