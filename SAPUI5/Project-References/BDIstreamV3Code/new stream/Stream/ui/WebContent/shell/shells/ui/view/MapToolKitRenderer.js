// Copyright (c) 2013 SAP AG, All Rights Reserved

(function () {
    "use strict";
    /*global jQuery, sap*/

    jQuery.sap.declare("sap.ushell.shells.ui.view.MapToolKitRenderer");
    /**
     * @name sap.ushell.shells.ui.view.MapToolKitRenderer
     * @static
     * @private
     */
    sap.ushell.shells.ui.view.MapToolKitRenderer = {};

    /**
     * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
     *
     * @param {sap.ui.core.RenderManager} rm The RenderManager that can be used for writing to the render output buffer.
     * @param {sap.ui.core.Control} oButton An object representation of the control that should be rendered.
     */
    sap.ushell.shells.ui.view.MapToolKitRenderer.render = function(rm, oControl) {
        oControl.oPolygonTool.placeAt("polygonTool","only");
        oControl.oTool_1.placeAt("polygonTool_1","only");
        oControl.oTool_2.placeAt("polygonTool_2","only");
        oControl.oTool_3.placeAt("polygonTool_3","only");

        if(oControl.getIsPressed()){
            $("#polygonToolList").show();
        }else{
            $("#polygonToolList").hide();
        }
        oControl.paintAllPolys();
    }
}());