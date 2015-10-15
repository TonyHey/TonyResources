sap.ui.jsview("sap.ui.demo.myFiori.view.kpiheader", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.SearchEngineAnalysis.view.kpiheader
	*/ 
	getControllerName : function() {
		return "sap.ui.demo.myFiori.view.kpiheader";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.SearchEngineAnalysis.view.kpiheader
	*/ 
    getModel : function() {
        return this.kpiModel;
    }, 
    
    
    kpiModel : {},
    createContent : function(oController) {
        this.totalSignalsCell = new sap.suite.ui.commons.HeaderCellItem();
        this.kpiModel = new sap.ui.model.json.JSONModel();
        var a=  new sap.suite.ui.commons.NumericContent("totalSignId", {
			value : "{/Total}",
			scale : "{/Scale}",
			tooltip: " "
		});

		/*a.bindProperty("tooltip","/Total",function(value){
			return ""+value;
		});*/
		this.totalSignalsCell.setContent(a);

        var totalSignalsCellLabel = new sap.suite.ui.commons.HeaderCellItem();
        var oBundle = jQuery.sap.resources({
			url : "../../../../WebContent/i18n/i18n.properties",
			locale : sap.ui.getCore().getConfiguration().getLanguage() 
		});
        totalSignalsCellLabel.setContent(new sap.ui.commons.Label({
            text : oBundle.getText("Total.number.of.access")
        }));      
        
        var view = new sap.suite.ui.commons.HeaderContainer("header", {
            items : [ new sap.suite.ui.commons.HeaderCell({
                north : this.totalSignalsCell,
                south : totalSignalsCellLabel
            }) ]
        });
        view.setModel(this.kpiModel);
        return view;
    }

});