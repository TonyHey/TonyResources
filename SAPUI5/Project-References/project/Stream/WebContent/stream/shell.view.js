sap.ui.jsview("sap.stream.shell", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf stream.shell
	*/ 
	getControllerName : function() {
		return "sap.stream.shell";
	},

	   createContent : function(oController) {
	        oController.searchField = new sap.m.SearchField({
	            search : function() {
	                alert("search");
	            }
	        }).addStyleClass("shell-search");
	
	        oController.searchItem = new sap.ui.unified.ShellHeadItem({
	            icon: "sap-icon://search",
	            press : function() {
	                alert("search");
	            }
	        });
	        
	        oController.userItem = new sap.ui.unified.ShellHeadUserItem({
	            image : "./image/user.png",
	            username : "Hi Viki",
	            press: jQuery.proxy(oController.handleUserItemPress, oController)
	        });
	
	        oController.oShell = new sap.ui.unified.Shell("oShell", {
	            icon: "./image/sap_50x26.png",
	            searchVisible : true,
	            headEndItems: oController.searchItem,
	            user: oController.userItem,
	        });
	
	        return oController.oShell;
	    },
	
	    onAfterRendering: function() {
	        this.addShellTitle();
	    },
	
	    addShellTitle: function() {
	        var oShellTitle = "STREAM INTELLIGENCE";
	        $(".sapUiUfdShellIco").append("<label class='shell-header-title'>" + oShellTitle + "<label>");
	    }

});