sap.ui.jsview("sap.rds.bdi.stream.Homepage.view.topLocations.topLocations", {

    getControllerName : function() {
        return "sap.rds.bdi.stream.Homepage.view.topLocations.topLocations";
    },

    createContent : function(oController) {
        var that = this;
        // Title
        var oBundle = jQuery.sap.resources({
            url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
            locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        var topLocationsTitle = new sap.m.Link({
            text: oBundle.getText("homepage.tile.title.top.locations"),
            press: function(){
                that.toDetailPage();
            }
        }).addStyleClass('homepage-tile-title');
        var topLocationCell = new sap.ui.commons.layout.MatrixLayoutCell({
            content : topLocationsTitle
        });

        // Server Select
        var oServerSelect = new sap.m.Select({
            autoAdjustWidth: true,
            items: [
                    new sap.ui.core.Item({
                        text:oBundle.getText("homepage.tile.select.top.location.month"),
                        key: "Month"
                    }),
                    new sap.ui.core.Item({
                        text:oBundle.getText("homepage.tile.select.top.location.week"),
                        key: "Week"
                    }),
                    new sap.ui.core.Item({
                        text:oBundle.getText("homepage.tile.select.top.location.today"),
                        key: "Day"
                    })
           ],
           change: function() {
               var dimen = this.getSelectedKey();
               var mapViewController = oController.mapView.getController(); 
               jQuery.proxy(mapViewController.refreshMap(dimen), mapViewController);
           }
        }).addStyleClass("homepage-select");
        var oServerSelectCell = new sap.ui.commons.layout.MatrixLayoutCell({
            content: oServerSelect,
            hAlign: sap.ui.commons.layout.HAlign.Right
        });

        //A row contain Title and Server Select
        var topLocationsTitleRow = new sap.ui.commons.layout.MatrixLayoutRow({
            cells: [topLocationCell, oServerSelectCell]
        });

        //Here map
        oController.mapView = new sap.ui.core.mvc.HTMLView("",{
            viewName: "sap.rds.bdi.stream.Homepage.view.topLocations.map"
        });
        var mapViewCell = new sap.ui.commons.layout.MatrixLayoutCell({
            colSpan: 2,
            content: oController.mapView
        });
        
        var mapViewRow = new sap.ui.commons.layout.MatrixLayoutRow({
            cells: [mapViewCell]
        });
        
        oController.topLocationsLayout = new sap.ui.commons.layout.MatrixLayout({
            width: '98%',
            layoutFixed: true,
            columns: 2,
            widths: ['50%', '50%'],
            rows: [topLocationsTitleRow, mapViewRow]
        });

        return oController.topLocationsLayout;
    },

    toDetailPage: function(pageName) {
            if (sap.ui.getCore().byId("userNavigationPage") == undefined) {
                var userNavigationPage = new sap.ui.core.mvc.JSView("userNavigationPage", {
                  viewName : "sap.rds.bdi.stream.Homepage.view.detailPage.userNavigationAnalysis.detail"
                  });
                sap.ui.getCore().byId("streamApp").addPage(userNavigationPage);
            }
            sap.ui.getCore().byId("oHomeButton").setVisible(true);
            sap.ui.getCore().byId("streamApp").to("userNavigationPage");
    
            var oBundle = jQuery.sap.resources({
                url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
                locale : sap.ui.getCore().getConfiguration().getLanguage() 
            });
            var oPageTitle = new sap.m.Label({
                text: oBundle.getText("shell.page.title.user.navigation.analysis")
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