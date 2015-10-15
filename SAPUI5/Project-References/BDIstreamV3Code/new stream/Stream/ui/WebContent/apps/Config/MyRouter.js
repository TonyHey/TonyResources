jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
jQuery.sap.require("sap.ui.core.routing.Router");
jQuery.sap.declare("sap.rds.bdi.stream.config.MyRouter");

sap.ui.core.routing.Router.extend("sap.rds.bdi.stream.config.MyRouter", {

    constructor : function() {
        sap.ui.core.routing.Router.apply(this, arguments);
        this._oRouteMatchedHandler = new sap.m.routing.RouteMatchedHandler(this);
    },
    myNavBack : function (route, data) {
        var history = sap.ui.core.routing.History.getInstance();
        var url = this.getURL(route, data);
        var direction = history.getDirection(url);
        if ("Backwards" === direction) {
            window.history.go(-1);
        } else {
            var replace = true; // otherwise we go backwards with a forward history
            this.navTo(route, data, replace);
        }
    },
    myNavToWithoutHash : function (viewName, viewType, master, data) {
        var app = sap.ui.getCore().byId("splitApp");
        var view = this.getView(viewName, viewType);
        
        if (sap.ui.getCore().byId(view.getId()) !== undefined) {
       		sap.ui.getCore().byId(view.getId()).getController().refreshDetail();
       	}
        
        app.addPage(view, master);
        app.toDetail(view.getId(), "show", data);
    }
//    myNavBack : function(sRoute, mData) {
//        var oHistory = sap.ui.core.routing.History.getInstance();
//        var sPreviousHash = oHistory.getPreviousHash();
//
//        // The history contains a previous entry
//        if (sPreviousHash !== undefined) {
//            window.history.go(-1);
//        } else {
//            var bReplace = true; // otherwise we go backwards with a forward history
//            this.navTo(sRoute, mData, bReplace);
//        }
//    },
//
//    /**
//     * @public Changes the view without changing the hash
//     *
//     * @param oOptions {object} must have the following properties
//     * <ul>
//     *  <li> currentView : the view you start the navigation from.</li>
//     *  <li> targetViewName : the fully qualified name of the view you want to navigate to.</li>
//     *  <li> targetViewType : the viewtype eg: XML</li>
//     *  <li> isMaster : default is false, true if the view should be put in the master</li>
//     *  <li> transition : default is "show", the navigation transition</li>
//     *  <li> data : the data passed to the navContainers livecycle events</li>
//     * </ul>
//     */
//    myNavToWithoutHash : function (oOptions) {
//        var oSplitApp = this.findSplitApp(oOptions.currentView);
//
//        // Load view, add it to the page aggregation, and navigate to it
//        var oView = this.getView(oOptions.targetViewName, oOptions.targetViewType);
//        oSplitApp.addPage(oView, oOptions.isMaster);
//        oSplitApp.to(oView.getId(), oOptions.transition || "show", oOptions.data);
//    },

//    backWithoutHash : function (oCurrentView, bIsMaster) {
//        var sBackMethod = bIsMaster ? "backMaster" : "backDetail";
//        this._findSplitApp(oCurrentView)[sBackMethod]();
//    },
//    
//    destroy : function() {
//        sap.ui.core.routing.Router.prototype.destroy.apply(this, arguments);
//        this._oRouteMatchedHandler.destroy();
//    },
//
//    findSplitApp : function(oControl) {
//        sAncestorControlName = "splitApp";
//
//        if (oControl instanceof sap.ui.core.mvc.View && oControl.byId(sAncestorControlName)) {
//            return oControl.byId(sAncestorControlName);
//        }
//
//        return oControl.getParent() ? this._findSplitApp(oControl.getParent(), sAncestorControlName) : null;
//    }

});

