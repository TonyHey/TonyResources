sap.ui.controller("sap.rds.bdi.stream.Homepage.view.topLocations.map", {

    onInit : function() {
        this.markersContainer = {};
        this.defaultDimen = "Month";
    },

    onBeforeRendering: function(){

    },

    onAfterRendering : function() {
        var that = this;
        var platform = new H.service.Platform({
            app_id: '5fxK8bbx28OP6DLr_rid',
            app_code: 'f4OuqzyGkoTweklooZ5tBQ',
            useCIT: true,
            useHTTPS: true
        });
        var defaultLayers = platform.createDefaultLayers();

        this.map = new H.Map(document.getElementById('mapContainer'),
            defaultLayers.normal.map,{
            center: {lat:40, lng:-90},
            zoom: 3
        });

        var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(that.map));
        this.ui = H.ui.UI.createDefault(that.map, defaultLayers);
        this.map.addEventListener('tap', function(evt) {
            console.log($(".H_scalebar_svg").text());
        });

        var zoom = this.ui.getControl('zoom');
        var scalebar = this.ui.getControl('scalebar');
        zoom.addEventListener('tap', function(evt) {
            console.log(scalebar);
        });

        //remove the drag and drop funciton to Here map
        $(".mapContainer").bind("mousedown", function(event) {
            event.stopPropagation();
        });

        this.refreshMap(this.defaultDimen);
    },

    refreshMap: function(dimen) {
        var result = this.getMapData(dimen, this);
    },

    getMapData: function(dimen, that) {
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.dateConvert");
        jQuery.sap.require("sap.rds.bdi.stream.Homepage.util.constant");
        
        var queryURL = "";
        var result = {};
        var defaultServerIP = sap.rds.bdi.stream.Homepage.util.constant.DEFAULT_SERVER_IP;
        var util = sap.rds.bdi.stream.Homepage.util.dateConvert;
        var tempFilter = {
                action: "",
                top: "",
                after: "",
                before: "",
                serverIP: ""
        };
        var serverSelectIP = "";

        /* get ServerIP */
        if (sap.ui.getCore().byId("serverSelector") != undefined) {
            serverSelectIP = sap.ui.getCore().byId("serverSelector").getSelectedKey();
        }
        if (serverSelectIP.length === 0) {
            tempFilter.serverIP = defaultServerIP;
        } else {
            tempFilter.serverIP = serverSelectIP;
        }

        tempFilter.action = "getUVCountCity";
        tempFilter.before = util.dateToString(new Date());
        tempFilter.after = util.afterDateToString(dimen);
        tempFilter.top = 20;

        switch(dimen) {
            case "Month":
            {
                tempFilter.after = util.firstDayOfCurrentMonth();
                break;
            }
            case "Week":
            {
                tempFilter.after = util.firstDayOfCurrentWeek();
                break;
            }
            case "Day":
            {
                tempFilter.after = tempFilter.before;
                break;
            }
            default:
                console.log("Error! No dimensions of " + dimen + " [location: Homepage/view/topLocations/map.ctl.js]");
                return false;
        }

        queryURL = "ui/xsjs/api.xsjs/intelligence/" + tempFilter.action
                                                        + "?top=" + tempFilter.top
                                                        + "&after=" + tempFilter.after
                                                        + "&before=" + tempFilter.before
                                                        + "&serverIP=" + tempFilter.serverIP;

        jQuery.ajax({
            url: queryURL,
            dataType: 'json',
            async: true,
            type: "GET",
            success: function(data) {
                result = {
                        status: true,
                        data: data
                };

                if(result.status) {
                    that.markersContainer = result.data.businessData;
                    that.startClustering(that.map, that.markersContainer, that.ui);
                } else {
                    console.log("No data ------- getMapData() ------ [location: Homepage/view/topLocations/map.ctl.js]");
                }
            },
            error: function(data){
                result = {
                        status: false,
                        data: data
                };
            }
        });

        return result;
    },

    startClustering: function(map, data, ui) {
        var dataPoints = data.map(function (item) {
            var cityName = item["City"];
            var valueOfUV = item["Unique Visits"];

          return new H.clustering.DataPoint(
                                              item.Latitude,
                                              item.Longitude,
                                              parseInt(valueOfUV),
                                              '<div class="homepage-topLocations-bubble-city">' + cityName + '</div>' + '<div class="homepage-topLocations-bubble-value">' + valueOfUV + '</div>'
                 );
        });

        var clusteredDataProvider = new H.clustering.Provider(dataPoints, {
          clusteringOptions: {
            eps: 0,
            minWeight: 1
          }
        });
        
        clusteredDataProvider.addEventListener('tap', function (evt) {
            var bubbleInfo = "";
            console.log(evt.target);
            console.log(evt.target.getData());
            if(evt.target.getData().zb) {
                bubbleInfo = evt.target.getData().zb.gb[0].data;
            } else {
                bubbleInfo = evt.target.getData().dj.data;
            }
            var bubble =  new H.ui.InfoBubble(evt.target.getPosition(), {
              content: bubbleInfo
            }).addClass("homepage-topLocations-bubble");
            ui.addBubble(bubble);
          }, false);

        if(this.clusteringLayer) {
            map.removeLayer(this.clusteringLayer);
        }
        this.clusteringLayer = new H.map.layer.ObjectLayer(clusteredDataProvider);

        map.addLayer(this.clusteringLayer);
      }
})