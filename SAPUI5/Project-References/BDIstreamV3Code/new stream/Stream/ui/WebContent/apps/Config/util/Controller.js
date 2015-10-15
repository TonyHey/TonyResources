jQuery.sap.declare("sap.rds.bdi.stream.config.util.Controller");

sap.ui.core.mvc.Controller.extend("sap.rds.bdi.stream.config.util.Controller", {
	getEventBus : function () {
		return this.getOwnerComponent().getEventBus();
	},

	getRouter : function () {
		return sap.ui.core.UIComponent.getRouterFor(this);
	}
});