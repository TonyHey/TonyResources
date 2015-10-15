/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

jQuery.sap.declare("sap.ushell.shells.ui.view.MapToolKit");
jQuery.sap.require("sap.ushell.library");

sap.ui.core.Control.extend("sap.ushell.shells.ui.view.MapToolKit", { metadata : {
	library : "sap.ushell.shells",
    properties : {
        "state" : {type : "string", group : "Behavior", defaultValue : 'NONE'},
        "enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
        "isPressed" : {type : "boolean", group : "Behavior", defaultValue : false},
        "drawNewPologon" : {type : "boolean", group : "Behavior", defaultValue : false},

        "visible" : {type : "boolean", group : "", defaultValue : true},
        "width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
        "helpId" : {type : "string", group : "Behavior", defaultValue : ''},
        "icon" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : ''},
        "iconHovered" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : ''},
        "iconSelected" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : ''},
        "iconFirst" : {type : "boolean", group : "Appearance", defaultValue : true},
        "height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
        "styled" : {type : "boolean", group : "Appearance", defaultValue : true},
        "lite" : {type : "boolean", group : "Appearance", defaultValue : false},
        "isExpand" : {type : "boolean", group : "Behavior", defaultValue : false}
    }
}}); 


/**
 * Creates a new subclass of class sap.ushell.shells.ui.view.MapToolKit with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 *
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.ushell.shells.ui.view.MapToolKit.extend
 * @function
 */

