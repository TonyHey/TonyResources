sap.ui.jsview("sap.stream.detailPage.actualsAndPredictiveAnalysis.kpiHeader", {

	getControllerName: function() {
		return "sap.stream.detailPage.actualsAndPredictiveAnalysis.kpiHeader";
	},

	createContent: function(oController) {	
	    
	    var test = this.CreateKPI({

	    	kpiTitle: ["Unique Visitors", "Visits", "Avg Visit Duration"],
	    	kpiValue: ["23,456", "456,231", "04:35"],
	    	kpiLastDay: ["3,874", "4,567", "04:21"],
	    	kpiPercent: ["+7%", "-4%", "+6%"]
	    });

 		return test;
	},
	
	CreateKPI: function(pro) {

    	this.kpiTitle = pro.kpiTitle;
    	this.kpiValue = pro.kpiValue;
    	this.kpiLastDay = pro.kpiLastDay;
    	this.kpiPercent = pro.kpiPercent;
    	this.arr = new Array;
    	this.status;
    	this.period;
    	var that = this;
    	var kpiTitle;
    	var kpiValue;
    	var kpiLastDayValue;
    	var kpiPercent;

    	this.checkStatus = function(status){

			if(status.substr(0,1) == "+") {
				return true;
			} else {
				return false;
			} 
		}

    	for(var i=0; i<pro.kpiTitle.length; i++) {

    	    	kpiTitle = new sap.m.Label({
    	        	text: this.kpiTitle[i],
    	        	enabled: false
    	        }).addStyleClass("kpi-title");

    	        kpiValue = new sap.ui.commons.TextView ({
    	        	design: sap.ui.commons.TextViewDesign.H1,
    	        	text: this.kpiValue[i],
    	        	enabled: false
    	        }).addStyleClass("kpi-value");

    	        kpiLastDayValue = new sap.ui.commons.TextView ({
    	        	text: this.kpiLastDay[i], 
    	        	enabled: false
    	        }).addStyleClass("kpi-lastday-value");

    	        //check 
    	        if(this.checkStatus(this.kpiPercent[i])) {
    	        	this.status = "add";
    	        } else {
    	        	this.status = "sale";
    	        }

    	        kpiPercent = new sap.ui.commons.TextView ({
    	        	text: this.kpiPercent[i], 
    	        	enabled: false
    	        }).addStyleClass("kpi-percent "+this.status);

    	    	var kpiBox = new sap.suite.ui.commons.HeaderCell ({
    	        	height: '150px',
    	        	north: new sap.suite.ui.commons.HeaderCellItem({
    	        			content: kpiTitle
    	        	}),
    	        	east: new sap.suite.ui.commons.HeaderCellItem ({
    	        		content: kpiValue
    	        	}),
    	        	south: new sap.suite.ui.commons.HeaderCellItem ({
    	        		content: new sap.ui.layout.HorizontalLayout ({
    	        		    content: [
    	        		    	new sap.m.Label ({text:'Last day:'}).addStyleClass("kpi-lastday"),
    	        		    	kpiLastDayValue,
    	        		    	kpiPercent	
    						]
    	        		}).addStyleClass("kpi-bottom")
    	        	})
    	    	});	

    	    	this.arr[i] = kpiBox;
    	}

    	var oHeaderContainer = new sap.suite.ui.commons.HeaderContainer ({
        	scrollStep: 400,
        	showDividers: true,
        	items: this.arr
    	}).addStyleClass('kpi-wrapper');
    	return oHeaderContainer;

}

	
});