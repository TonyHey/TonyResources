sap.ui.controller("sap.rds.bdi.stream.Homepage.view.detailPage.sourceAnalysis.visitDurationCharts.map", {
    markers : [],
    map : null,
    infoBubbles : null,
    drawpoly : "drawPoly",
    clear : "clear",
    state : null,
    first : null,
    aMarkers : null,
    myContainer : null,
    polyVerticesDoubleList : [],
    mapController : null,
    kpiHead : null,
    oldData : null,
    dataLoaded : false,
    entityList : [],
    entityListServer : [],

    onInit: function() {
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.constant");

        nokia.Settings.set("app_id", "5fxK8bbx28OP6DLr_rid");
        nokia.Settings.set("app_code", "f4OuqzyGkoTweklooZ5tBQ");

        this.oBundle = jQuery.sap.resources({
            url : "ui/WebContent/i18n/i18n.properties",
            locale : sap.ui.getCore().getConfiguration().getLanguage()
        });
    },

    onBeforeRendering: function() {
        if (this.toolKit) {
            this.refreshData();
        }
    },

    onAfterRendering: function() {
        var myCenter;

        this.getMapData();
        if (this.entityList.length != 0) {
            if (this.entityList.businessData.length != 0) {
                myCenter = [
                            parseFloat(this.entityList.businessData[parseInt((this.entityList.businessData.length) / 2)].Latitude),
                            parseFloat(this.entityList.businessData[parseInt((this.entityList.businessData.length) / 2)].Longitude)
                ];
            } else {
                myCenter = [59.2824, 24.3384];
            }
        } else {
            myCenter = [59.2824, 24.3384];
        }

        this.map = new nokia.maps.map.Display(document.getElementById("mapContainerSVD"), {
            zoomLevel: 5,
            center: myCenter,
            components: [
                         new nokia.maps.map.component.Behavior(),
                         new nokia.maps.map.component.OverlaysSelector(),
                         new nokia.maps.map.component.ZoomBar(),
                         new nokia.maps.map.component.Overview(),
                         new nokia.maps.map.component.TypeSelector(),
                         new nokia.maps.map.component.ScaleBar(),
            ]
        });

        if(!this.toolKit){
            this.toolKit = new sap.rds.bdi.stream.mapToolkit.MapToolKit({
                idPostfix: "SVD"
            });
        }
        this.toolKit.placeAt("polygonToolSVD", "only");
        this.toolKit.regist(this);
        this.markersContainer = this.toolKit.setMap(this.map);

        this.infoBubbles = new nokia.maps.map.component.InfoBubbles();
        this.map.components.add(this.infoBubbles);
        this.infoBubbles.initBubble();
        this.infoBubbles.options.set("backgroundColor", "#fff");
        this.infoBubbles.options.set("color", "#666");

        //initial table for infoBubble
        this.cols = [
             "ColumnName",
             "Count"
           ];
        this.dataCols = [
             "columnValue",
             "SpatialCount"
           ];

        this.oTable = new sap.m.Table({
            fixedLayout : false,
            growing : true,
            growingScrollToLoad : true,
            growingThreshold : 20,
            columns : this.cols.map(function(colname) {
                return new sap.m.Column({
                    header : new sap.m.Label({
                        text : colname
                    })
                });
            })
        });
        var tableModel = new sap.ui.model.json.JSONModel();
        tableModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
        this.oTable.setModel(tableModel);
        this.oTable.bindAggregation("items", "/", new sap.m.ColumnListItem({
            cells : this.dataCols.map(function(colname) {
                return new sap.m.Label({
                    text : "{" + colname + "}"
                });
            })
        }));

        if (!this.dataLoaded) {
            this.loadMarkers();
        } else {
            this.markersContainer.objects.addAll(this.markers);
        }

        if (typeof polygon !== 'undefined') {
            if (aMarkers.length != 0) {
                for (var i = 0; i < aMarkers.length; i++) {
                    this.map.objects.add(aMarkers[i]);
                }
            }
            this.map.objects.add(polygon);
        }
    },
    /**
     * refresh Map
     */
    refresh: function() {
        var that = this;
        var myCenter;

        polyVerticesDoubleList = [];
        first = "first";

        if(typeof polygon !== 'undefined'){
            this.removePoly();
        }
        this.removeAllMarkers();
        this.getMapData();
        if (this.entityList.length != 0) {
            if (this.entityList.businessData.length != 0) {
                myCenter = [
                            parseFloat(this.entityList.businessData[parseInt((this.entityList.businessData.length) / 2)].Latitude),
                            parseFloat(this.entityList.businessData[parseInt((this.entityList.businessData.length) / 2)].Longitude)
                ];
            } else {
                myCenter = [59.2824, 24.3384];
            }
        } else {
            myCenter = [59.2824, 24.3384];
        }
        if(this.map) {
            this.map.setCenter(myCenter);
            this.loadMarkers();
        }
    },

    getMapData: function() {
        var that = this;
        var util = sap.rds.bdi.stream.Homepage.util.dateConvert;
        var defaultServerIP = sap.rds.bdi.stream.Homepage.util.constant.DEFAULT_SERVER_IP;
        var afterDate = util.dateToString(sap.ui.getCore().byId("sourceAnalysisDate").getDateValue());
        var beforeDate = util.dateToString(sap.ui.getCore().byId("sourceAnalysisDate").getSecondDateValue());
        var selectOpt = sap.ui.getCore().byId("sourceVisitDurationSelected").getSelectedKey();
        var serverSelectIP = sap.ui.getCore().byId("sourceAnalysisIP").getSelectedKey();

        if (!serverSelectIP.length) {
            this.serverIP = defaultServerIP;
        } else {
            this.serverIP = serverSelectIP;
        }
        if (selectOpt === "Browser") {
            this.oService = "ui/xsjs/api.xsjs/intelligence/getVDAvgBrowserMap?after=" + afterDate +
            "&before=" + beforeDate + "&serverIP=" + this.serverIP;

            this.oServer = "ui/xsjs/api.xsjs/intelligence/getSrvVDAvgBrowserMap?after=" + afterDate +
            "&before=" + beforeDate + "&serverIP=" + this.serverIP;
        } else {
            this.oService = "ui/xsjs/api.xsjs/intelligence/getVDAvgOriginMap?after=" + afterDate +
            "&before=" + beforeDate + "&serverIP=" + this.serverIP;

            this.oServer = "ui/xsjs/api.xsjs/intelligence/getSrvVDAvgOriginMap?after=" + afterDate +
            "&before=" + beforeDate + "&serverIP=" + this.serverIP;
        }

        jQuery.ajax({
            url: this.oService,
            dataType: 'json',
            async : false,
            timeout: 59000,
            type: "GET",
            success: function(oResponse, textStatus, jqXHR) {
                that.entityList =  oResponse;
            },
            error: function(jqXHR, textStatus, errorThrown){
                if (textStatus==="timeout") {
                    sap.ui.commons.MessageBox.alert(that.oBundle.getText("RequireShorterTimeMsg"), null, "Error");
                } else {
                    jQuery.sap.log.fatal("The following problem occurred: " + textStatus, jqXHR.responseText + "," + jqXHR.status +"," + jqXHR.statusText);
                    sap.ui.commons.MessageBox.alert(that.oBundle.getText("DataErrorMsg"), null, "Error");
                };
            }
        });

        jQuery.ajax({
            url: this.oServer,
            dataType: 'json',
            async : false,
            timeout: 59000,
            type: "GET",
            success: function(oResponse, textStatus, jqXHR) {
                that.entityListServer =  oResponse;
            },
            error: function(jqXHR, textStatus, errorThrown){
                if (textStatus==="timeout") {
                    sap.ui.commons.MessageBox.alert(that.oBundle.getText("RequireShorterTimeMsg"), null, "Error");
                } else {
                    jQuery.sap.log.fatal("The following problem occurred: " + textStatus, jqXHR.responseText + "," + jqXHR.status +"," + jqXHR.statusText);
                    sap.ui.commons.MessageBox.alert(that.oBundle.getText("DataErrorMsg"), null, "Error");
                };
            }
        });
    },

    removeAllMarkers : function() {
        if(this.markers.length != 0){
            for(var i = 0; i < this.markers.length; i++){
                this.markersContainer.objects.remove(this.markers[i]);
            }
        }
        this.markers = [];
    },

    removePoly : function() {
        if (aMarkers.length != 0) {
            myContainer.objects.removeAll(aMarkers);
            map.objects.removeAll(aMarkers);
            map.objects.remove(polygon);
        }
        polygon = undefined;
        myContainer = null;
        aMarkers = [];
    },

    addMarkerToContainer : function (container, coordinate, color) {
        var marker = new nokia.maps.map.StandardMarker(coordinate, {
            brush: color,
            bubbleText : 'Brandenburger Tor'
        });
        container.objects.add(marker);
    },

    /**
     * refresh KPI Total Visits
     */
    refreshData : function() {
        var that = this;
        var kpiValue
        var util = sap.rds.bdi.stream.Homepage.util.dateConvert;
        var defaultServerIP = sap.rds.bdi.stream.Homepage.util.constant.DEFAULT_SERVER_IP;
        var aMarkers = this.toolKit.getAMarkersStr();
        var selectedMarkers = this.toolKit.getSelectedMarkersStr();
        var polysArrStr = JSON.stringify(this.toolKit.getAMarkersArr());
        var markersStr = this.toolKit.getSelectedMarkersStr();
        var afterDate = util.dateToString(sap.ui.getCore().byId("sourceAnalysisDate").getDateValue());
        var beforeDate = util.dateToString(sap.ui.getCore().byId("sourceAnalysisDate").getSecondDateValue());
        var serverSelectIP = sap.ui.getCore().byId("sourceAnalysisIP").getSelectedKey();
        var selectOpt = sap.ui.getCore().byId("sourceVisitSelected").getSelectedKey();
        this.entityHeader = [];

        if (!serverSelectIP.length) {
            this.serverIP = defaultServerIP;
        } else {
            this.serverIP = serverSelectIP;
        }

        this.oHeader = "ui/xsjs/api.xsjs/intelligence/getStreamCountPoly?after=" + afterDate + "&before=" + beforeDate
        + "&serverIP=" + this.serverIP + "&polysArrStr=" + polysArrStr + "&markersStr=" + markersStr;

        jQuery.ajax({
            url: this.oHeader,
            dataType: 'json',
            async : false,
            timeout: 59000,
            type: "GET",
            success: function(oResponse, textStatus, jqXHR) {
                that.entityHeader =  oResponse;
            },
            error: function(jqXHR, textStatus, errorThrown) {
                if(textStatus==="timeout") {
                    sap.ui.commons.MessageBox.alert(that.oBundle.getText("RequireShorterTimeMsg"), null, "Error");
                } else {
                    jQuery.sap.log.fatal("The following problem occurred: " + textStatus, jqXHR.responseText + "," + jqXHR.status +"," + jqXHR.statusText);
                    sap.ui.commons.MessageBox.alert(that.oBundle.getText("DataErrorMsg"), null, "Error");
                };
            }
        });

        kpiValue = this.entityHeader.businessData[0].VISIT_DURATION_AVG;
        sap.ui.getCore().byId("sourceVisitDurationKpiValue").setText(util.numberToHourString(kpiValue));
    },

    loadMarkers : function() {
        this.toolKit.clearAll();
        var self = this;
        var selectOpt = sap.ui.getCore().byId("sourceVisitDurationSelected").getSelectedKey();
        var util = sap.rds.bdi.stream.Homepage.util.dateConvert;

        if (self.openedBubble){
            self.infoBubbles.closeBubble(self.openedBubble);
        }

        var TOUCH = nokia.maps.dom.Page.browser.touch,
        CLICK = TOUCH ? "mouseover" : "mouseover";

        var infoBubbleTimer = null;

        var markerMouseoutHandler = function (evt) {
            clearTimeout(infoBubbleTimer);
        };

        var markerMouseoverHandler = function (evt) {
            var marker = evt.target;
            function generateBusyIndicator() {
                var busyIndicator = document.getElementById("busyIndicatorSVD");
                if(!busyIndicator){
                    $("body").append("<div id='busyIndicatorSVD'></div>");
                    (new sap.m.BusyIndicator()).placeAt("busyIndicatorSVD", "only");
                    busyIndicator = document.getElementById("busyIndicatorSVD")
                }
                return busyIndicator;
            };
            var busyIndicator = generateBusyIndicator();

            var loadInfoBubbleData = function() {
                if (self.openedBubble){
                    self.infoBubbles.closeBubble(self.openedBubble);
                }

                var eId = "eId_popBubbleSVD";
                var info = document.getElementById(eId);
                if(!info){
                    $("body").append("<div id='" + eId + "'>" + marker.html + "</div>");
                    info = document.getElementById(eId);
                }else{
                    info.html(marker.html);
                }

                self.oTable.getModel().setData(marker.datas);
                var popupContainer = new sap.m.ScrollContainer({
                    vertical: true,
                    horizontal: false,
                    content: [self.oTable]
                });
                popupContainer.placeAt(eId, "only");

                self.openedBubble = self.infoBubbles.openBubble(info, marker.coordinate);
            };

            infoBubbleTimer = setTimeout(function() {
                self.openedBubble = self.infoBubbles.openBubble(busyIndicator, marker.coordinate);
                setTimeout(loadInfoBubbleData, 500);
            }, 500);
        };

        if(this.entityList.businessData){
            var city = null;
            var bubbleHtml = null;
            var spatialCountAux = null;
            var datas = [];
            if(this.entityList.businessData.length != 0){
                var idx = 0;
                this.entityList.businessData.forEach(
                    jQuery.proxy( function(entity) {
                        if (city == null) {
                            city = entity.City;
                            spatialCountAux = util.numberToHourString(entity.SpatialCount);
                            geoLat = parseFloat(entity.Latitude);
                            geoLng = parseFloat(entity.Longitude);
                        }

                        var columnValue = selectOpt == 'Browser' ? entity.Browser : entity.OriginSite;

                        if(city == entity.City) {
                            if (bubbleHtml == null) {
                                datas = [];
                                bubbleHtml = "<div style='padding-top: 0.5rem; padding-bottom: 0.5rem;font-size:0.75rem;margin-bottom:5px; text-align:center;color:#FFFFFF;background-color: rgb(61, 166, 56)'>"+entity.City +", "+entity.Region+" (" + entity.Country + ")</div>";
                            }

                            var data = {};
                            data.columnValue = columnValue;
                            data.SpatialCount = util.numberToHourString(entity.SpatialCount);
                            datas.push(data);

                            if(idx == this.entityList.businessData.length-1) {
                                var marker = new nokia.maps.map.StandardMarker([geoLat, geoLng],
                                    { brush: "rgb(61, 166, 56)",
                                    html : bubbleHtml,
                                    datas : datas});
                                marker.set("color", "rgb(61, 166, 56)");
                                marker.addListener("mouseover", markerMouseoverHandler, false);
                                marker.addListener("mouseout", markerMouseoutHandler, false);
                                this.markers.push(marker);

                                city = entity.City;
                            }
                        } else {
                            if (geoLat && geoLng){
                                var marker = new nokia.maps.map.StandardMarker([geoLat, geoLng],
                                        { brush: "rgb(61, 166, 56)",
                                    html : bubbleHtml,
                                    datas : datas});
                                marker.set("color", "rgb(61, 166, 56)");
                                marker.addListener("mouseover", markerMouseoverHandler, false);
                                marker.addListener("mouseout", markerMouseoutHandler, false);

                                datas = [];
                                bubbleHtml = "<div style='padding-top: 0.5rem; padding-bottom: 0.5rem;font-size:0.75rem;margin-bottom:5px; text-align:center;color:#FFFFFF;background-color: rgb(61, 166, 56)'>"+entity.City +", "+entity.Region+" (" + entity.Country + ")</div>";

                                var data = {};
                                data.columnValue = columnValue;
                                data.SpatialCount = util.numberToHourString(entity.SpatialCount);
                                datas.push(data);

                                if (spatialCountAux != 0) {
                                    this.markers.push(marker);
                                }

                                city = entity.City;
                                geoLat = parseFloat(entity.Latitude);
                                geoLng = parseFloat(entity.Longitude);
                                spatialCountAux = util.numberToHourString(entity.SpatialCount);
                            }

                            if(idx == this.entityList.businessData.length-1){
                                bubbleHtml = "<div style='padding-top: 0.5rem; padding-bottom: 0.5rem;font-size:0.75rem;margin-bottom:5px; text-align:center;color:#FFFFFF;background-color: rgb(61, 166, 56)'>"+entity.City +", "+entity.Region+" (" + entity.Country + ")</div>";
                                var marker = new nokia.maps.map.StandardMarker([geoLat, geoLng],
                                        { brush: "rgb(61, 166, 56)",
                                            html : bubbleHtml,
                                            datas : datas});
                                marker.set("color", "rgb(61, 166, 56)");
                                marker.addListener("mouseover", markerMouseoverHandler, false);
                                marker.addListener("mouseout", markerMouseoutHandler, false);
                                this.markers.push(marker);
                            }
                        }
                        idx++;
                    }, this));
                this.markersContainer.objects.addAll(this.markers);
            }
        }

        if(this.entityListServer){
            var serverAux = null;
            var htmlRead = null;
            var htmlFinal = null;
            var datas = [];
            if(this.entityListServer.serverData.length != 0){
                this.entityListServer.serverData.forEach(
                    jQuery.proxy( function(entity) {
                        if (entity.Server_IP!= serverAux) {
                            datas = [];
                            serverAux = entity.Server_IP;
                            htmlFinal = "<div style='padding-top: 0.5rem; padding-bottom: 0.5rem;font-size:0.75rem;margin-bottom:5px; text-align:center;color:#FFFFFF;background-color: #c00000'>"+entity.Server_Name+ " ("+entity.Server_IP+")</div>";
                        }

                        var columnValue = selectOpt == 'Browser' ? entity.Browser : entity.OriginSite;

                        var geoLat = parseFloat(entity.Latitude);
                        var geoLng = parseFloat(entity.Longitude);

                        var data = {};
                        data.columnValue = columnValue;
                        data.SpatialCount = util.numberToHourString(entity.SpatialCount);
                        datas.push(data);

                        if (geoLat && geoLng){
                            var marker = new nokia.maps.map.StandardMarker([geoLat, geoLng],
                                {brush: { color: "#c00000" },
                                    html : htmlFinal,
                                    datas : datas});
                            marker.set("color", "#c00000");
                            marker.addListener("mouseover", markerMouseoverHandler, false);
                            marker.addListener("mouseout", markerMouseoutHandler, false);
                            this.markers.push(marker);
                        }
                    }, this));
                this.markersContainer.objects.addAll(this.markers);
            }
        }

        this.dataLoaded = true;
    }
});