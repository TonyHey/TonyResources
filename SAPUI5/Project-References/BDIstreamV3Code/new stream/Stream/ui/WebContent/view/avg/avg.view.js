sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.avg.avg", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.avg.avg";
    },

    createContent : function(oController) {
         var that = this;
         var oBundle = jQuery.sap.resources({
         	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
         	locale : sap.ui.getCore().getConfiguration().getLanguage() 
         });
         var tileTile = new sap.m.Link({
             text: oBundle.getText("homepage.tile.title.visit.duration"),
             press: function(){
                that.toDetailPage();
            }
         }).addStyleClass('homepage-tile-title homepage-tile-title-margin');

         var mainText = new sap.ui.commons.TextView({
             text: "{viewModel>/currentMonthVisitDuration}"
         }).addStyleClass('main-text');

         var monthLabel = new sap.m.Label({
             text: oBundle.getText("homepage.tile.label.last.month")
         }).addStyleClass('homepage-tile-label');

         var monthValue = new sap.ui.commons.TextView({
             text: "{viewModel>/lastMonthVisitDuration}"
         }).addStyleClass('homepage-tile-value');

         oController.monthValueTrend = new sap.ui.commons.TextView({
             text: "{viewModel>/lastMonthTrend}"
         });

         var monthLayout = new sap.ui.layout.HorizontalLayout({
             content: [monthValue, oController.monthValueTrend]
         });

         var averageLabel = new sap.m.Label({
             text: oBundle.getText("homepage.tile.label.average")
         }).addStyleClass('homepage-tile-label');

         var averageValue = new sap.ui.commons.TextView({
             text: "{viewModel>/avgVisitDuration}"
         }).addStyleClass('homepage-tile-value');

         var averageValueTrend = new sap.ui.commons.TextView({
             text: '(-16%)'
         });

         var averageLayout = new sap.ui.layout.HorizontalLayout({
             content: [averageValue]
         });

         var avgMatrixLayout = new sap.ui.commons.layout.MatrixLayout();
         
         avgMatrixLayout.createRow(tileTile);
         avgMatrixLayout.createRow(mainText);
         avgMatrixLayout.createRow(monthLabel);
         avgMatrixLayout.createRow(monthLayout);
         avgMatrixLayout.createRow(averageLabel);
         avgMatrixLayout.createRow(averageLayout);

         return avgMatrixLayout;
    },

    toDetailPage: function() {
        if (sap.ui.getCore().byId("demographicPage") == undefined) {
            var demographicPage = new sap.ui.core.mvc.JSView("demographicPage", {
              viewName : "sap.rds.bdi.stream.Homepage.view.detailPage.demographicAnalysis.detail"
              });
            sap.ui.getCore().byId("streamApp").addPage(demographicPage);
        }
        sap.ui.getCore().byId("oHomeButton").setVisible(true);
        sap.ui.getCore().byId("streamApp").to("demographicPage");
        
        var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        var oPageTitle = new sap.m.Label({
            text: oBundle.getText("shell.page.title.demographic.analysis")
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