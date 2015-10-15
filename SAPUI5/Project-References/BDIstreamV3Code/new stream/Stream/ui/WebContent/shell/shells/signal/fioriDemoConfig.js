// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview This file contains a sample Fiori sandbox application
 *               configuration.
 */

(function() { 
	"use strict";
	/* global sap,jQuery */
    
    
	jQuery.sap.declare("sap.ushell.shells.signal.fioriDemoConfig");
	jQuery.sap.require("sap.ushell.ui.tile.TileBase");
	jQuery.sap.require("sap.suite.ui.commons.FeedTile");
	jQuery.sap.require("sap.suite.ui.commons.ChartTile");
	jQuery.sap.require("sap.suite.ui.commons.ComparisonChart");
	jQuery.sap.require("sap.suite.ui.commons.ComparisonData");
	jQuery.sap.require("sap.m.library");
	jQuery.sap.require("sap.ui.core.format.DateFormat");
	
	
	window.SAP_STREAM_TILE_SOURCE_ANALYSIS_COUNTER = 0;
    window.SAP_STREAM_TILE_SOURCE_ANALYSIS_N = 1;
    window.SAP_STREAM_TILE_TIME_SERIES_COUNTER = 0;
    window.SAP_STREAM_TILE_TIME_SERIES_N = 5;
    window.SAP_STREAM_TILE_DEMOGRAPHIC_ANALYSIS_COUNTER = 5;
    window.SAP_STREAM_TILE_DEMOGRAPHIC_ANALYSIS_N = 9;
    window.SAP_STREAM_TILE_USER_ANALYSIS_COUNTER = 0;
    window.SAP_STREAM_TILE_USER_ANALYSIS_N = 2;
    window.SAP_STREAM_TILE_ACTUAL_ANALYSIS_COUNTER = 0;
    window.SAP_STREAM_TILE_ACTUAL_ANALYSIS_N = 5;
    
    var oBundle = jQuery.sap.resources({
		url : "ui/WebContent/i18n/i18n.properties",
		locale : sap.ui.getCore().getConfiguration().getLanguage() 
	});
    
    var newsFeedItems = [];
    /*
     * handlePress
     */
    function handlePress(oEvent) {    	   
           var itemId = oEvent.getParameter("itemId");
           if (itemId) {
                  var feedItem = sap.ui.getCore().getControl(itemId);
                  if(feedItem.getLink() !== "") {
//                 	 location.href = feedItem.getLink();
                 	 window.open(feedItem.getLink());
                  } else {
                 	 console.log("No News link");
                  }
      		}    	  
    };
    /*
     * Get News Feed
     */
    function getNewsFeed() {
 	   jQuery.ajax({
				url: "ui/WebContent/apps/Config/logic/configData.xsjs?cmd=details&param=NEWS_FEED",
				method: "Get",
				dataType: "json",
				async: false,
				success: function(data) {
					var i = 0;
					var linkMap = new Array();
					var sources = new Array();
					for (i in data){
						sources.push(data[i].name);
						linkMap.push(data[i].value);
					}
					var temp = {};
					newsFeedItems.length = 0;
					
  				if (linkMap[0] == "") {
						temp = {
							 type : "sap.suite.ui.commons.FeedItem",
                             title : "No News",
                             image : getImage(0),
                             source : "",
                             link: "www.sap.com"
						};
						newsFeedItems.push(temp);
					} else {
						for (i in linkMap) {
	   						temp = {
	   								type : "sap.suite.ui.commons.FeedItem",
	                                title : sources[i],
	                                image : getImage(i),
	                                source : "",
	                                link : linkMap[i],
	                                publicationDate : new Date()	
	   						};
	   						newsFeedItems.push(temp);
	   					}
					}
				},
				error: function() {
					console.log("Get News_Feed data ERROR!");
				}
			});
    } 
    /*
     * Get News_Feed image url
     */
    function getImage(num) {
 	   var url = "";
 	   num = parseInt(num) + 1;
 	   switch (num % 3) {
 	   	case 0:
 	   		url = "ui/WebContent/shell/shells/signal/img/NewsImage1.png";
 	   		break;
 	   	case 1:
	   			url = "ui/WebContent/shell/shells/signal/img/balloons.jpg";
	   			break;
 	   	case 2:
	   			url = "ui/WebContent/shell/shells/signal/img/grass.jpg";
	   			break;
	   		default:
	   			return false;
 	   }
 	   return url;
    }
    /*
     * Refresh News Feed every 5 mins
     */
    function refreshNews() {
 	   console.log("Track ----------- Timeout - 5 min");
 	   setTimeout(refreshNews,300000);
 	   var oFeedItem = new sap.suite.ui.commons.FeedItem();
 	   sap.ui.getCore().byId("oNewsFeedTile").addItem(oFeedItem);
 	   
 	   var oTempItems = sap.ui.getCore().byId("oNewsFeedTile").getItems();

 	   for(var i = 0; i < oTempItems.length - 1; i++) {
 		   sap.ui.getCore().byId("oNewsFeedTile").removeItem(oTempItems[i]);
 	   }
 	   getNewsFeed();
 	   var j = 0;
 	   for (j in newsFeedItems) {
 		   var oTempFeedItem = new sap.suite.ui.commons.FeedItem({
		   			title : newsFeedItems[j].title,
		   			image : newsFeedItems[j].image,
		   			source : newsFeedItems[j].source,
		   			link : newsFeedItems[j].link,
		   			publicationDate : newsFeedItems[j].publicationDate,
 		   });
 		   sap.ui.getCore().byId("oNewsFeedTile").addItem(oTempFeedItem);
 	   }
 	   oTempItems = sap.ui.getCore().byId("oNewsFeedTile").getItems();
 	   sap.ui.getCore().byId("oNewsFeedTile").removeItem(oTempItems[0]);
    }
    
    getNewsFeed();
    setTimeout(refreshNews,300000);

	sap.ushell.shells.signal.fioriDemoConfig = {
		// Define groups for the dashboard
		groups : [ {
			id : "group_0",
			isPreset : false,
			tiles : [ {
				id : "1",
				title : "My Home",
				size : "1x2",
				tileType : "sap.suite.ui.commons.FeedTile",
				properties : {
             	   id: "oNewsFeedTile",
                    press : handlePress,
                    items : newsFeedItems
                }
			} ]
		}, {
			id : "group_10",
			title : oBundle.getText("homepage.tile.title.Web.Stream.Analysis"),
			isPreset : false,
			tiles : [ 
			{
				id : "tile_11",
				title : "Source Analysis",
				size : "1x1",
				tileType : "sap.ushell.ui.tile.DynamicTile",
				properties : {
					icon: "sap-icon://pie-chart",
					title : oBundle.getText("homepage.tile.title.Source.Analysis"),
					numberValue : "{/Access}",
                    numberFactor: "{/Scale}",
                    info : "{/Browser}",
                    unit : "",
//					info : "Whithin 60 days",
//					unit : "Visits",
					numberDigits : 1,
					numberState : "Positive",
					targetURL : "#Source-Analysis",
//					keywords : [ "series" ],
					refreshKPI: function(oTile){
						var date = new Date();
						var dateFormat = sap.ui.core.format.DateFormat.getInstance({pattern : "yyyyMMdd"});     
						var today = dateFormat.format(date);  
						date.setDate(date.getDate() - 61).toString();
						var dateTwoMounthsAgo = dateFormat.format(date);
//                        var cost = -1;
//                        SAP_SIGNAL_TILE_MAINTENANCE_FORECAST_COUNTER++;
						SAP_STREAM_TILE_SOURCE_ANALYSIS_COUNTER = (SAP_STREAM_TILE_SOURCE_ANALYSIS_COUNTER % SAP_STREAM_TILE_SOURCE_ANALYSIS_N);
                        if(SAP_STREAM_TILE_SOURCE_ANALYSIS_COUNTER == 0){
                        	 jQuery.ajax({
	                             url: "ui/services/intelligence.xsjs?cmd=getTotalTileSourceAnalysis&after="+dateTwoMounthsAgo+"&before="+today,
	                             dataType: "json",
	                             success: function(data){ 
		                              if (oTile.properties.model){
		                              	  
	                                      oTile.properties.model.setData(data[SAP_STREAM_TILE_SOURCE_ANALYSIS_COUNTER]);
	                                      SAP_STREAM_TILE_SOURCE_ANALYSIS_N = data[SAP_STREAM_TILE_SOURCE_ANALYSIS_COUNTER].Access+1;
	                                      SAP_STREAM_TILE_SOURCE_ANALYSIS_COUNTER++;
		                              }
	                             },
	                             error: function(erro){
	                                    console.log("error");
	                             }
	                       });
                        }
                        else{
	                        jQuery.ajax({
	                             url: "ui/services/intelligence.xsjs?cmd=getTileSourceAnalysis&after="+dateTwoMounthsAgo+"&before="+today,
	                             dataType: "json",
	                             success: function(data){ 
		                              if (oTile.properties.model){

	                                      oTile.properties.model.setData(data[SAP_STREAM_TILE_SOURCE_ANALYSIS_COUNTER-1]);
	                                      SAP_STREAM_TILE_SOURCE_ANALYSIS_COUNTER++;
		                              }
	                             },
	                             error: function(erro){
	                                    console.log("error");
	                             }
	                       });
                       }
                 },
                 press : function() {
                	 location.href = location.href + "#Source-Analysis";
                 },
				
				}
			},{
				id : "tile_12",
				title : "Time Series Analysis",
				size : "1x1",
				tileType : "sap.ushell.ui.tile.DynamicTile",
				properties : {
					icon: "sap-icon://bar-chart",
					title : oBundle.getText("homepage.tile.title.Time.Series.Analysis"),
					numberValue : "{/Total}",
                    numberFactor: "{/Scale}",
                    info : "{/Title}",
					numberDigits : 1,
					numberState : "Positive",
//					targetURL : "#Stream-Analysis",
//					keywords : [ "series" ],
					refreshKPI: function(oTile){
						var date = new Date();
						var dateFormat = sap.ui.core.format.DateFormat.getInstance({pattern : "yyyyMMdd"});     
						var today = dateFormat.format(date);  
						date.setDate(date.getDate() - 61).toString();
						var dateTwoMounthsAgo = dateFormat.format(date);
						SAP_STREAM_TILE_TIME_SERIES_COUNTER = (SAP_STREAM_TILE_TIME_SERIES_COUNTER % SAP_STREAM_TILE_TIME_SERIES_N);
                    	jQuery.ajax({
                             url: "ui/services/intelligence.xsjs?cmd=getTileTimeSeries&after="+dateTwoMounthsAgo+"&before="+today,
                             dataType: "json",
                             success: function(data){ 
	                              if (oTile.properties.model){

                                    if(SAP_STREAM_TILE_TIME_SERIES_COUNTER>data.length-1){
                                    	oTile.properties.model.setData(data[0]);
                                    }else{
                                    	oTile.properties.model.setData(data[SAP_STREAM_TILE_TIME_SERIES_COUNTER]);
                                    } 
                                      SAP_STREAM_TILE_TIME_SERIES_COUNTER++;
	                              }
                             },
                             error: function(erro){
                                    console.log("error");
                             }
                        });
                    },
                    press : function() {
                   	 location.href = location.href + "#Stream-Analysis";
                    },

				}
			},{
				id : "tile_13",
				title : "Time Series Analysis",
				size : "1x1",
				tileType : "sap.ushell.ui.tile.DynamicTile",
				properties : {
					icon: "sap-icon://bar-chart",
					title : oBundle.getText("homepage.tile.title.Time.Series.Analysis.Hadoop"),
					numberValue : "{/Total}",
                    numberFactor: "{/Scale}",
                    info : "{/Title}",
					numberDigits : 1,
					numberState : "Positive",
//					targetURL : "#Stream-Analysis",
//					keywords : [ "series" ],
					refreshKPI: function(oTile){
						var date = new Date();
						var dateFormat = sap.ui.core.format.DateFormat.getInstance({pattern : "yyyyMMdd"});     
						var today = dateFormat.format(date);  
						date.setDate(date.getDate() - 61).toString();
						var dateTwoMounthsAgo = dateFormat.format(date);
						SAP_STREAM_TILE_TIME_SERIES_COUNTER = (SAP_STREAM_TILE_TIME_SERIES_COUNTER % SAP_STREAM_TILE_TIME_SERIES_N);
                    	jQuery.ajax({
                             url: "ui/services/intelligence.xsjs?cmd=getTileTimeSeriesHadoop&after="+dateTwoMounthsAgo+"&before="+today,
                             dataType: "json",
                             success: function(data){ 
	                              if (oTile.properties.model){
	                              	if(SAP_STREAM_TILE_TIME_SERIES_COUNTER>data.length-1){
	                              		oTile.properties.model.setData(data[0]);
	                              	}else{
	                              		oTile.properties.model.setData(data[SAP_STREAM_TILE_TIME_SERIES_COUNTER]);
	                              	}  
                                      SAP_STREAM_TILE_TIME_SERIES_COUNTER++;
	                              }
                             },
                             error: function(erro){
                                    console.log("error");
                             }
                        });
                    },
                    press : function() {
                   	 location.href = location.href + "#Stream-Analysis-Hadoop";
                    },

				}
			},
			{
				id : "tile_20",
				title : "Originating Site Analysis",
				size : "1x1",
				tileType : "sap.ushell.ui.tile.DynamicTile",
				properties : {
					icon: "sap-icon://pie-chart",
					title : oBundle.getText("homepage.tile.title.Originating.Site.Analysis"),
					numberValue : "{/Total}",
                    numberFactor: "{/Scale}",
                    info : "{/Title}",
					numberDigits : 1,
					numberState : "Positive",
//					targetURL : "#Originating-Site-Analysis",
					refreshKPI: function(oTile){
						var date = new Date();
						var dateFormat = sap.ui.core.format.DateFormat.getInstance({pattern : "yyyyMMdd"});     
						var today = dateFormat.format(date);  
						date.setDate(date.getDate() - 61).toString();
						var dateTwoMounthsAgo = dateFormat.format(date);
                    	jQuery.ajax({
                             url: "ui/services/intelligence.xsjs?cmd=getTileOriginatingSite&after="+dateTwoMounthsAgo+"&before="+today,
                             dataType: "json",
                             success: function(data){ 
	                              if (oTile.properties.model){
                                      oTile.properties.model.setData(data[0]);
	                              }
                             },
                             error: function(erro){
                                    console.log("error");
                             }
                        });
                    },
                    press : function() {
                      	 location.href = location.href + "#Originating-Site-Analysis";
                    },
				}
			},{
				id : "tile_21",
				title : "Demographic Analysis",
				size : "1x1",
				tileType : "sap.ushell.ui.tile.DynamicTile",
				properties : {
					icon: "sap-icon://pie-chart",
					title : oBundle.getText("homepage.tile.title.Demographic.Analysis"),
					numberValue : "{/Total}",
                    numberFactor: "{/Scale}",
                    info : "{/Title}",
					numberDigits : 1,
					numberState : "Positive",
//					targetURL : "#Demographic-Analysis",
					refreshKPI: function(oTile){
						var date = new Date();
						var dateFormat = sap.ui.core.format.DateFormat.getInstance({pattern : "yyyyMMdd"});     
						var today = dateFormat.format(date);  
						date.setDate(date.getDate() - 61).toString();
						var dateTwoMounthsAgo = dateFormat.format(date);
                    	
						//SAP_STREAM_TILE_DEMOGRAPHIC_ANALYSIS_COUNTER = (SAP_STREAM_TILE_DEMOGRAPHIC_ANALYSIS_COUNTER % SAP_STREAM_TILE_DEMOGRAPHIC_ANALYSIS_N);
						if(SAP_STREAM_TILE_DEMOGRAPHIC_ANALYSIS_COUNTER <=5){
							jQuery.ajax({
	                             url: "ui/services/intelligence.xsjs?cmd=getTileAgeAnalysis&after="+dateTwoMounthsAgo+"&before="+today,
	                             dataType: "json",
	                             success: function(data){ 
		                              if (oTile.properties.model){
	                                      oTile.properties.model.setData(data[SAP_STREAM_TILE_DEMOGRAPHIC_ANALYSIS_COUNTER]);
	                                      
	                                      if(SAP_STREAM_TILE_DEMOGRAPHIC_ANALYSIS_COUNTER == 5){
	                                    	  SAP_STREAM_TILE_DEMOGRAPHIC_ANALYSIS_COUNTER = -1;
	                                      } 
	                                      if(SAP_STREAM_TILE_DEMOGRAPHIC_ANALYSIS_COUNTER == 4){
	                                    	  SAP_STREAM_TILE_DEMOGRAPHIC_ANALYSIS_COUNTER =  SAP_STREAM_TILE_DEMOGRAPHIC_ANALYSIS_COUNTER + 1;
	                                      }; 

	                                      SAP_STREAM_TILE_DEMOGRAPHIC_ANALYSIS_COUNTER++;
		                              }
	                             },
	                             error: function(erro){
	                                    console.log("error");
	                                    
	                             }
	                        });
						}
						if( SAP_STREAM_TILE_DEMOGRAPHIC_ANALYSIS_COUNTER >=6){
							jQuery.ajax({
	                            url: "ui/services/intelligence.xsjs?cmd=getTileGenderAnalysis&after="+dateTwoMounthsAgo+"&before="+today,
	                            dataType: "json",
	                            success: function(data){ 
		                              if (oTile.properties.model){
		                            	 var  sap_stream_tile_gender;

		                            	 sap_stream_tile_gender = SAP_STREAM_TILE_DEMOGRAPHIC_ANALYSIS_COUNTER - 6;

	                                     oTile.properties.model.setData(data[sap_stream_tile_gender]);
	                                     if(SAP_STREAM_TILE_DEMOGRAPHIC_ANALYSIS_COUNTER == 8){
	                                    	 SAP_STREAM_TILE_DEMOGRAPHIC_ANALYSIS_COUNTER = 4;
	                                     }
	                                     SAP_STREAM_TILE_DEMOGRAPHIC_ANALYSIS_COUNTER++;
		                              }
	                            },
	                            error: function(erro){
	                                   console.log("error");
	                            }
	                       });
						}
                    },
                    press : function() {
                     	 location.href = location.href + "#Demographic-Analysis";
                    },
				}
			},{
				id : "tile_22",
				title : "User Navigational Analysis",
				size : "1x1",
				tileType : "sap.ushell.ui.tile.DynamicTile",
				properties : {
					icon: "sap-icon://horizontal-bar-chart",
					title : oBundle.getText("homepage.tile.title.User.Navigational.Analysis"),
					numberValue : "{/Total}",
                    numberFactor: "{/Scale}",
                    info : "{/Title}",
					numberDigits : 1,
					numberState : "Positive",
//					targetURL : "#User-Navigational-Analysis",
					refreshKPI: function(oTile){
						var date = new Date();
						var dateFormat = sap.ui.core.format.DateFormat.getInstance({pattern : "yyyyMMdd"});     
						var today = dateFormat.format(date);  
						date.setDate(date.getDate() - 61).toString();
						var dateTwoMounthsAgo = dateFormat.format(date);
						SAP_STREAM_TILE_USER_ANALYSIS_COUNTER = (SAP_STREAM_TILE_USER_ANALYSIS_COUNTER % SAP_STREAM_TILE_USER_ANALYSIS_N);
						if(SAP_STREAM_TILE_USER_ANALYSIS_COUNTER == 0){
							jQuery.ajax({
	                             url: "ui/services/intelligence.xsjs?cmd=getTileNavUsrAnalysis&after="+dateTwoMounthsAgo+"&before="+today,
	                             dataType: "json",
	                             success: function(data){ 
		                              if (oTile.properties.model){
	                                      oTile.properties.model.setData(data[SAP_STREAM_TILE_USER_ANALYSIS_COUNTER]);
	                                      SAP_STREAM_TILE_USER_ANALYSIS_COUNTER++;
		                              }
	                             },
	                             error: function(erro){
	                                    console.log("error");
	                             }
	                        });
						} else{
							jQuery.ajax({
	                            url: "ui/services/intelligence.xsjs?cmd=getTileNavPagAnalysis&after="+dateTwoMounthsAgo+"&before="+today,
	                            dataType: "json",
	                            success: function(data){ 
		                              if (oTile.properties.model){
		                            	 var sap_stream_page_analysis;
		                            	 sap_stream_page_analysis = SAP_STREAM_TILE_USER_ANALYSIS_COUNTER - 1;
	                                     oTile.properties.model.setData(data[sap_stream_page_analysis]);
	                                     SAP_STREAM_TILE_USER_ANALYSIS_COUNTER++;
		                              }
	                            },
	                            error: function(erro){
	                                   console.log("error");
	                            }
	                       });
						}	
                    },
                    press : function() {
                     	 location.href = location.href + "#User-Navigational-Analysis";
                    },
				}
			},
			{
				id : "tile_23",
				title : "Actuals and Predictive Analysis",
				size : "1x1",
				tileType : "sap.ushell.ui.tile.DynamicTile",
				properties : {
					icon: "sap-icon://line-charts",
					title : oBundle.getText("homepage.tile.title.Actuals.and.Predictive.Analysis"),
					numberValue : "{/Total}",
                    numberFactor: "{/Scale}",
                    info : "{/Title}",
					numberDigits : 1,
					numberState : "Positive",
//					targetURL : "#Actuals-Predictive-Analysis",
					refreshKPI: function(oTile){
						var date = new Date();
						var dateFormat = sap.ui.core.format.DateFormat.getInstance({pattern : "yyyyMMdd"});     
						var today = dateFormat.format(date);  
						date.setDate(date.getDate() - 61).toString();
						var dateTwoMounthsAgo = dateFormat.format(date);
						SAP_STREAM_TILE_ACTUAL_ANALYSIS_COUNTER = (SAP_STREAM_TILE_ACTUAL_ANALYSIS_COUNTER % SAP_STREAM_TILE_ACTUAL_ANALYSIS_N);
						jQuery.ajax({
	                         url: "ui/services/intelligence.xsjs?cmd=getTileTimeSeries&after="+dateTwoMounthsAgo+"&before="+today,
	                         dataType: "json",
	                         success: function(data){ 
	                        	 if (oTile.properties.model){
	                        	 	if (SAP_STREAM_TILE_ACTUAL_ANALYSIS_COUNTER>data.length-1) {
	                        	 		oTile.properties.model.setData(data[0]);
	                        	 	}else{
	                        	 		oTile.properties.model.setData(data[SAP_STREAM_TILE_ACTUAL_ANALYSIS_COUNTER]);
	                        	 	}
	                        		 
	                        		 if(SAP_STREAM_TILE_ACTUAL_ANALYSIS_COUNTER == 1){
	                        			 SAP_STREAM_TILE_ACTUAL_ANALYSIS_COUNTER = SAP_STREAM_TILE_ACTUAL_ANALYSIS_COUNTER + 3;
	                        		 } else{
	                        			 SAP_STREAM_TILE_ACTUAL_ANALYSIS_COUNTER++;
	                        		 }
	                        		 
	                        	 }
	                         },
	                         error: function(erro){
	                             console.log("error");
	                         }
	                     }); 
					},
					press : function() {
                    	 location.href = location.href + "#Actuals-Predictive-Analysis";
                    },
				}
			},
			{
				id : "tile_24",
				title : "Actuals and Predictive Analysis",
				size : "1x1",
				tileType : "sap.ushell.ui.tile.DynamicTile",
				properties : {
					icon: "sap-icon://line-charts",
					title : oBundle.getText("homepage.tile.title.Actuals.and.Predictive.Analysis.Hadoop"),
					numberValue : "{/Total}",
                    numberFactor: "{/Scale}",
                    info : "{/Title}",
					numberDigits : 1,
					numberState : "Positive",
//					targetURL : "#Actuals-Predictive-Analysis",
					refreshKPI: function(oTile){
						var date = new Date();
						var dateFormat = sap.ui.core.format.DateFormat.getInstance({pattern : "yyyyMMdd"});     
						var today = dateFormat.format(date);  
						date.setDate(date.getDate() - 61).toString();
						var dateTwoMounthsAgo = dateFormat.format(date);
						SAP_STREAM_TILE_ACTUAL_ANALYSIS_COUNTER = (SAP_STREAM_TILE_ACTUAL_ANALYSIS_COUNTER % SAP_STREAM_TILE_ACTUAL_ANALYSIS_N);

						jQuery.ajax({
	                         url: "ui/services/intelligence.xsjs?cmd=getTileTimeSeriesHadoop&after="+dateTwoMounthsAgo+"&before="+today,
	                         dataType: "json",
	                         success: function(data){ 
	                        	 if (oTile.properties.model){

	                        		 if (SAP_STREAM_TILE_ACTUAL_ANALYSIS_COUNTER>data.length-1) {
	                        		 	oTile.properties.model.setData(data[0]);
	                        		 }else{
	                        		 	oTile.properties.model.setData(data[SAP_STREAM_TILE_ACTUAL_ANALYSIS_COUNTER]);
	                        		 }

	                        		 if(SAP_STREAM_TILE_ACTUAL_ANALYSIS_COUNTER == 1){
	                        			 SAP_STREAM_TILE_ACTUAL_ANALYSIS_COUNTER = SAP_STREAM_TILE_ACTUAL_ANALYSIS_COUNTER + 3;
	                        		 } else{
	                        		 	
	                        			 SAP_STREAM_TILE_ACTUAL_ANALYSIS_COUNTER++;
	                        			 
	                        		 }

	                        		// if( SAP_STREAM_TILE_ACTUAL_ANALYSIS_COUNTER > 4 ) {

	                        		// 	SAP_STREAM_TILE_ACTUAL_ANALYSIS_COUNTER = 0;

	                        		// } else {

	                        		// 	oTile.properties.model.setData(data[SAP_STREAM_TILE_ACTUAL_ANALYSIS_COUNTER]);
	                        		// 	SAP_STREAM_TILE_ACTUAL_ANALYSIS_COUNTER++;

	                        		// }
	                        		 
	                        	 }
	                        		
	                         },
	                         error: function(erro){
	                             console.log("error");
	                         }
	                     }); 
					},
					press : function() {
                    	 location.href = location.href + "#Actuals-Predictive-Analysis-Hadoop";
                    },
				}
			},
			{
				id : "tile_25",
				title : "Alert Report",
				size : "1x1",
				tileType : "sap.ushell.ui.tile.DynamicTile",
				properties : {
					icon: "sap-icon://pie-chart",
					title : oBundle.getText("homepage.tile.title.Alert.Report"),
					numberValue : "{/Total}",
                    numberFactor: "{/Scale}",
                    info : "{/Title}",
					numberDigits : 1,
					numberState : "Positive",
//					targetURL : "#Alert-Report",
					refreshKPI: function(oTile){
						var date = new Date();
						var dateFormat = sap.ui.core.format.DateFormat.getInstance({pattern : "yyyyMMdd"});     
						var today = dateFormat.format(date);  
						date.setDate(date.getDate() - 61).toString();
						var dateTwoMounthsAgo = dateFormat.format(date);
                    	jQuery.ajax({
                             url: "ui/services/intelligence.xsjs?cmd=getTileAlertReport&after="+dateTwoMounthsAgo+"&before="+today,
                             dataType: "json",
                             success: function(data){ 
	                              if (oTile.properties.model){
                                      oTile.properties.model.setData(data[0]);
	                              }
                             },
                             error: function(erro){
                                    console.log("error");
                             }
                        });
					},
					press : function() {
						location.href = location.href + "#Alert-Report";
                    },
				}
			}
			]
		}
//		, {
//			id : "group_20",
//			title : " Web Analysis for Business",
//			isPreset : false,
//			tiles : [ 
//			{
//				id : "tile_20",
//				title : "Search Engine Analysis",
//				size : "1x1",
//				tileType : "sap.ushell.ui.tile.DynamicTile",
//				properties : {
//					title : "Search Engine Analysis",
//					numberValue : 135,
//					info : "Today",
//					unit : "Visits",
//					numberDigits : 0,
//					numberState : "Positive",
//					targetURL : "#Search-Analysis",
//					keywords : [ "series" ]
//				}
//			},{
//				id : "tile_21",
//				title : "Demographic Analysis",
//				size : "1x1",
//				tileType : "sap.ushell.ui.tile.DynamicTile",
//				properties : {
//					title : "Demographic Analysis",
//					numberValue : 135,
//					info : "Today",
//					unit : "Visits",
//					numberDigits : 0,
//					numberState : "Positive",
//					targetURL : "#Demographic-Analysis",
//					keywords : [ "series" ]
//				}
//			},{
//				id : "tile_22",
//				title : "User Navigational Analysis",
//				size : "1x1",
//				tileType : "sap.ushell.ui.tile.DynamicTile",
//				properties : {
//					title : "User Navigational Analysis",
//					numberValue : 135,
//					info : "Today",
//					unit : "Visits",
//					numberDigits : 0,
//					numberState : "Positive",
//					targetURL : "#User-Navigational-Analysis",
//					keywords : [ "series" ]
//				}
//			}]
//		}
		
		],
		catalogs : [],
		applications : {
			"" : { // default application - empty URL hash
				additionalInformation : "SAPUI5.Component=sap.ushell.signal.FioriSandboxDefaultApp",
				applicationType : "URL",
				url : "/sap/ui5/1/test-resources/ushell/test-resources/sap/ushell/demoapps/FioriSandboxDefaultApp"
			},
			"Geo-Spatial-Analysis" : {
				additionalinformation : "SAPUI5.Component=sap.ui.demo.myFiori",
				applicationType : "URL",
				url : "/sap/rds-bdi/stream/ui/WebContent/view/GeoSpatialAnalysis/view/GeoSpatialAnalysis.html",
				description : "Component "
			},
			"Source-Analysis" : {
				additionalinformation : "SAPUI5.Component=sap.ui.demo.myFiori",
				applicationType : "URL",
				url : "/sap/rds-bdi/stream/ui/WebContent/view/SourceAnalysis/index.html",
				description : "Component "
			},
			"Stream-Analysis" : {
//				additionalInformation : "SAPUI5.Component=sap.ui.demo.myFiori",
//				applicationType : "URL",
//				url : "ui/WebContent/view/TimeSeries"
//				url : "/sap/rds-bdi/stream/ui/WebContent/view/TimeSeries/index.html",
          
				additionalinformation : "SAPUI5.Component=sap.ui.demo.myFiori",
				applicationType : "URL",
				url : "/sap/rds-bdi/stream/ui/WebContent/view/TimeSeries/index.html",
				description : "Component "
			},
			"Stream-Analysis-Hadoop" : {
				applicationType : "URL",
				url : "/sap/rds-bdi/stream/ui/WebContent/view/TimeSeriesHadoop/index.html",
				description : "Component "
			},
			"Originating-Site-Analysis" : {
				additionalinformation : "SAPUI5.Component=sap.ui.demo.myFiori",
				applicationType : "URL",
				url : "/sap/rds-bdi/stream/ui/WebContent/view/SearchEngineAnalysis/index.html",
				description : "Component "
			},
			"Demographic-Analysis" : {
				additionalinformation : "SAPUI5.Component=sap.ui.demo.myFiori",
				applicationType : "URL",
				url : "/sap/rds-bdi/stream/ui/WebContent/view/DemographicAnalysis/index.html",
				description : "Component "
			},
			"User-Navigational-Analysis" : {
				additionalinformation : "SAPUI5.Component=sap.ui.demo.myFiori",
				applicationType : "URL",
				url : "/sap/rds-bdi/stream/ui/WebContent/view/UserNavigationalAnalysis/index.html",
				description : "Component "
			},
			"Actuals-Predictive-Analysis" : {
				additionalinformation : "SAPUI5.Component=sap.ui.demo.myFiori",
				applicationType : "URL",
				url : "/sap/rds-bdi/stream/ui/WebContent/view/ActualsPredictiveAnalysis/index.html",
				description : "Component "
			},
			"Actuals-Predictive-Analysis-Hadoop" : {
				additionalinformation : "SAPUI5.Component=sap.ui.demo.myFiori",
				applicationType : "URL",
				url : "/sap/rds-bdi/stream/ui/WebContent/view/ActualsPredictiveAnalysisHadoop/index.html",
				description : "Component "
			},
			"Alert-Report" : {
				additionalinformation : "SAPUI5.Component=sap.ui.demo.myFiori",
				applicationType : "URL",
				url : "/sap/rds-bdi/stream/ui/WebContent/view/AlertReport/index.html",
				description : "Component "
			},
			"Log-Configuration" : {
	           	 additionalInformation : "SAPUI5.Component=sap.rds.bdi.stream.logConfig",
	           	 applicationType : "URL",
	           	 url : "ui/WebContent/apps/LogConfig"
            },
			"Maintenance-Forecast" : {
				applicationType : "URL",
				url : "equipment/maintenance-forecast.html"
			},
			"Cumulated-Signals" : {
				applicationType : "URL",
				url : "equipment/cumulated-signals.html"
			},
			"Equipment-Signals" : {
				applicationType : "URL",
				url : "equipment/equipment-signals.html"
			},
			"Maintenance-Cost" : {
				applicationType : "URL",
				url : "equipment/maintenance-cost.html"
			},
			"Action-WEBGUI" : {
				additionalInformation : "",
				applicationType : "NWBC",
				url : "http://walla.co.il",
				description : "web gui testing"
			},
			"Action-todefaultapp" : { // default application as explicit
				// navigation target
				additionalInformation : "SAPUI5.Component=sap.ushell.signal.FioriSandboxDefaultApp",
				applicationType : "URL",
				url : "/sap/ui5/1/test-resources/ushell/test-resources/sap/ushell/demoapps/FioriSandboxDefaultApp",
				description : "Default App : show statically registered apps (fioriSandboxConfig.js) "
			},

			"UI2Fiori2SampleApps-defaultapp" : { // default application as
				// explicit navigation
				// target
				additionalInformation : "SAPUI5.Component=sap.ushell.signal.FioriSandboxDefaultApp",
				applicationType : "URL",
				url : "/sap/ui5/1/test-resources/ushell/test-resources/sap/ushell/demoapps/FioriSandboxDefaultApp",
				description : "Default App : show statically registered apps (fioriSandboxConfig.js) "
			},

			"UI2Fiori2SampleApps-AppScflTest" : { // sample scaffolding
				// application
				additionalInformation : "SAPUI5.Component=AppScflTest",
				applicationType : "URL",
				url : "/sap/ui5/1/test-resources/ushell/test-resources/sap/ushell/demoapps/AppScflTest"
			},

			"UI2Fiori2SampleApps-wikipedia" : {
				applicationType : "URL",
				url : "http://www.wikipedia.org",
				description : "Wikipedia"
			},

			"UI2Fiori2SampleApps-Gerrit" : {
				applicationType : "NWBC",
				url : "https://git.wdf.sap.corp:8080/#/",
				description : "Gerrit"
			},

			"UI2Fiori2SampleApps-MyLeaveRequest" : {
				applicationType : "URL",
				url : "http://d5htdc00.wdf.sap.corp:57180/sap/bc/ui5_ui5/sap/ui5_hcm_lr_cr/index.html?sap-client=800",
				description : "My Leave Request"
			},

			"UI2Fiori2SampleApps-config" : {
				additionalInformation : "SAPUI5.Component=sap.ushell.demoapps.FioriSandboxConfigApp",
				applicationType : "URL",
				url : "/sap/ui5/1/test-resources/ushell/test-resources/sap/ushell/demoapps/FioriSandboxConfigApp",
				description : "Config App : Configure Test-local1 and Test-local2 apps"
			},

			"Action-toappnavsample" : {
				/*
				 * Sample app from
				 * git\unified.shell\ushell\src\main\webapp\staging\demoapps\AppNavSample
				 * 
				 * Demonstrates resource-based navigation inside a shell runtime
				 * 
				 * Run e.g. as :
				 * http://localhost:8080/ushell/test-resources/sap/ushell/shells/sandbox/fioriSandbox.html#AppNavSample-display&/Detail
				 * http://localhost:8080/ushell/test-resources/sap/ushell/shells/sandbox/fioriSandbox.html#AppNavSample-display&/View1
				 * 
				 */

				additionalInformation : "SAPUI5.Component=sap.ushell.signal.AppNavSample",
				applicationType : "URL",
				url : "/sap/ui5/1/test-resources/ushell/test-resources/sap/ushell/demoapps/AppNavSample?fixed-param1=value1&array-param1=value1&array-param1=value2",
				description : "AppNavSample : Demos startup parameter passing ( albeit late bound in model!) and late instantiation of navigator in view (low level manual routing only) "
			},

			"UI2Fiori2SampleApps-appnavsample" : {
				/*
				 * Sample app from
				 * git\unified.shell\ushell\src\main\webapp\staging\demoapps\AppNavSample
				 * 
				 * Demonstrates resource-based navigation inside a shell runtime
				 * 
				 * Run e.g. as :
				 * http://localhost:8080/ushell/test-resources/sap/ushell/shells/sandbox/fioriSandbox.html#AppNavSample-display&/Detail
				 * http://localhost:8080/ushell/test-resources/sap/ushell/shells/sandbox/fioriSandbox.html#AppNavSample-display&/View1
				 * 
				 */

				additionalInformation : "SAPUI5.Component=sap.ushell.signal.AppNavSample",
				applicationType : "URL",
				url : "/sap/ui5/1/test-resources/ushell/test-resources/sap/ushell/demoapps/AppNavSample?fixed-param1=value1&array-param1=value1&array-param1=value2",
				description : "AppNavSample : Demos startup parameter passing ( albeit late bound in model!) and late instantiation of navigator in view (low level manual routing only) "
			},

			"Action-toappnavsample2" : {
				/*
				 * Sample app from
				 * git\unified.shell\ushell\src\main\webapp\staging\demoapps\AppNavSample
				 * 
				 * Demonstrates resource-based navigation inside a shell runtime
				 * 
				 * Run e.g. as :
				 * http://localhost:8080/ushell/staging/shells/sandbox/fioriSandbox.html#AppNavSample2-display&/Detail
				 * http://localhost:8080/ushell/staging/shells/sandbox/fioriSandbox.html#AppNavSample2-display&/View1
				 * 
				 */
				additionalInformation : "SAPUI5.Component=sap.ushell.signal.AppNavSample2",
				applicationType : "URL",
				url : "/sap/ui5/1/test-resources/ushell/test-resources/sap/ushell/demoapps/AppNavSample2",
				description : "AppNavSample2 Inner App Navigation: Do it your self (Early(component) navigator instantiation, simple route registration example, no model binding, explicit view changes within the app)"
			},

			"Action-toappperssample" : {
				/*
				 * Sample app from
				 * git\unified.shell\ushell-lib\src\test\js\sap\ushell\demoapps\AppPersSample2
				 */
				additionalInformation : "SAPUI5.Component=sap.ushell.signal.AppPersSample",
				applicationType : "URL",
				url : "/sap/ui5/1/test-resources/ushell/test-resources/sap/ushell/demoapps/AppPersSample",
				description : "AppPersSample 1: NOT YET READY - Sample app for generic usage of personalization service"
			},

			"Action-toappperssample2" : {
				/*
				 * Sample app from
				 * git\unified.shell\ushell-lib\src\test\js\sap\ushell\demoapps\AppPersSample22
				 */
				additionalInformation : "SAPUI5.Component=sap.ushell.signal.AppPersSample2",
				applicationType : "URL",
				url : "/sap/ui5/1/test-resources/ushell/test-resources/sap/ushell/demoapps/AppPersSample2",
				description : "AppPersSample 2: INTERMEDIATE VERSION - Sample app for personalization of tables (intermediate version until table personalization is directly supported by UI5 Mobile)"
			},

			"UI2Fiori2SampleApps-appnavsample2" : {
				/*
				 * Sample app from
				 * git\unified.shell\ushell\src\main\webapp\staging\demoapps\AppNavSample
				 * 
				 * Demonstrates resource-based navigation inside a shell runtime
				 * 
				 * Run e.g. as :
				 * http://localhost:8080/ushell/staging/shells/sandbox/fioriSandbox.html#AppNavSample2-display&/Detail
				 * http://localhost:8080/ushell/staging/shells/sandbox/fioriSandbox.html#AppNavSample2-display&/View1
				 * 
				 */
				additionalInformation : "SAPUI5.Component=sap.ushell.signal.AppNavSample2",
				applicationType : "URL",
				url : "/sap/ui5/1/test-resources/ushell/test-resources/sap/ushell/demoapps/AppNavSample2",
				description : "AppNavSample2 Inner App Navigation: Do it your self (Early(component) navigator instantiation, simple route registration example, no model binding, explicit view changes within the app)"
			},

			"UI2Fiori2SampleApps-appperssample" : {
				/*
				 * Sample app from
				 * git\unified.shell\ushell-lib\src\test\js\sap\ushell\demoapps\AppPersSample2
				 */
				additionalInformation : "SAPUI5.Component=sap.ushell.signal.AppPersSample",
				applicationType : "URL",
				url : "/sap/ui5/1/test-resources/ushell/test-resources/sap/ushell/demoapps/AppPersSample",
				description : "AppPersSample 1: NOT YET READY - Sample app for generic usage of personalization service"
			},

			"UI2Fiori2SampleApps-appperssample2" : {
				/*
				 * Sample app from
				 * git\unified.shell\ushell-lib\src\test\js\sap\ushell\demoapps\AppPersSample22
				 */
				additionalInformation : "SAPUI5.Component=sap.ushell.signal.AppPersSample2",
				applicationType : "URL",
				url : "/sap/ui5/1/test-resources/ushell/test-resources/sap/ushell/demoapps/AppPersSample2",
				description : "AppPersSample 2: INTERMEDIATE VERSION - Sample app for personalization of tables (intermediate version until table personalization is directly supported by UI5 Mobile)"
			},

			"UI2Fiori2SampleApps-approvepurchaseorders" : {
				/*
				 * Sample app from
				 * git\unified.shell\ushell\src\main\webapp\staging\demoapps\ApprovePurchaseOrders
				 * 
				 */
				additionalInformation : "SAPUI5.Component=ApprovePurchaseOrders",
				applicationType : "URL",
				url : "/sap/ui5/1/test-resources/ushell/test-resources/sap/ushell/demoapps/ApprovePurchaseOrders",
				description : "ApprovePurchaseOrders:SAP UI5 Best practice App (Inner App Navigation): explicit mapping of routes to model bindings and views, automatic view changes by the Nav framework"
			},

			"UI2Fiori2SampleApps-navigationwithroutes" : {
				/*
				 * Sample app from
				 * git\unified.shell\ushell\src\main\webapp\staging\demoapps\ApprovePurchaseOrders
				 * 
				 */
				additionalInformation : "SAPUI5.Component=NavigationWithRoutes",
				applicationType : "URL",
				url : "/sap/ui5/1/test-resources/ushell/test-resources/sap/ushell/demoapps/NavigationWithRoutes",
				description : "NavgationWithRoutes:Shows how to navigate using routes without the context property"
			},

			"UI2Fiori2SampleApps-NavigationWithoutRoutes" : {
				/*
				 * Sample app from
				 * git\unified.shell\ushell\src\main\webapp\staging\demoapps\ApprovePurchaseOrders
				 * 
				 */
				additionalInformation : "SAPUI5.Component=NavigationWithoutRoutes",
				applicationType : "URL",
				url : "/sap/ui5/1/test-resources/ushell/test-resources/sap/ushell/demoapps/NavigationWithoutRoutes",
				description : "NavigationWithoutRoutes:Shows how to navigate without using routes(that means you cannot bookmark the resulting links)"
			},

			"UI2Fiori2SampleApps-NavigationWithoutMasterDetailPattern" : {
				/*
				 * Sample app from
				 * git\unified.shell\ushell\src\main\webapp\staging\demoapps\NavigationWithoutMasterDetailPattern
				 * 
				 */
				additionalInformation : "SAPUI5.Component=NavigationWithoutMasterDetailPattern",
				applicationType : "URL",
				url : "/sap/ui5/1/test-resources/ushell/test-resources/sap/ushell/demoapps/NavigationWithoutMasterDetailPattern",
				description : "Shows how to navigate without using routes without the master-detail pattern"
			},

			"UI2Fiori2SampleApps-webdynpro" : {
				applicationType : "NWBC",
				url : "https://ldciu31.wdf.sap.corp:44336/sap/bc/ui2/nwbc/~canvas;window=embedded;decoration=FLP/wda/S_EPM_FPM_PD/?sap-wd-htmlrendermode=STANDARDS&sap-theme=sap_corbu&sap-wd-configId=s_epm_fpm_pd&sap-client=111",
				description : "Web Dynpro for ABAP Application Integration"
			},

			"UI2Fiori2SampleApps-webgui" : {
				applicationType : "NWBC",
				url : "https://ldciu31.wdf.sap.corp:44336/sap/bc/ui2/nwbc/~canvas;window=embedded;decoration=FLP/transaction/su01",
				description : "WebGUI Application Integration"
			}

		/*
		 * Put your own application here "MySO-Action" : {
		 * additionalInformation: "SAPUI5.Component=<component-name>",
		 * applicationType: "URL", url: "/<path-to-component-root>" // folder
		 * where Component.js is stored },
		 */

		/**
		 * UI5 Mobile reference app, found in git
		 * ssh://d0NNNNN@git.wdf.sap.corp:29418/sapui5/sapui5.runtime.git
		 * project uilib-sample standalone start url
		 * http://localhost:8080/uilib-sample/blueprint/ApprovePurchaseOrders/index.html#/Purchase%20Order/2/id-1376393210277-6/
		 */
		/*
		 * "UI5Sample-ApprovePurchaseOrdersOLD" : { additionalInformation:
		 * "SAPUI5=ApprovePurchaseOrders/view.App.view.js", applicationType:
		 * "URL", url: "/uilib-sample/blueprint/" },
		 */
		},
		// data for the personalization service
		personalizationData : {
			"sap.ushell.personalization#sap.ushell.services.UserRecents" : {
				"RecentApps" : [
						{
							"iCount" : 1,
							"iTimestamp" : 1378479383874,
							"oItem" : {
								"semanticObject" : "UI2Fiori2SampleApps",
								"action" : "approvepurchaseorders",
								"sTargetHash" : "#UI2Fiori2SampleApps-approvepurchaseorders",
								"title" : "Approve Purchase",
								"url" : "#UI2Fiori2SampleApps-approvepurchaseorders"
							}
						},
						{
							"iCount" : 2,
							"iTimestamp" : 1378479383895,
							"oItem" : {
								"semanticObject" : "Action",
								"action" : "toappnavsample",
								"sTargetHash" : "#Action-toappnavsample",
								"title" : "Approve Nav Sample 3",
								"url" : "#Action-toappnavsample"
							}
						},
						{
							"iCount" : 2,
							"iTimestamp" : 1378479383896,
							"oItem" : {
								"semanticObject" : "Action",
								"action" : "toappnavsample2",
								"sTargetHash" : "#Action-toappnavsample2",
								"title" : "Approve Nav Sample 2",
								"url" : "#Action-toappnavsample2"
							}
						},
						{
							"iCount" : 1,
							"iTimestamp" : 1378479383899,
							"oItem" : {
								"semanticObject" : "UI2Fiori2SampleApps",
								"action" : "MyLeaveRequest",
								"sTargetHash" : "#UI2Fiori2SampleApps-MyLeaveRequest",
								"title" : "My Leave Request",
								"url" : "#UI2Fiori2SampleApps-MyLeaveRequest"
							}
						},
						{
							"iCount" : 2,
							"iTimestamp" : 1378479383878,
							"oItem" : {
								"semanticObject" : "Action",
								"action" : "toappnavsample",
								"sTargetHash" : "#Action-toappnavsample",
								"title" : "Approve Nav Sample 8",
								"url" : "#Action-toappnavsample"
							}
						},
						{
							"iCount" : 2,
							"iTimestamp" : 1378479383897,
							"oItem" : {
								"semanticObject" : "Action",
								"action" : "toappnavsample2",
								"sTargetHash" : "#Action-toappnavsample2",
								"title" : "Approve Nav Sample 1",
								"url" : "#Action-toappnavsample2"
							}
						},
						{
							"iCount" : 1,
							"iTimestamp" : 1378479383898,
							"oItem" : {
								"semanticObject" : "UI2Fiori2SampleApps",
								"action" : "approvepurchaseorders",
								"sTargetHash" : "#UI2Fiori2SampleApps-approvepurchaseorders",
								"title" : "Approve first Purchase",
								"url" : "#UI2Fiori2SampleApps-approvepurchaseorders"
							}
						},
						{
							"iCount" : 2,
							"iTimestamp" : 1378479383863,
							"oItem" : {
								"semanticObject" : "Action",
								"action" : "toappnavsample",
								"sTargetHash" : "#Action-toappnavsample",
								"title" : "Approve Nav Sample 13",
								"url" : "#Action-toappnavsample"
							}
						},
						{
							"iCount" : 2,
							"iTimestamp" : 1378479383862,
							"oItem" : {
								"semanticObject" : "Action",
								"action" : "toappnavsample2",
								"sTargetHash" : "#Action-toappnavsample2",
								"title" : "Approve Nav Sample 12",
								"url" : "#Action-toappnavsample2"
							}
						},
						{
							"iCount" : 1,
							"iTimestamp" : 1378479383879,
							"oItem" : {
								"semanticObject" : "UI2Fiori2SampleApps",
								"action" : "approvepurchaseorders",
								"sTargetHash" : "#UI2Fiori2SampleApps-approvepurchaseorders",
								"title" : "Approve Purchase",
								"url" : "#UI2Fiori2SampleApps-approvepurchaseorders"
							}
						}, {
							"iCount" : 2,
							"iTimestamp" : 1378479383894,
							"oItem" : {
								"semanticObject" : "Action",
								"action" : "toappnavsample",
								"sTargetHash" : "#Action-toappnavsample",
								"title" : "Approve Nav Sample 4",
								"url" : "#UI2Fiori2SampleApps-appnavsample"
							}
						}, {
							"iCount" : 2,
							"iTimestamp" : 1378479383893,
							"oItem" : {
								"semanticObject" : "Action",
								"action" : "toappnavsample2",
								"sTargetHash" : "#Action-toappnavsample2",
								"title" : "Approve Nav Sample 5",
								"url" : "#UI2Fiori2SampleApps-appnavsample2"
							}
						} ],
				"RecentSearches" : [ {
					"iCount" : 1,
					"iTimestamp" : 1378478828152,
					"oItem" : {
						"sTerm" : "Test"
					}
				}, {
					"iCount" : 1,
					"iTimestamp" : 1378478828151,
					"oItem" : {
						"sTerm" : "Recent search 3"
					}
				}, {
					"iCount" : 1,
					"iTimestamp" : 1378478828149,
					"oItem" : {
						"sTerm" : "Recent search 4",
						"oObjectName" : {
							"label" : "Business Partners",
							"value" : "Business Partners"
						}
					}
				}, {
					"iCount" : 1,
					"iTimestamp" : 1378478828153,
					"oItem" : {
						"sTerm" : "Sally",
						"oObjectName" : {
							"label" : "Employees",
							"value" : "Employees"
						}
					}
				}, {
					"iCount" : 1,
					"iTimestamp" : 1378478828148,
					"oItem" : {
						"sTerm" : "Recent search 5"
					}
				}, {
					"iCount" : 1,
					"iTimestamp" : 1378478828147,
					"oItem" : {
						"sTerm" : "Recent search 6"
					}
				}, {
					"iCount" : 1,
					"iTimestamp" : 1378478828137,
					"oItem" : {
						"sTerm" : "Recent search 16"
					}
				}, {
					"iCount" : 1,
					"iTimestamp" : 1378478828136,
					"oItem" : {
						"sTerm" : "Recent search 17"
					}
				}, {
					"iCount" : 1,
					"iTimestamp" : 1378478828133,
					"oItem" : {
						"sTerm" : "Recent search 20"
					}
				}, {
					"iCount" : 1,
					"iTimestamp" : 1378478828132,
					"oItem" : {
						"sTerm" : "Recent search 21"
					}
				}, {
					"iCount" : 1,
					"iTimestamp" : 1378478828131,
					"oItem" : {
						"sTerm" : "Recent search 22"
					}
				}, {
					"iCount" : 1,
					"iTimestamp" : 1378478828146,
					"oItem" : {
						"sTerm" : "Recent search 7"
					}
				}, {
					"iCount" : 1,
					"iTimestamp" : 1378478828145,
					"oItem" : {
						"sTerm" : "Recent search 8"
					}
				}, {
					"iCount" : 1,
					"iTimestamp" : 1378478828144,
					"oItem" : {
						"sTerm" : "Recent search 9"
					}
				}, {
					"iCount" : 1,
					"iTimestamp" : 1378478828143,
					"oItem" : {
						"sTerm" : "Recent search 10"
					}
				}, {
					"iCount" : 1,
					"iTimestamp" : 1378478828135,
					"oItem" : {
						"sTerm" : "Recent search 18"
					}
				}, {
					"iCount" : 1,
					"iTimestamp" : 1378478828134,
					"oItem" : {
						"sTerm" : "Recent search 19"
					}
				}, {
					"iCount" : 1,
					"iTimestamp" : 1378478828142,
					"oItem" : {
						"sTerm" : "Recent search 11"
					}
				}, {
					"iCount" : 1,
					"iTimestamp" : 1378478828141,
					"oItem" : {
						"sTerm" : "Recent search 12"
					}
				}, {
					"iCount" : 1,
					"iTimestamp" : 1378478828140,
					"oItem" : {
						"sTerm" : "Recent search 13"
					}
				}, {
					"iCount" : 1,
					"iTimestamp" : 1378478828139,
					"oItem" : {
						"sTerm" : "Recent search 14"
					}
				}, {
					"iCount" : 1,
					"iTimestamp" : 1378478828138,
					"oItem" : {
						"sTerm" : "Recent search 15"
					}
				} ]
			}
		}
	};
		/*setTimeout(function() {
			var date = new Date();
			var dateFormat = sap.ui.core.format.DateFormat.getInstance({pattern : "yyyyMMdd" });     
			var today = dateFormat.format(date);  
			date.setDate(date.getDate() - 60).toString();
			var dateTwoMounthsAgo = dateFormat.format(date);
		/*	for(var i = 0; i< sap.ushell.shells.signal.fioriDemoConfig.groups[1].tiles.length; i++)
			{
				var value;
				var oService;
				var scaleTmp;
				var totalTmp;	
				
				switch (sap.ushell.shells.signal.fioriDemoConfig.groups[1].tiles[i].properties.title) {
	//			    case "Source Analysis":
	//					oService = "ui/services/intelligence.xsjs?cmd=getTotalSourceAnalysis&after="+dateTwoMounthsAgo+"&before="+today;
	//		    		break;
//				    case "Time Series Analysis":
//			    		oService = "ui/services/intelligence.xsjs?cmd=getTotalStream&after="+dateTwoMounthsAgo+"&before="+today;
//			    		break;
//				    case "Originating Site Analysis":
//				    	oService = "ui/services/intelligence.xsjs?cmd=getTotalSearchEngineAnalysis&after="+dateTwoMounthsAgo+"&before="+today;
//			    		break;
//				    case "Demographic Analysis":
//				    	oService = "ui/services/intelligence.xsjs?cmd=getTotalUserDemographicAnalysis&after="+dateTwoMounthsAgo+"&before="+today;
//			    		break;
//				    case "User Navigational Analysis":
//				    	oService = "ui/services/intelligence.xsjs?cmd=getTotalUserNavigationalAnalysis&after="+dateTwoMounthsAgo+"&before="+today;
//			    		break;
				    case "Actuals and Predictive Analysis":
				    	oService = "ui/services/intelligence.xsjs?cmd=getTotalActualPredictiveAnalysis&after="+dateTwoMounthsAgo+"&before="+today;
				    	break;
//				    case "Alert Report":
//				    	oService = "ui/services/intelligence.xsjs?cmd=getTotalAlertReport&after="+dateTwoMounthsAgo+"&before="+today;
//				    	break;
			    	default: console.log("No service available for that tile");
				}
					       
				jQuery.ajax({
					url: oService,
					dataType: 'json',
					async : false,
					timeout: 59000,
					type: "GET",
					success: function(data) {
						
						if (data.businessData.length != 0)
						{
							value = data.businessData[0].Access;
						}
						if (value > 999999999)
						{	
							scaleTmp = "B",
							totalTmp = parseFloat(Math.round(value) / 1000000000).toFixed(3);
						}
						else if (value > 999999)
						{
							scaleTmp = "M",
							totalTmp = parseFloat(Math.round(value) / 1000000).toFixed(3);
						}
						else if (value > 9999)
						{
							scaleTmp = "K",
							totalTmp = parseFloat(Math.round(value) / 1000).toFixed(3);
						}
						else
						{
							scaleTmp = "",
							totalTmp = value;
						}
						
						
						
						if (value < 9999 || value == null){
							sap.ushell.shells.signal.fioriDemoConfig.groups[1].tiles[i].properties.info = " Visits, Within 60 days";
							sap.ushell.shells.signal.fioriDemoConfig.groups[1].tiles[i].properties.numberDigits = 0;
						}	
						else
						{
							sap.ushell.shells.signal.fioriDemoConfig.groups[1].tiles[i].properties.info = " Visits, Within 60 days";
							sap.ushell.shells.signal.fioriDemoConfig.groups[1].tiles[i].properties.numberDigits = 0;
							sap.ushell.shells.signal.fioriDemoConfig.groups[1].tiles[i].properties.numberFactor = scaleTmp;
						}
						
						sap.ushell.shells.signal.fioriDemoConfig.groups[1].tiles[i].properties.numberValue = totalTmp;
						sap.ushell.shells.signal.fioriDemoConfig.groups[1].tiles[i].properties.numberFactor = scaleTmp;
					},
					error: function(jqXHR, textStatus, errorThrown){
						console.log("Error");
					}
				
				});
			
			}			
		}, 50);*/
		
}());



