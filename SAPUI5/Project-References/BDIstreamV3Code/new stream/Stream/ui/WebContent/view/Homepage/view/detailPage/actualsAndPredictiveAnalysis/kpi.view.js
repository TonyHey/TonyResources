sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.detailPage.actualsAndPredictiveAnalysis.kpi", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.detailPage.actualsAndPredictiveAnalysis.kpi";
    },
 
    createContent : function(oController) {
    	
    	var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
    	
        //Visits
        var visitsCell= this.createKpiCell(oBundle.getText("predictive.analysis.kpi.label.visits.avg"),
													"kpiModel>/visitsScale",
                                                    "visits",
                                                    "{kpiModel>/visitsActual}",
                                                    "{kpiModel>/visitsPredictive}",
                                                    oController,
                                                    "visitsActualCompare",
                                                    "visitsPredictiveCompare");

        //Unique Visitors
        var uniqueVisitorsCell  = this.createKpiCell(oBundle.getText("predictive.analysis.kpi.label.UV.avg"),
												"kpiModel>/UVScale",
                                                "uniqueVisitors",
                                                "{kpiModel>/UVActual}",
                                                "{kpiModel>/UVPredictive}",
                                                 oController,
                                                 "UVActualCompare",
        										 "UVPredictiveCompare");

        //Avg. Visit Duration
        var BandwidthCell = this.createKpiCell(oBundle.getText("predictive.analysis.kpi.label.bandwidth.avg"),
        									"kpiModel>/BandwidthScale",
                                            "Bandwidth",
                                            "{kpiModel>/BandwidthActual}",
                                            "{kpiModel>/BandwidthPredictive}",
                                             oController,
                                             "BandwidthActualCompare",
		 									 "BandwidthPredictiveCompare");  
        
        var oHeaderContainer = new sap.suite.ui.commons.HeaderContainer({
                scrollStep: 400,
                showDividers: true,
                items: [visitsCell, uniqueVisitorsCell, BandwidthCell]
        }).addStyleClass('kpi-wrapper');
        
        return oHeaderContainer;
    },

    createKpiCell: function(title, scale, key, actualValue, predictiveValue, oController, actualCompare, predictiveCompare) {

    	var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
   /* 	
       var oLink = new sap.m.Label(key + "ID", {
            text: title+' "'+scale+'"',
        }).addStyleClass("kpi-predictive-title");
*/
    	
        var oLink = new sap.m.Label(key + "ID").addStyleClass("kpi-predictive-title");
        oLink.bindProperty("text",scale,function(sValue){
        	if(typeof sValue === 'undefined' || sValue === ''){
        		return title;
        	} else {
        		return title + " (" + sValue +")";
        	}
        });
        
        var kpiCell = new sap.suite.ui.commons.HeaderCell({
            height: '150px',
            south: new sap.suite.ui.commons.HeaderCellItem({
                       content: oLink
            }),
            north: new sap.suite.ui.commons.HeaderCellItem({
                       content: new sap.suite.ui.commons.ComparisonChart({
                                    data: [
                                               new sap.suite.ui.commons.ComparisonData(actualCompare, {
                                                   title: oBundle.getText("predictive.analysis.kpi.title.actual"),
                                                   value: actualValue
                                               }),
                                               new sap.suite.ui.commons.ComparisonData(predictiveCompare, {
                                                   title: oBundle.getText("predictive.analysis.kpi.title.predictive"),
                                                   value: predictiveValue
                                               })
                                    ]
                })
            })
        });

        return kpiCell;
    }
});