sap.ui.jsview("sap.stream.topLocations.topLocations", {

    getControllerName : function() {
        return "sap.stream.topLocations.topLocations";
    },

    createContent : function(oController) {
        var that = this;
        // Title
        var topLocationsTitle = new sap.m.Link({
            text: "Top Locations",
            press: function(){
                that.toDetailPage("userNavigationAnalysis");
            }
        }).addStyleClass('homepage-tile-title');
        var topLocationCell = new sap.ui.commons.layout.MatrixLayoutCell({
            content : topLocationsTitle
        });

        // Server Select
        var oServerSelect = new sap.m.Select({
            autoAdjustWidth: true,
            items: [
                     new sap.ui.core.Item({text:"Unique vistors by month"}),
                     new sap.ui.core.Item({text:"Unique vistors by week"}),
                     new sap.ui.core.Item({text:"Unique vistors by day"})
            ]
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
        var mapView = new sap.ui.core.mvc.HTMLView("",{
            viewName: "sap.stream.topLocations.map"
        });
        var mapViewCell = new sap.ui.commons.layout.MatrixLayoutCell({
            colSpan: 2,
            content: mapView
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
        
        var oShell = sap.ui.getCore().byId("oShell");
        oShell.removeAllContent();
        var detailView = new sap.ui.core.mvc.JSView({
            viewName : "sap.stream.detailPage." + pageName + ".detail"
        });
        
        oShell.addContent(detailView);
//        oShell.setHeaderVisible(false);
    }

});