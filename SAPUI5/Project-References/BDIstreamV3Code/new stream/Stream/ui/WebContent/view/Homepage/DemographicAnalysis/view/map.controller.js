sap.ui.controller("sap.ui.demo.myFiori.view.map", {

	oData3:{},
	markers : [],
	map : null,
	infoBubbles : null,
	openedBubble : null,
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

	getControllerName : function() {
		return "sap.ui.demo.myFiori.view.map";
	},

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf equipment.map-nokia
	 */
	onInit: function() {
		this.oBundle = jQuery.sap.resources({
			url : "../../../../WebContent/i18n/i18n.properties",
			locale : sap.ui.getCore().getConfiguration().getLanguage()
		});

        jQuery.sap.registerModulePath("sap.ushell.shells.ui.view", "../../../shell/shells/ui/view");
        jQuery.sap.require("sap.ushell.shells.ui.view.MapToolKit");
	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf equipment.map-nokia
	 */
//	onBeforeRendering: function() {

//	},

	/**
	 * Calls the generic function that retrieves the data from the server with the parameters for query
	 *
	 */
	getData: function(sServiceUrl, oController) {
		var that = this;
		jQuery.ajax({
			url: sServiceUrl,
			dataType: 'json',
			async : false,
			timeout: 59000,
			type: "GET",
			success: function(oResponse, textStatus, jqXHR) {
				oController.oData3 =  oResponse;
			},
			error: function(jqXHR, textStatus, errorThrown){
				if(textStatus==="timeout") {
					sap.ui.commons.MessageBox.alert(
							that.oBundle.getText("RequireShorterTimeMsg"), null, "Error");
				} else {
					jQuery.sap.log.fatal("The following problem occurred: " + textStatus, jqXHR.responseText + "," + jqXHR.status +"," + jqXHR.statusText);
					sap.ui.commons.MessageBox.alert(that.oBundle.getText("DataErrorMsg"), null, "Error");
				};
			},
			complete: function(){

			}
		});
	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf equipment.map-nokia
	 */
	onAfterRendering: function() {
		var that = this;
		nokia.Settings.set("app_id", "5fxK8bbx28OP6DLr_rid");
		nokia.Settings.set("app_code", "f4OuqzyGkoTweklooZ5tBQ");

		polyVerticesDoubleList = [];
		first = "first";

		// Set the Model
		this.oService = "../../../../services/intelligence.xsjs?cmd=getAllServerIP";

		//retrieves data for Server IP Dropdown box

		jQuery.proxy(this.getData(this.oService, this), this);

		//Model for Server IP
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(this.oData3);

		//Insert Server IP Dropbown box
		var oServerIP = new sap.m.Select();

		/* var oServerIP = new sap.m.Select("ServerIPMapC", {
            items : {
                path : '/businessData',
                template : new sap.ui.core.Item({
                      key : "{ServerIP}",
                      text : "{ServerName}"
                })
         }}); */

		oServerIP.attachChange(
				jQuery.proxy(
						function(oEvent){
							this.ip = oEvent.getParameters().selectedItem.mProperties.additionalText;
							this.map.destroyContent();
							this.refresh();
						}, this));

		oServerIP.setModel(oModel);

		/////////////////////////////////////////////////////

		var oItemServerIP = new sap.ui.core.ListItem();
		oItemServerIP.bindProperty("text", "ServerName");
		oItemServerIP.bindProperty("additionalText", "ServerIP");
		oServerIP.bindItems("/businessData", oItemServerIP);

		this.ip = settingsDemog.server;
		this.afterDate = settingsDemog.afterDate;
		this.beforeDate = settingsDemog.beforeDate;

		if (settingsDemog.kpi == "AgeRange"){
			// Set the Model
			this.oService = "../../../../services/intelligence.xsjs?cmd=getUserDemogMapAnalysis&after=" + this.afterDate +
			"&before=" + this.beforeDate + "&serverIP=" + this.ip;

			this.oServer = "../../../../services/intelligence.xsjs?cmd=getUserDemogServerAnalysis&after=" + this.afterDate +
			"&before=" + this.beforeDate + "&serverIP=" + this.ip;
		}
		else{
			this.oService = "../../../../services/intelligence.xsjs?cmd=getUserGenderMapAnalysis&after=" + this.afterDate +
			"&before=" + this.beforeDate + "&serverIP=" + this.ip;

			this.oServer = "../../../../services/intelligence.xsjs?cmd=getUserGenderServerAnalysis&after=" + this.afterDate +
			"&before=" + this.beforeDate + "&serverIP=" + this.ip;
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
				if(textStatus==="timeout") {
					sap.ui.commons.MessageBox.alert(that.oBundle.getText("RequireShorterTimeMsg"), null, "Error");
				} else {
					jQuery.sap.log.fatal("The following problem occurred: " + textStatus, jqXHR.responseText + "," + jqXHR.status +"," + jqXHR.statusText);
					sap.ui.commons.MessageBox.alert(that.oBundle.getText("DataErrorMsg"), null, "Error");
				};
			},
			complete: function(){

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
				if(textStatus==="timeout") {
					sap.ui.commons.MessageBox.alert(that.oBundle.getText("RequireShorterTimeMsg"), null, "Error");
				} else {
					jQuery.sap.log.fatal("The following problem occurred: " + textStatus, jqXHR.responseText + "," + jqXHR.status +"," + jqXHR.statusText);
					sap.ui.commons.MessageBox.alert(that.oBundle.getText("DataErrorMsg"), null, "Error");
				};
			},
			complete: function(){

			}
		});

		var myCenter;
		if(this.entityList.length != 0){
			if(this.entityList.businessData.length != 0){
				myCenter = [parseFloat(this.entityList.businessData[parseInt((this.entityList.businessData.length) / 2)].Latitude),
				            parseFloat(this.entityList.businessData[parseInt((this.entityList.businessData.length) / 2)].Longitude)];
			} else{
				myCenter = [59.2824, 24.3384];
			}
		} else{
			myCenter = [59.2824, 24.3384];
		}

        var metaInfo = {
            center: myCenter,
            minZoomLevel : 2.3,
            zoomLevel: 5,
            components: [
                 new nokia.maps.map.component.Behavior(),
                 new nokia.maps.map.component.OverlaysSelector(),
                 new nokia.maps.map.component.ZoomBar(),
                 new nokia.maps.map.component.Overview(),
                 new nokia.maps.map.component.TypeSelector(),
                 new nokia.maps.map.component.ScaleBar(),
             ],
        };
        if(this.map){
            this.oldMap = this.map;
            var center = this.oldMap.center;
            var zoomLevel = this.oldMap.zoomLevel;
            var oldMinZoomLevel = this.oldMap.minZoomLevel;
            metaInfo.center = center;
            metaInfo.zoomLevel = zoomLevel;
            metaInfo.minZoomLevel = oldMinZoomLevel;
        }

        this.map = new nokia.maps.map.Display(
            document.getElementById("mapContainer"), metaInfo
        );

        if(!this.toolKit){
            this.toolKit = new sap.ushell.shells.ui.view.MapToolKit();
        }
        this.toolKit.placeAt("polygonTool", "only");
        this.toolKit.regist(this);
        this.markersContainer = this.toolKit.setMap(this.map);

		infoBubbles = new nokia.maps.map.component.InfoBubbles();
		this.map.components.add(infoBubbles);
		infoBubbles.initBubble();
		infoBubbles.options.set("backgroundColor", "#fff");
		infoBubbles.options.set("color", "#666");

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

        if(!this.dataLoaded){
            this.loadMarkers();
            setTimeout(function(){
                if (that.markersContainer.getBoundingBox() != null) {
                    that.map.zoomTo(that.markersContainer.getBoundingBox());
                }
            }, 2000);
        } else {
            this.markersContainer.objects.addAll(this.markers);
        }

		if(typeof polygon !== 'undefined'){
			if(aMarkers.length != 0){
				for(var i = 0; i < aMarkers.length; i++){
					this.map.objects.add(aMarkers[i]);
				}
			}
			this.map.objects.add(polygon);
		}

		if(flsc == "off" ){
			$('#mapContainer').height(820);
		}
	},

	refresh : function(afterDate, beforeDate, ip) {
		var that = this;
		nokia.Settings.set("app_id", "5fxK8bbx28OP6DLr_rid");
		nokia.Settings.set("app_code", "f4OuqzyGkoTweklooZ5tBQ");

		polyVerticesDoubleList = [];
		first = "first";

		if(typeof polygon !== 'undefined'){
			this.removePoly();
		}
		this.removeAllMarkers();

		// Set the Model
		if(selectOpt == "AgeRange") {
			// Set the Model
			this.oService = "../../../../services/intelligence.xsjs?cmd=getUserDemogMapAnalysis&after=" + afterDate +
			"&before=" + beforeDate + "&serverIP=" + ip;

			this.oServer = "../../../../services/intelligence.xsjs?cmd=getUserDemogServerAnalysis&after=" + afterDate +
			"&before=" + beforeDate + "&serverIP=" + ip;

		}else if(selectOpt == "Gender") {
			// Set the Model
			this.oService = "../../../../services/intelligence.xsjs?cmd=getUserGenderMapAnalysis&after=" + afterDate +
			"&before=" + beforeDate + "&serverIP=" + ip;

			this.oServer = "../../../../services/intelligence.xsjs?cmd=getUserGenderServerAnalysis&after=" + afterDate +
			"&before=" + beforeDate + "&serverIP=" + ip;
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
				if(textStatus==="timeout") {
					sap.ui.commons.MessageBox.alert(that.oBundle.getText("RequireShorterTimeMsg"), null, "Error");
				} else {
					jQuery.sap.log.fatal("The following problem occurred: " + textStatus, jqXHR.responseText + "," + jqXHR.status +"," + jqXHR.statusText);
					sap.ui.commons.MessageBox.alert(that.oBundle.getText("DataErrorMsg"), null, "Error");
				};
			},
			complete: function(){

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
				if(textStatus==="timeout") {
					sap.ui.commons.MessageBox.alert(that.oBundle.getText("RequireShorterTimeMsg"), null, "Error");
				} else {
					jQuery.sap.log.fatal("The following problem occurred: " + textStatus, jqXHR.responseText + "," + jqXHR.status +"," + jqXHR.statusText);
					sap.ui.commons.MessageBox.alert(that.oBundle.getText("DataErrorMsg"), null, "Error");
				};
			},
			complete: function(){

			}
		});

		this.loadMarkers();
        if (that.markersContainer.getBoundingBox() != null) {
            that.map.zoomTo(that.markersContainer.getBoundingBox());
        }
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
		if(aMarkers.length != 0){
			myContainer.objects.removeAll(aMarkers);
			map.objects.removeAll(aMarkers);
			map.objects.remove(polygon);
		}
		polygon = undefined;
		myContainer = null;
		aMarkers = [];
	},

	addMarkerToContainer : function (container, coordinate, color) {
		var marker = new nokia.maps.map.StandardMarker(
				coordinate,
				{brush : color,
					bubbleText : 'Brandenburger Tor'}
		);
		container.objects.add(marker);
	},

    refreshData : function(){
        var that = this;
        var aMarkers = this.toolKit.getAMarkersStr();
        var selectedMarkers = this.toolKit.getSelectedMarkersStr();
        console.log("######################## selected markers and polys");
        console.log(aMarkers);
        console.log(selectedMarkers);
        console.log(JSON.stringify(this.toolKit.getAMarkersArr()));
        var polysArrStr = JSON.stringify(this.toolKit.getAMarkersArr());
        console.log(this.toolKit.getSelectedMarkersStr());
        var markersStr = this.toolKit.getSelectedMarkersStr();

		var afterDate = sap.ui.getCore().byId("date1").getYyyymmdd();
		var beforeDate = sap.ui.getCore().byId("date2").getYyyymmdd();
		console.log(afterDate);
		console.log(beforeDate);

//        var s = "";
//        for (var i = 0; i < polyVerticesDoubleList.length; i++) {
//            s += polyVerticesDoubleList[i] + ", ";
//        }
//        s += polyVerticesDoubleList[0];

        entityHeader = [];

//        this.oHeader = "../../../../services/poly.xsjs?cmd=updateHeaderSourceAnalysis&after=" + this.afterDate +
//        "&before=" + this.beforeDate + "&serverIP=" + this.ip + "&s=" + s;

        this.oHeader = "../../../../services/poly.xsjs?cmd=updateHeaderSourceAnalysisMulti&after=" + afterDate + "&before=" + beforeDate
        + "&serverIP=" + this.ip + "&polysArrStr=" + polysArrStr + "&markersStr=" + markersStr;

        jQuery.ajax({
            url: this.oHeader,
            dataType: 'json',
            async : false,
            timeout: 59000,
            type: "GET",
            success: function(oResponse, textStatus, jqXHR) {
                entityHeader =  oResponse;
            },
            error: function(jqXHR, textStatus, errorThrown){
                if(textStatus==="timeout") {
                    sap.ui.commons.MessageBox.alert(that.oBundle.getText("RequireShorterTimeMsg"), null, "Error");
                } else {
                    jQuery.sap.log.fatal("The following problem occurred: " + textStatus, jqXHR.responseText + "," + jqXHR.status +"," + jqXHR.statusText);
                    sap.ui.commons.MessageBox.alert(that.oBundle.getText("DataErrorMsg"), null, "Error");
                };
            },
            complete: function(){

            }

        });
        initialPage.mAggregations.content[0].kpiModel.setData(entityHeader[0]);
    },

    loadMarkers : function(){
        var self = this;
        
        if (self.openedBubble){
            infoBubbles.closeBubble(self.openedBubble);
        }
        
        this.toolKit.clearAll();

        var TOUCH = nokia.maps.dom.Page.browser.touch,
        CLICK = TOUCH ? "mouseover" : "mouseover";

        var infoBubbleTimer = null;

        var markerMouseoutHandler = function (evt) {
            clearTimeout(infoBubbleTimer);
        };

        var markerMouseoverHandler = function (evt) {
            var marker = evt.target;
            function generateBusyIndicator() {
                var busyIndicator = document.getElementById("busyIndicator");
                if(!busyIndicator){
                    $("body").append("<div id='busyIndicator'></div>");
                    (new sap.m.BusyIndicator()).placeAt("busyIndicator", "only");
                    busyIndicator = document.getElementById("busyIndicator")
                }
                return busyIndicator;
            };
            var busyIndicator = generateBusyIndicator();

            var loadInfoBubbleData = function() {
            	if (self.openedBubble){
                    infoBubbles.closeBubble(self.openedBubble);
                }

                var eId = "eId_popBubble";
                var info = document.getElementById(eId);
                if(!info){
                    $("body").append("<div id='" + eId + "'>" + marker.html + "</div>");
                    info = document.getElementById(eId);
                }else{
                    info.html(marker.html);
                }

                var column = self.oTable.getColumns()[0];
                column.getHeader().setText(selectOpt);

                self.oTable.getModel().setData(marker.datas);
                var popupContainer = new sap.m.ScrollContainer({
                    vertical: true,
                    horizontal: false,
                    content: [self.oTable]
                });
                popupContainer.placeAt(eId, "only");

                self.openedBubble = infoBubbles.openBubble(info, marker.coordinate);
            };

            infoBubbleTimer = setTimeout(function() {
            	self.openedBubble = infoBubbles.openBubble(busyIndicator, marker.coordinate);
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
                    jQuery.proxy(function(entity) {
                        if (city == null) {
                            city = entity.City;
                            spatialCountAux = entity.SpatialCount;
                            geoLat = parseFloat(entity.Latitude);
                            geoLng = parseFloat(entity.Longitude);
                        }

                        var columnValue = "";
                        if (selectOpt == 'Gender') {
                            if (entity.Gender == 'M'){
                                columnValue = "Male";
                            } else if (entity.Gender == 'F'){
                                columnValue = "Female";
                            } else if (entity.Gender == 'U'){
                                columnValue = "Unknown";
                            }
                        }else{
                            columnValue = entity.Age;
                        }

                        if(city == entity.City) {
                            if (bubbleHtml == null) {
                                datas = [];
                                if (selectOpt == 'Gender') {
                                    bubbleHtml = "<div style='padding-top: 0.5rem; padding-bottom: 0.5rem;font-size:0.75rem;margin-bottom:5px; text-align:center;color:#FFFFFF;background-color: rgb(61, 166, 56)'>"+entity.City +", "+entity.Region+" (" + entity.Country + ")</div>";
                                } else {
                                    bubbleHtml = "<div style='padding-top: 0.5rem; padding-bottom: 0.5rem;font-size:0.75rem;margin-bottom:5px; text-align:center;color:#FFFFFF;background-color: rgb(61, 166, 56)'>"+entity.City +", "+entity.Region+" (" + entity.Country + ")</div>";
                                }
                            }

                            var data = {};
                            data.columnValue = columnValue;
                            data.SpatialCount = entity.SpatialCount;
                            datas.push(data);

                            // If entity has only one element or it's the last element.
                            if(this.entityList.businessData.length == 1 || this.entityList.businessData[idx] == this.entityList.businessData.length-1) {
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
                                this.markers.push(marker);

                                datas = [];
                                if (selectOpt == 'Gender') {
                                    bubbleHtml = "<div style='padding-top: 0.5rem; padding-bottom: 0.5rem;font-size:0.75rem;margin-bottom:5px; text-align:center;color:#FFFFFF;background-color: rgb(61, 166, 56)'>"+entity.City +", "+entity.Region+" (" + entity.Country + ")</div>";
                                } else {
                                    bubbleHtml = "<div style='padding-top: 0.5rem; padding-bottom: 0.5rem;font-size:0.75rem;margin-bottom:5px; text-align:center;color:#FFFFFF;background-color: rgb(61, 166, 56)'>"+entity.City +", "+entity.Region+" (" + entity.Country + ")</div>";
                                }

                                var data = {};
                                data.columnValue = columnValue;
                                data.SpatialCount = entity.SpatialCount;
                                datas.push(data);

                                if (spatialCountAux != 0) {
                                    this.markers.push(marker);
                                }

                                city = entity.City;
                                geoLat = parseFloat(entity.Latitude);
                                geoLng = parseFloat(entity.Longitude);
                                spatialCountAux = entity.SpatialCount;
                            }
                        }
                        idx++;
                    }, this));
                this.markersContainer.objects.addAll(this.markers);
            }
        }

        if(this.entityListServer.serverData){
            var serverAux = null;
            var genderAux = null;
            var htmlRead = null;
            var htmlFinal = null;
            var datas = [];
            if(this.entityListServer.serverData.length != 0){
                this.entityListServer.serverData.forEach(
                    jQuery.proxy(function(entity) {
                        var columnValue = "";
                        if (selectOpt == 'Gender') {
                            if (entity.Gender == 'M'){
                                columnValue = "Male";
                            } else if (entity.Gender == 'F'){
                                columnValue = "Female";
                            } else if (entity.Gender == 'U'){
                                columnValue = "Unknown";
                            }
                        }else{
                            columnValue = entity.Age;
                        }


                        if (entity.Server_IP!= serverAux) {
                            serverAux = entity.Server_IP;
                            datas = [];
                            htmlFinal = "<div style='padding-top: 0.5rem; padding-bottom: 0.5rem;font-size:0.75rem;margin-bottom:5px; text-align:center;color:#FFFFFF;background-color: #c00000'>"+entity.Server_Name+ " (" + entity.Server_IP + ")</div>";
                        }

                        var data = {};
                        data.columnValue = columnValue;
                        data.SpatialCount = entity.SpatialCount;
                        datas.push(data);

                        var geoLat = parseFloat(entity.Latitude);
                        var geoLng = parseFloat(entity.Longitude);

                        if (geoLat && geoLng){
                            var marker = new nokia.maps.map.StandardMarker([geoLat, geoLng],
                                { brush: { color: "#c00000" },
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