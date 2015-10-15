sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.detail", {

	
	onInit: function(){
		
	},
    onAfterRendering: function() {
    	
        this.refreshChart();
        
    },

    getServer: function() {
        var oModel = new sap.ui.model.json.JSONModel();
        var that = this;
        jQuery.ajax({
            url: "ui/xsjs/api.xsjs/intelligence/getAllServerIP",
            dataType: 'json',
            async: false,
            type: "GET",
            success: function(data) {
                that.oData = data;
            },
            error: function(data){
                console.log("Error! - GetAllServerIP - fail- Location: [Homepage/view/detailPage/userNavigationAnalysis/detail.ctl.js]");
                console.log(data);
            }
        });

        oModel.setData(this.oData);
        return oModel;
    },

    refreshKPI : function() {
        this.oKpiView.getController().refreshKpi();
    },

    refreshChart: function() {
        var measure = $(".selected-kpi-title").attr("id");
        var chartApp = sap.ui.getCore().byId("userNavCharts");

        if (!this.lineChartView && !this.barChartView) {
            this.lineChartView = sap.ui.getCore().byId("userNavLineChart");
            this.barChartView = sap.ui.getCore().byId("userNavBarChart");
        }
 
        if (measure == "top10Users" || measure == "top10Pages") {
            measure = measure.slice(5, 9);
            this.barChartView.getController().refreshChart(measure);
            chartApp.to("userNavBarChart");
        } else {
            measure = "Unique Visitors";
            this.lineChartView.getController().refreshChart(measure);
            chartApp.to("userNavLineChart");
        }
    },

    convertString: function(dateStr) {
        var year = dateStr.substring(0, 4);
        var month = dateStr.substring(4, 6);
        var day = dateStr.substring(6, 8);

        return year+"/"+month+"/"+day;
    },
});