(function () {
    "use strict";
    /*global jQuery, sap, window*/

    jQuery.sap.require("sap.ushell.resources");
    jQuery.sap.declare("sap.ushell.shells.ui.view.MapToolKit");

    /**
     * MapToolKit
     *
     * @name sap.ushell.shells.ui.view.MapToolKit
     * @private
     * @since 1.16.0
     */
    sap.ushell.shells.ui.view.MapToolKit.prototype.init = function () {
        var that = this;
        this.polygons = [];
        this.aMarkers = [];
        this.selectedMarkers = [];
        this.listeners = [];
        this.oBundle = jQuery.sap.resources({
            url : "../../../../WebContent/i18n/i18n.properties",
            locale : sap.ui.getCore().getConfiguration().getLanguage()
        });

        function polygonToolSelected(toolSelected) {
            switch (toolSelected) {
                case "tool_1" :
                    {
                        if(that.selectedMarkers.length == 0){
                            that.oTool_1.setIcon("../../../../WebContent/image/Pin_Mode_Pressed.gif");
                        }else{
                            that.oTool_1.setIcon("../../../../WebContent/image/Pin_Multi_Mode_Pressed.gif");
                        }
                        if (that.polygons.length >= 1) {
                            that.oTool_2.setIcon("../../../../WebContent/image/Polygon_Multi_More.gif");
                        }else{
                            that.oTool_2.setIcon("../../../../WebContent/image/Polygon_Multi.gif");
                        }
                    }
                    break;
                case "tool_2" :
                    {
                        if(that.selectedMarkers.length == 0){
                            that.oTool_1.setIcon("../../../../WebContent/image/Pin_Mode.gif");
                        }else{
                            that.oTool_1.setIcon("../../../../WebContent/image/Pin_Multi_Mode.gif");
                        }
                        that.oTool_2.setIcon("../../../../WebContent/image/Polygon_Multi_Pressed.gif");
                    }
                break;
                case "tool_3" :
                    {
                        if(that.selectedMarkers.length == 0){
                            that.oTool_1.setIcon("../../../../WebContent/image/Pin_Mode.gif");
                        }else{
                            that.oTool_1.setIcon("../../../../WebContent/image/Pin_Multi_Mode.gif");
                        }
                        if (that.polygons.length >= 1) {
                            that.oTool_2.setIcon("../../../../WebContent/image/Polygon_Multi_More.gif");
                        }else{
                            that.oTool_2.setIcon("../../../../WebContent/image/Polygon_Multi.gif");
                        }
                    }
                break;
                default :
                    console.log("polygontool selected error!")
            }
        };

        this.oPolygonTool = new sap.ui.commons.Image({
            src : "../../../../WebContent/image/Polygon_Start.gif",
            width: '23px',
            height: '23px',
            press: function() {
                if (that.getIsPressed() == false) {
                    this.setSrc("../../../../WebContent/image/Polygon_Mode.gif");
                    this.setTooltip(that.oBundle.getText("PolygonTool_Tooltip"));
                    $("#polygonToolList").show();
                } else {
                    this.setSrc("../../../../WebContent/image/Polygon_Start.gif");
                    this.setTooltip(that.oBundle.getText("PolygonTool_Tooltip_"));
                    $("#polygonToolList").hide();
                    that.state = "NONE";

                    var toolSelected = "tool_3";
                    polygonToolSelected(toolSelected);
                }
                that.setIsPressed(!that.getIsPressed());
            }
        });
        this.oPolygonTool.setTooltip(this.oBundle.getText("PolygonTool_Tooltip_"));

        this.oTool_1 = new sap.m.Button({
            text : this.oBundle.getText("PinsBtn"),
            icon : "../../../../WebContent/image/Pin_Mode.gif",
            type: sap.m.ButtonType.Transparent,
            press: function() {
                var toolSelected = "tool_1";
                polygonToolSelected(toolSelected);

                that.state = "pints";
            }
        });
        this.oTool_1.setTooltip(this.oBundle.getText("PinsBtnTooltip"));

        this.oTool_2 = new sap.m.Button({
            text : this.oBundle.getText("PolygonBtn"),
            icon : "../../../../WebContent/image/Polygon_Multi.gif",
            type: sap.m.ButtonType.Transparent,
            press: function() {
                var toolSelected = "tool_2";
                polygonToolSelected(toolSelected);

                that.state = "drawPolygon";
                if(that.aMarkers[that.aMarkers.length-1].length > 2){
                    that.drawNewPologon = true;
                }
            }
        });
        this.oTool_2.setTooltip(this.oBundle.getText("PolygonBtnTooltip"));

        this.oTool_3 = new sap.m.Button({
            text : this.oBundle.getText("RemoveBtn"),
            icon : "../../../../WebContent/image/Polygon_Clear.gif",
            type: sap.m.ButtonType.Transparent,
            press: function() {
                that.clearAll();

                var toolSelected = "tool_3";
                polygonToolSelected(toolSelected);

                that.notifyAll();
            }
        });
        this.oTool_3.setTooltip(this.oBundle.getText("RemoveBtnTooltip"));
    };

    sap.ushell.shells.ui.view.MapToolKit.prototype.setMap = function (oMap){
        this.map = oMap;
        this.mapContainer = new nokia.maps.map.Container();
        this.map.objects.add(this.mapContainer);

        var that = this;

        function mapClickListener(evt){
            if (that.state == "drawPolygon") {
                var pixelGeo = that.map.pixelToGeo(evt.displayX, evt.displayY);
                var coordinate = new nokia.maps.geo.Coordinate(pixelGeo.latitude, pixelGeo.longitude);
                var marker = new nokia.maps.map.StandardMarker(coordinate);
                that.mapContainer.objects.add(marker);

                if(that.drawNewPologon){
                    var newLineMarkers = [];
                    newLineMarkers.push(marker);
                    that.aMarkers.push(newLineMarkers);
                } else {
                    if(that.aMarkers.length == 0){
                        var lineMarker = [];
                        lineMarker.push(marker);
                        that.aMarkers.push(lineMarker);
                    }else{
                        var lineMarker = that.aMarkers[that.aMarkers.length-1];
                        lineMarker.push(marker);
                    }
                }
                that.paintPoly();

                if(that.aMarkers[that.aMarkers.length-1].length <= 2){
                    return;
                }
                that.notifyAll();
            }
        };
        this.map.addListener("click", mapClickListener);

        function markerClickHandler(event) {
            var marker = event.target;
            if (that.state == "pints") {
                if (that.selectedMarkers.indexOf(marker) !== -1) {
                    marker.set("brush", {
                        color : marker.color
                    });
                    that.selectedMarkers.splice(that.selectedMarkers.indexOf(marker), 1);
                } else {
                    marker.set("brush", {
                        color : "#1080DD"
                    });
                    that.selectedMarkers.push(marker);
                }
                that.notifyAll();
            }
        };
        var markersContainer = new nokia.maps.map.Container();
        markersContainer.addListener("click", markerClickHandler);
        this.map.objects.add(markersContainer);
        return markersContainer;
    };

    sap.ushell.shells.ui.view.MapToolKit.prototype.paintAllPolys = function(){
        for(var i=0; i<this.aMarkers.length; i++){
            var aCoords = [];
            var tempPolygon;
            for(var j=0; j<this.aMarkers[i].length; j++){
                var marker = this.aMarkers[i][j];
                this.mapContainer.objects.remove(marker);
                this.mapContainer.objects.add(marker);
            }
        }
        for(var i=0; i<this.polygons.length; i++){
            this.map.objects.remove(this.polygons[i]);
            this.map.objects.add(this.polygons[i]);
        }
    };

    sap.ushell.shells.ui.view.MapToolKit.prototype.paintPoly = function(){
        var aCoords = [];
        var tempPolygon;
        if( !this.drawNewPologon && this.polygons.length > 0){
            tempPolygon = this.polygons[this.polygons.length - 1];
            this.map.objects.remove(tempPolygon);
        }

        for(var i in this.aMarkers[this.aMarkers.length -1]){
            var marker = this.aMarkers[this.aMarkers.length -1][i];
            aCoords.push(marker.coordinate);
        }

        tempPolygon = new nokia.maps.map.Polygon(
            aCoords, {
                pen : {
                    strokeColor : "#C22A",
                    lineWidth : 2
                },
                brush : {
                    color : "#0FF6"
                }
            }
        );
        if(this.drawNewPologon){
            this.drawNewPologon = false;
        }else{
            this.polygons.pop();
        }
        this.polygons.push(tempPolygon);
        this.map.objects.add(tempPolygon);
    };

    sap.ushell.shells.ui.view.MapToolKit.prototype.clearAll = function(){
        for(var i=0; i<this.aMarkers.length; i++){
            this.mapContainer.objects.removeAll(this.aMarkers[i]);
            this.map.objects.removeAll(this.aMarkers[i]);
        }

        for(var j=0; j<this.polygons.length; j++){
            this.map.objects.remove(this.polygons[j]);
        }
        this.polygons = [];
        this.aMarkers = [];

        for (var i=0; i<this.selectedMarkers.length; i++) {
            var marker = this.selectedMarkers[i];
            marker.set("brush", {
                color : marker.color
            });
        }
        this.selectedMarkers = [];

        this.state = "NONE";
        this.oTool_1.setIcon("../../../../WebContent/image/Pin_Mode.gif");
        this.oTool_2.setIcon("../../../../WebContent/image/Polygon_Multi.gif");
        
    };

    sap.ushell.shells.ui.view.MapToolKit.prototype.regist = function(oControl){
        if(this.listeners.indexOf(oControl) == -1){
            this.listeners.push(oControl);
        }
    };

    sap.ushell.shells.ui.view.MapToolKit.prototype.notifyAll = function(){
        for(var i=0; i<this.listeners.length; i++){
            if(this.listeners[i].refreshData){
                this.listeners[i].refreshData();
            }
        }
    };

    sap.ushell.shells.ui.view.MapToolKit.prototype.getSelectedMarkersStr = function(){
        var markers = this.selectedMarkers;
        var str = "";
        for(var i=0; i<markers.length; i++){
            var coor = markers[i].coordinate;
            str += ("(" + coor.latitude + "," + coor.longitude + ")");
            if(i <  markers.length - 1){
                str += ";"
            }
        }
        return str;
    };


    sap.ushell.shells.ui.view.MapToolKit.prototype.getAMarkersStr = function(){
        var markers = this.aMarkers;
        var str = "MultiPolygon(";
        for(var i=0; i<markers.length; i++){
            var lineMarkers = markers[i];
            str += "((";
            for(var j=0; j<lineMarkers.length; j++){
                var coor = lineMarkers[j].coordinate;
                str += (coor.latitude + ", " + coor.longitude);
                if(j < lineMarkers.length - 1){
                    str += ", ";
                }
            }
            str += "))";
            if(i < markers.length - 1){
                str += ",";
            }
        }
        str += ")";
        return str;
    };

    sap.ushell.shells.ui.view.MapToolKit.prototype.getAMarkersArr = function(){
        var markers = this.aMarkers;
        var polysArr = [];
        for(var i=0; i<markers.length; i++){
            var lineMarkers = markers[i];
            var tempPoly = [];
            for(var j=0; j<lineMarkers.length; j++){
                var coor = lineMarkers[j].coordinate;
                var tempMarker = (coor.latitude + " " + coor.longitude);
                tempPoly.push(tempMarker);
            }
            polysArr.push(tempPoly);
        }

        return polysArr;
    };
}());
