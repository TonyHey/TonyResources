sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.detail", {

    onAfterRendering: function() {
        this.setPageTitle("User Navigation Analysis");
        setTimeout(function() {
            var oShellTitle = "STREAM INTELLIGENCE";
            if($(".shell-header-title").text() === "") {
                $(".sapUiUfdShellIco").append("<label class='shell-header-title'>" + oShellTitle + "<label>");
            }
        }, 1000);
    },

    toHome: function() {
        sap.ui.getCore().byId("shellView").getController().homeView.getController().toHome("userNavigationAnalysisPage");
    },

    setPageTitle: function(titleText) {
        this.oPageTitle.setText(titleText);
        sap.ui.getCore().byId("oShell").setSearch(this.oPageTitle);
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
        var measure = $(".selected-kpi-title");
        if (measure == undefined) {
            measure = "Unique Visitors";
        } else if (measure.text() == "Unique Visitors") {
            measure = "Unique Visitors";
        } else if (measure.text() == "Total Visits for Top 10 Users") {
            measure = "User";
        } else if (measure.text() == "Total Visits for Top 10 Pages Viewed") {
            measure = "Page";
        }
        this.oChartView.getController().refreshChart(measure);
    },

    convertString: function(dateStr) {
        var year = dateStr.substring(0, 4);
        var month = dateStr.substring(4, 6);
        var day = dateStr.substring(6, 8);

        return year+"/"+month+"/"+day;
    },
});