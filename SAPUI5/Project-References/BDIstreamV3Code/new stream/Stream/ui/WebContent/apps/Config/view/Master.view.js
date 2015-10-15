sap.ui.jsview("sap.rds.bdi.stream.config.view.Master", {
    
    getControllerName : function() {
        return "sap.rds.bdi.stream.config.view.Master";
    },

    createContent : function(oController) {
    	var oBundle = jQuery.sap.resources({
			url : "ui/WebContent/i18n/i18n.properties",
			locale : sap.ui.getCore().getConfiguration().getLanguage() 
		});
        var page = new sap.m.Page("page", {
        	title: oBundle.getText("master.title"),
            showNavButton: false,
            subHeader: new sap.m.Bar("searchBar", {
                contentMiddle: [
                    new sap.m.SearchField("searchField", {
                        showRefreshButton: "{device>/isNoTouch}",
                        search: oController.onSearch,
                        width: "100%",
                        liveChange: oController.onLiveChange
                    })
                ]
            }),
            content: [
                new sap.m.List("list", {
                    mode: "{device>/listMode}",
                  //select: oController.listSelectHandler,
                    //growing: true,
                    growingScrollToLoad: true,
                })
            ]
        });
        
        return page;
    }
})