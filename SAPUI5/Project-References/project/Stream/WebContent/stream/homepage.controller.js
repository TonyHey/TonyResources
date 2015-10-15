sap.ui.controller("sap.stream.homepage", {
	
	onInit: function() {
        this.oData;
        //set data to select
        this.serverSelect = this.setServerDateToSelect();
    },

    onBeforeRendering: function() {

    },

    onAfterRendering: function() {    	
    	
        var that = this;
        var oTitle = new sap.ui.commons.TextView({
            text: 'OVERVIEW',
            design: sap.ui.commons.TextViewDesign.H2     
        });
        
        var dateFrom = new Date();
        var dateTo = new Date();

        var oDateRangeSelect = new sap.m.DateRangeSelection({
            delimiter: "~", 
            displayFormat: "MMM dd, yyyy", 
            dateValue: dateFrom, 
            secondDateValue: dateTo
        }).addStyleClass("homepage-daterange");

        // Overview Title
        var oTitleCell = new sap.ui.commons.layout.MatrixLayoutCell({
            content: oTitle
        });
        //Server select
        var oServerSelectCell = new sap.ui.commons.layout.MatrixLayoutCell({
            content: that.serverSelect
        });
        //Date Range Select
        var oDateRangeSelectCell = new sap.ui.commons.layout.MatrixLayoutCell({
            // content: oDateRangeSelect
        });

        var oRow = new sap.ui.commons.layout.MatrixLayoutRow({
            cells: [oTitleCell, oDateRangeSelectCell, oServerSelectCell]
        });

        var overviewHeaderLayout = new sap.ui.commons.layout.MatrixLayout({ 
            width: '100%',
            layoutFixed: true,
            columns: 3,
            widths: ['80%', '135px','228px'],
            rows: [oRow]
        }).placeAt("homeTitle", "only");

        //Time Series Tile
        var timeSeriesTile = new sap.m.CustomTile({
            content: new sap.ui.core.mvc.JSView({
                viewName : "sap.stream.timeSeries.timeSeries"
            })
        }).placeAt("timeSeriesTile", "only");

        //Visits Tile
        var visitsTile = new sap.m.CustomTile({
            content: new sap.ui.core.mvc.JSView({
                viewName : "sap.stream.visits.visits"
            })
        }).placeAt("visitsTile", "only");
        
        //Traffic Source Analysis Tile
        var trafficSATile = new sap.m.CustomTile({
            content: new sap.ui.core.mvc.JSView({
                viewName : "sap.stream.trafficSourceAnalysis.trafficSourceAnalysis"
            })
        }).placeAt("trafficSATile", "only");
        //Avg. Visit Duration Tile
        var avgVisitTile = new sap.m.CustomTile({
            content: new sap.ui.core.mvc.JSView("",{
                viewName : "sap.stream.avg.avg"
            })
        }).placeAt("avgVisitTile", "only");
      
        //Top Locations Tile
//        var topLocationsTile = new sap.m.CustomTile({
//            content: new sap.ui.core.mvc.JSView("",{
//                viewName : "sap.stream.topLocations.topLocations"
//            })
//        }).placeAt("topLocationsTile", "only");
        //Predictive Tile
        var mostVisitedPagesTile = new sap.m.CustomTile({
            content: new sap.ui.core.mvc.JSView("",{
                viewName : "sap.stream.mostVisitedPages.mostVisitedPages"
            })
        }).placeAt("mostVisitedPagesTile", "only");
        //Alerts Tile
        var alertsTile = new sap.m.CustomTile({
            content: new sap.ui.core.mvc.JSView("",{
                viewName : "sap.stream.alerts.alerts"
            })
        }).placeAt("alertsTile", "only");

        //Drag & Drop
        $( "#sortable" ).sortable({
            revert: true
        });
    },

    onExit: function() {
       
    },
    
    toDetailPage: function(pageName) {
        console.log("To" + pageName);
       
        var oShell = sap.ui.getCore().byId("oShell");
        oShell.removeAllContent();
        var detailView = new sap.ui.core.mvc.JSView({
            viewName : "sap.stream.detailPage." + pageName + ".detail"
        });
        
        oShell.addContent(detailView);
//        oShell.setHeaderVisible(false);
    },

    getServer: function(that) {
        jQuery.ajax({
            url: "ui/xsjs/api.xsjs/intelligence/getAllServerIP",
            dataType: 'json',
            async: false,
            type: "GET",
            success: function(data) {
                that.oData = data;
            },
            error: function(data){
                console.log("Tracing[05] ----------- getAllServerIP ------ fail");
                console.log(data);
            }
        });
    },

    setServerDateToSelect: function() {
        this.getServer(this);
        var oModel = new sap.ui.model.json.JSONModel();
        oModel.setData(this.oData);

        var oItemTemplate = new sap.ui.core.Item({
            key: "{select-model>ServerIP}",
            text: "{select-model>ServerName}"
        });

        var oServerSelect = new sap.m.Select({
            autoAdjustWidth: true,
            items: {
                path: "select-model>/businessData",
                template: oItemTemplate
            }
        }).addStyleClass("homepage-select");

        oServerSelect.setModel(oModel, "select-model");

        return oServerSelect;
    },

    toHome: function(){
        var oShell = sap.ui.getCore().byId("oShell");
        oShell.removeAllContent();
        var homeView = new sap.ui.core.mvc.HTMLView({
            viewName : "sap.stream.homepage"
        });

        oShell.addContent(homeView);
        oShell.setSearch(new sap.m.Label());

        var pageClose = sap.ui.getCore().byId("timeseries");
        pageClose.destroy();

        delete this.oPageTitle;

        setTimeout(function(){
            var oShellTitle = "STREAM INTELLIGENCE";
            $(".sapUiUfdShellIco").append("<label class='shell-header-title'>" + oShellTitle + "<label>");
        }, 1000);
        
    }
});