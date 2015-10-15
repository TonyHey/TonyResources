sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.timeSeries.timeSeries", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.timeSeries.timeSeries";
    },

    createContent : function(oController) {
        var that = this;
        //Title
        var oBundle = jQuery.sap.resources({
            url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
            locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        var tileLabel = new sap.m.Link({
            text: oBundle.getText("homepage.tile.title.time.series"),
            press: function(){
                that.toDetailPage();
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
                         text:oBundle.getText("homepage.tile.select.time.series.by.month"),
                         key: "Month"
                     }),
                     new sap.ui.core.Item({
                         text:oBundle.getText("homepage.tile.select.time.series.by.week"),
                         key: "Week"
                     }),
                     new sap.ui.core.Item({
                         text:oBundle.getText("homepage.tile.select.time.series.by.day"),
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
            viewName: "sap.rds.bdi.stream.Homepage.view.timeSeries.areaChart"
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
        //Time Series MatrixLayout
        var timeSeriesLayout = new sap.ui.commons.layout.MatrixLayout({
            width: '98%',
            layoutFixed: true,
            columns: 2,
            widths: ['50%', '50%'],
            rows: [tileTitle, areaChartRow]
        });
        
        return timeSeriesLayout;
    },

    toDetailPage: function() {
          if (sap.ui.getCore().byId("timeSeriesPage") == undefined) {
              var timeSeriesPage = new sap.ui.core.mvc.JSView("timeSeriesPage", {
                viewName : "sap.rds.bdi.stream.Homepage.view.detailPage.timeSeriesAnalysis.detail"
                });
              sap.ui.getCore().byId("streamApp").addPage(timeSeriesPage);
          }
          sap.ui.getCore().byId("oHomeButton").setVisible(true);
          sap.ui.getCore().byId("streamApp").to("timeSeriesPage");
    
          var oBundle = jQuery.sap.resources({
            url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
            locale : sap.ui.getCore().getConfiguration().getLanguage() 
          });      
          var oPageTitle = new sap.m.Label({
              text: oBundle.getText("shell.page.title.time.seires.analysis")
          }).addStyleClass("detail-page-header-title");
          sap.ui.getCore().byId("oShell").setSearch(oPageTitle);

         setTimeout(function(){
            var oShellTitle = oBundle.getText("shell.title.stream.intelligence");
            if($(".shell-header-title").text() === "") {
                $(".sapUiUfdShellIco").append("<label class='shell-header-title'>" + oShellTitle + "<label>");
            }
         });

    }
});