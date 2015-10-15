sap.ui.controller("sap.rds.bdi.stream.Homepage.view.landpage", {

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
            text: '',
            design: sap.ui.commons.TextViewDesign.H2     
        });

        // Overview Title
        var oTitleCell = new sap.ui.commons.layout.MatrixLayoutCell({
            content: oTitle
        });
        //Server select
        var oServerSelectCell = new sap.ui.commons.layout.MatrixLayoutCell({
            content: that.serverSelect
        });

        var oRow = new sap.ui.commons.layout.MatrixLayoutRow({
            cells: [oTitleCell, oServerSelectCell]
        });

        var overviewHeaderLayout = new sap.ui.commons.layout.MatrixLayout({ 
            width: '100%',
            layoutFixed: true,
            columns: 2,
            widths: ['80%','228px'],
            rows: [oRow]
        }).placeAt("homeTitle", "only");

        //Time Series Tile
        var timeSeriesTile = new sap.m.CustomTile({
            content: new sap.ui.core.mvc.JSView({
                viewName : "sap.rds.bdi.stream.Homepage.view.timeSeries.timeSeries"
            })
        }).placeAt("timeSeriesTile", "only");

        //Visits Tile
        var visitsTile = new sap.m.CustomTile({
            content: new sap.ui.core.mvc.JSView({
                viewName : "sap.rds.bdi.stream.Homepage.view.visits.visits"
            })
        }).placeAt("visitsTile", "only");
        
        //Source Analysis Tile
        var trafficSATile = new sap.m.CustomTile({
            content: new sap.ui.core.mvc.JSView({
                viewName : "sap.rds.bdi.stream.Homepage.view.sourceAnalysis.sourceAnalysis"
            })
        }).placeAt("trafficSATile", "only");
        //Avg. Visit Duration Tile
        var avgVisitTile = new sap.m.CustomTile({
            content: new sap.ui.core.mvc.JSView("",{
                viewName : "sap.rds.bdi.stream.Homepage.view.avg.avg"
            })
        }).placeAt("avgVisitTile", "only");
        //Alerts Tile
        var alertsTile = new sap.m.CustomTile({
            content: new sap.ui.core.mvc.JSView("",{
                viewName : "sap.rds.bdi.stream.Homepage.view.alerts.alerts"
            })
        }).placeAt("alertsTile", "only");
        //Top Locations Tile
        var topLocationsTile = new sap.m.CustomTile({
            content: new sap.ui.core.mvc.JSView("",{
                viewName : "sap.rds.bdi.stream.Homepage.view.topLocations.topLocations"
            })
        }).placeAt("topLocationsTile", "only");
        //Predictive Tile
        var predictiveTile = new sap.m.CustomTile({
            content: new sap.ui.core.mvc.JSView("",{
                viewName : "sap.rds.bdi.stream.Homepage.view.predictive.predictive"
            })
        }).placeAt("predictiveTile", "only");

        //Drag & Drop
        $( "#sortable" ).sortable({
            revert: true
        });
    },

    getServer: function(that) {
    	var service = streamService.getInstance();
    	that.oData = service.getServerList();
    },

    setServerDateToSelect: function() {
        this.getServer(this);
        var oModel = new sap.ui.model.json.JSONModel();
        oModel.setData(this.oData);

        var oItemTemplate = new sap.ui.core.Item({
            key: "{select-model>ServerIP}",
            text: "{select-model>ServerName}"
        });

        var oServerSelect = new sap.m.Select("serverSelector", {
            autoAdjustWidth: true,
            items: {
                path: "select-model>/businessData",
                template: oItemTemplate
            }
        }).addStyleClass("homepage-select").addStyleClass("homepage-select-position");

        oServerSelect.setModel(oModel, "select-model");

        return oServerSelect;
    },

    toHome: function(pageName){

        console.log(new Date());
    }
});