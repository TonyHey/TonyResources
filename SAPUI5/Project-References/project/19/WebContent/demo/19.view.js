sap.ui.jsview("demo.19", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf demo.Page1
	*/ 
	getControllerName : function() {
		return "demo.19";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf demo.Page1
	*/ 
	createContent : function(oController) {
		
	    var dMode = new sap.ui.model.json.JSONModel();
        
        var serach = new sap.ui.commons.SearchField({
            search: function(oEvent) {
                var name = oEvent.getParameter("query");
                oController.search(name, dMode);
                oTable.setModel(dMode);
                oTable.bindRows("/results");
            }
        });

        //Create an instance of the table control
        var oTable = new sap.ui.table.Table({
            visibleRowCount: 10,
            editable: false
            
        });

        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({text: "Cover"}),
            visible: true,
            template: new sap.ui.commons.Image().bindProperty("src", "artworkUrl30")
            
        }));
        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({text: "Title"}),
            visible: true,
            template: new sap.ui.commons.TextField().bindProperty("value", "trackName")
        }));
        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({text: "Artist Name"}),
            visible: true,
            template: new sap.ui.commons.TextField().bindProperty("value", "artistName")
        }));

        
        var page = [serach,oTable];
        
        return page;
		
	}

});
