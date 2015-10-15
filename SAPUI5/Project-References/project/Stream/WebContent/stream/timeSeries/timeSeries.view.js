sap.ui.jsview("sap.stream.timeSeries.timeSeries", {

    getControllerName : function() {
        return "sap.stream.timeSeries.timeSeries";
    },

    createContent : function(oController) {
        var that = this;
        //Title
        var tileLabel = new sap.m.Link({
            text: "Time Series",
            press: function(){
            	
                that.toDetailPage("timeSeriesAnalysis");
            }
        }).addStyleClass('homepage-tile-title');
        var titleCell = new sap.ui.commons.layout.MatrixLayoutCell({
            content: tileLabel
        });
        //Select
        var timeSeriesSelect = new sap.m.Select({
            autoAdjustWidth: true,
            items: [
                     new sap.ui.core.Item({
                         text:"Unique vistors by month",
                         key: "Month"
                     }),
                     new sap.ui.core.Item({
                         text:"Unique vistors by week",
                         key: "Week"
                     }),
                     new sap.ui.core.Item({
                         text:"Unique vistors by day",
                         key: "Day"
                     })
            ],
            change: function() {
                var dimen = this.getSelectedKey();
                var chartViewController = oController.areaChartView.getController(); 
                jQuery.proxy(chartViewController.refreshChart(dimen), chartViewController);
            }
        }).addStyleClass("homepage-select");
        var selectCell = new sap.ui.commons.layout.MatrixLayoutCell({
            colSpan: 1,
            content: timeSeriesSelect,
            hAlign: sap.ui.commons.layout.HAlign.Right
        });
        //Title Row
        var tileTitle = new sap.ui.commons.layout.MatrixLayoutRow({
            height: '53px',
            cells: [titleCell, selectCell]
        });                

        //Area Chart           
        oController.areaChartView = new sap.ui.core.mvc.JSView("",{
            viewName: "sap.stream.timeSeries.areaChart"
        });
        var areaChartCell = new sap.ui.commons.layout.MatrixLayoutCell({
            colSpan: 2,
            content: oController.areaChartView
        });
        //Chart Row
        var areaChartRow = new sap.ui.commons.layout.MatrixLayoutRow({
            height: '200px',
            cells: [areaChartCell]
        });
        //Time Series MatrixLayout*/
        var timeSeriesLayout = new sap.ui.commons.layout.MatrixLayout({
            width: '98%',
            layoutFixed: true,
            columns: 2,
            widths: ['50%', '50%'],
            rows: [tileTitle, areaChartRow]
        });
        
        return timeSeriesLayout;
    },

    toDetailPage: function(pageName,busyDialog) {
        
    	busyDialog = new sap.m.BusyDialog("busyDialog",{
    		customIcon: "./image/loading.png",
    		customIconWidth: "100px",
    		customIconHeight: "25px"
    	});
        busyDialog.open(console.log("open"));
        
        var oShell = sap.ui.getCore().byId("oShell");
        oShell.removeAllContent();
        var detailView = new sap.ui.core.mvc.JSView({
            viewName : "sap.stream.detailPage." + pageName + ".detail"
        });
        
        setTimeout(function(){
        	oShell.addContent(detailView);
        	busyDialog.close(console.log("close"));
        },5000);
        
    }
});