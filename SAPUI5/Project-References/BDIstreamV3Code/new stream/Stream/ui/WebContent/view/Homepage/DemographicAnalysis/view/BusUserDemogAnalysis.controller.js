jQuery.sap.require("sap.ca.ui.charts.ChartToolBar");
jQuery.sap.require("sap.ca.ui.charts.ChartPopover");
jQuery.sap.require("sap.ca.ui.charts.ClusterList");
jQuery.sap.require("sap.m.MessageToast");
jQuery.sap.require("sap.ui.commons.DatePicker");
jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
jQuery.sap.require("jquery.sap.storage");

var oBundle = jQuery.sap.resources({
	url : "../../../WebContent/i18n/i18n.properties",
	locale : sap.ui.getCore().getConfiguration().getLanguage()
});

sap.ui.controller("sap.ui.demo.myFiori.view.BusUserDemogAnalysis", {
	handleNavBack : function(evt) {
		window.history.back();
	},

	 oData3:{},
	 kpi:{},
	 flsc : null,

	    // Define a dimension object
	    	dimensionAge : new sap.viz.ui5.data.DimensionDefinition({
	                   	axis : 1,
	                   	name : oBundle.getText('Age.Range'),
	                   	value : "{AgeRange}",
	            }),

	        dimensionsGender : new sap.viz.ui5.data.DimensionDefinition({
	                   axis : 1,
	                   name : oBundle.getText('Gender'),
	                   value : "{Gender}",
	            }),

	    // Define some measure object
	    measures1:new sap.viz.ui5.data.MeasureDefinition('busUDTB_Access', {
	        name: oBundle.getText('Percent'),
	        value: '{Percent}'
	    }),


	    // Set a JSON Model
	    _oModel:new sap.ui.model.json.JSONModel(),
		afterDate : null,
		beforeDate : null,
		ip : null,
		selectOpt : "AgeRange",

		options : {
					filters : [ {
			               key : 'AgeRange',
			               text : oBundle.getText('View.by.Age')
			        }, {
			               key : 'Gender',
			               text : oBundle.getText('View.by.Gender')
			        } ],
					afterDate : new Date().getTime() - 86400000,
					beforeDate :  new Date().getTime(),
					ip : ""
				  },


	    // Set a Flattened data set object
	    _oDataset:new sap.viz.ui5.data.FlattenedDataset(),

	    /**
	     * Event attached to the button 'Generate New Data'
	     * @return {[type]} [description]
	     */
	    pressSmpleBarButton:function () {
	        // Add the population measure
	        this._oDataset.addMeasure(this.measures3);

	        // Set the Model
	        this._oModel.setData(this.createData());
	    },

	    /**
	     * Event attached when the legend checkbox status is changed
	     * @param {event} oEvent [description]
	     */
	    pressLegendButton:function (oEvent) {
	        this.chart.setShowLegend(oEvent.getParameters().selected);
	    },

	    onPersonalizationPressed : function(oEvent) {
      },

	    /**
	     * Event attached to the button 'OData'
	     * @param {event} oEvent [description]
	     */
	    pressSampleBarODataButton:function (oEvent) {

	        var url = "/uilib-sample/proxy/http/fiodevdsp.wdf.sap.corp:8080/com.sap.odata.dynamic.service.provider/odata/CHARTDATA/";
	        //var url = "/com.sap.odata.dynamic.service.provider/odata/WBSCOST4/";
	        var oModel = new sap.ui.model.odata.ODataModel(url, true);

	        // Test that data can be read from DSP
	        oModel.read('ChartDataSet', null, null, true, jQuery.proxy(function (oData, oResponse) {

	            // Remove the population measure
	            this._oDataset.removeMeasure('busUDTB_Population');

	            var myData = {
	                businessData:oData.results
	            };
	            // Set the Model
	            this._oModel.setData(myData);

	            // Reset the chart size
	            this.chart.reset(true);

	        }, this), function () {
	            jQuery.sap.log.error("Read failed");
	        });

	    },

	    /**
	     * Event attached when a data point is selected
	     * @param {event} oEvent An event object
	     */
	    onSelectDataPoint:function (oEvent) {
	        var oParam = oEvent.getParameters();

	        // sap.ui.base.Object.extend.constructor
	        var oControl = oParam.control;

	        // a filled sap.ca.ui.charts.ClusterList object
	        var oList = oParam.list;

	    },
	    //functions related to the Calendar Dialog
		setAfterDate : function (oController, oDate) {

			var beforeDate = new Date(oController.getView().getModel().getProperty("/beforeDate"));

			if(oDate > beforeDate) {
				return oBundle.getText("Pick.an.earlier.date.than") + sap.ui.demo.myFiori.util.Formatter.date(beforeDate) +".";
			}

			oController.getView().getModel().setProperty("/afterDate", oDate.getTime());
			oController.updateDateFilter(oController);
			return true;
		},

		setBeforeDate : function (oController, oDate) {

			var afterDate = new Date(oController.getView().getModel().getProperty("/afterDate"));

			if(oDate.getTime() < afterDate) {
				return oBundle.getText("Pick.a.later.date.than") + sap.ui.demo.myFiori.util.Formatter.date(afterDate) +".";
			}

			oController.getView().getModel().setProperty("/beforeDate", oDate.getTime());
			oController.updateDateFilter(oController);
			return true;
		},


		onAfterRendering : function () {
			var oController = this;

		},

		updateDateFilter : function (oController) {

			var month;
			var day;

			if(new Date(oController.getView().getModel().getProperty("/beforeDate")).getMonth() < 9){
				month = "0" + (new Date(oController.getView().getModel().getProperty("/beforeDate")).getMonth() + 1).toString();
			} else{
				month = (new Date(oController.getView().getModel().getProperty("/beforeDate")).getMonth() + 1).toString();
			}

			if(new Date(oController.getView().getModel().getProperty("/beforeDate")).getDate() < 10){
				day = "0" + (new Date(oController.getView().getModel().getProperty("/beforeDate")).getDate()).toString();
			} else{
				day = (new Date(oController.getView().getModel().getProperty("/beforeDate")).getDate()).toString();
			}

			oController.beforeDate = (new Date(oController.getView().getModel().getProperty("/beforeDate")).getFullYear()).toString() +
							month + day;

			if(new Date(oController.getView().getModel().getProperty("/afterDate")).getMonth() < 9){
				month = "0" + (new Date(oController.getView().getModel().getProperty("/afterDate")).getMonth() + 1).toString();
			} else{
				month = (new Date(oController.getView().getModel().getProperty("/afterDate")).getMonth() + 1).toString();
			}

			if(new Date(oController.getView().getModel().getProperty("/afterDate")).getDate() < 10){
				day = "0" + (new Date(oController.getView().getModel().getProperty("/afterDate")).getDate()).toString();
			} else{
				day = (new Date(oController.getView().getModel().getProperty("/afterDate")).getDate()).toString();
			}

			oController.afterDate = (new Date(oController.getView().getModel().getProperty("/afterDate")).getFullYear()).toString() +
							month + day;

			// Set the Model
			this.oService = "../../../services/intelligence.xsjs?cmd=getUserDemographicAnalysis&after=" + this.afterDate +
								"&before=" + this.beforeDate + "&serverIP=" + this.ip;

	        //retrieves data for Pie Chart Model

			oController.getData(this.oService, this);

			setTimeout(function() {
	            oController._oModel.setData(
	            	 oController.oData3
	            );
	          }, 1000);

			//default filters to be applied to the view
			var filters = [];
			var filter1 = new sap.ui.model.Filter("Date", "GE", new Date(oController.getView().getModel().getProperty("/afterDate")));
			filters.push(filter1);
			var aux = new Date(oController.getView().getModel().getProperty("/beforeDate"));
			var filter2 = new sap.ui.model.Filter("Date", "LE", new Date(new Date (aux).setMonth(aux.getMonth()+1)));
//			var filter2 = new sap.ui.model.Filter("Date", "LE", new Date(oController.getView().getModel().getProperty("/beforeDate")).setMonth(month, date));
			filters.push(filter2);
			var orFilters = new sap.ui.model.Filter(filters, true);
			this._oDataset.bindData("/businessData",null,null,orFilters);

			oController.createContent(oController);
		},

		/**
		 * Calls the generic function that retrieves the data from the server with the parameters for query
		 *
		 */
		getData: function(sServiceUrl, oController) {
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
						sap.ui.commons.MessageBox.alert(oBundle.getText("RequireShorterTimeMsg"), null, "Error");
					} else {
						jQuery.sap.log.fatal("The following problem occurred: " + textStatus, jqXHR.responseText + "," + jqXHR.status +"," + jqXHR.statusText);
//						sap.ui.commons.MessageBox.alert(oBundle.getText("DataErrorMsg"), null, "Error");
					}
				},
				complete: function(){

				}
			});
		},

		getDatakpi: function(sServiceUrl, oController) {
			jQuery.ajax({
				url: sServiceUrl,
				dataType: 'json',
				async : false,
				timeout: 59000,
				type: "GET",
				success: function(oResponse, textStatus, jqXHR) {
					oController.kpi =  oResponse;
				},
				error: function(jqXHR, textStatus, errorThrown){
					if(textStatus==="timeout") {
						sap.ui.commons.MessageBox.alert(oBundle.getText("RequireShorterTimeMsg"), null, "Error");
					} else {
						jQuery.sap.log.fatal("The following problem occurred: " + textStatus, jqXHR.responseText + "," + jqXHR.status +"," + jqXHR.statusText);
//						sap.ui.commons.MessageBox.alert(oBundle.getText("DataErrorMsg"), null, "Error");
					};
				},
				complete: function(){

				}
			});
		},

		//AQUI
	    createContent : function(oController) {

	    	this.kpiModel = new sap.ui.model.json.JSONModel();

	    	// Set the Model
			this.oService = "../../../services/intelligence.xsjs?cmd=getCountUserDemographicAnalysis&after=" + this.afterDate +
								"&before=" + this.beforeDate + "&serverIP=" + this.ip;

			oController.getDatakpi(this.oService, this);

			setTimeout(function() {
	            oController.kpiModel.setData(
	            	 oController.kpi
	            );
	          }, 1000);
			var scaleTmp;
			var totalTmp;
			if (oController.kpi.businessData[0] != null) {
				var jsontext = oController.kpi.businessData[0];
				var total = jsontext.Total;
				scaleTmp = this.setScale(total);
				totalTmp = this.setValue(total);
			}
			else{
				scaleTmp = "";
				totalTmp = 0;
			}

//			this._oDataset.bindData("/businessData");

	        this.totalCell = this.byId("BusUserDemogAnalysisCellitemn");
	        this.totalCell.setContent(new sap.suite.ui.commons.NumericContent({
	            size : "M",
	            scale : scaleTmp,
	            value : totalTmp
	        }));
			this.totalCell.getContent().setTooltip(" ");
	        //this.totalCell.getContent().setTooltip(totalTmp.toString());
	        var view = this.byId("BusUserDemogAnalysisRoot");
	        view.setModel(this.kpiModel);
	        return view;
	    },

	    saveSettings : function(ip,kpi,afterDate,beforeDate)
	    {
	    	var obj = {};

	    	obj["server"] = ip;
	    	obj["kpi"] = kpi;
            obj["afterDate"] = afterDate;
            obj["beforeDate"] = beforeDate;

            jQuery.sap.storage.put("iddemog",obj);
	    },

	     setScale : function(total) {
            var scaleTemp;
            if (total > 999999999)
                           scaleTemp = "B";
            else if (total > 999999)
                           scaleTemp = "M";
            else if (total > 9999)
                           scaleTemp = "K";
            else
                           scaleTemp = "";
            return scaleTemp;
},

		 setValue : function(total) {
            var totalTemp;
            if (total > 999999999)
                           totalTemp = parseFloat(Math.round(total) / 1000000000).toFixed(3);
            else if (total > 999999)
                           totalTemp = parseFloat(Math.round(total) / 1000000).toFixed(3);
            else if (total > 9999)
                           totalTemp = parseFloat(Math.round(total) / 1000).toFixed(3);
            else
                           totalTemp = total;
            return totalTemp;
},

	    /**
	     * Called when a controller is instantiated and its View controls (if available) are already created.
	     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	     */
	    onInit:function () {

	        var page = this.getView().byId("page");
	        //util.UiFactory.fillPageHeader(page, this.getView(), util.Title.VERTICAL_BAR_CHART_TOOLBAR);

	        var oController = this;

	        var setDemog = jQuery.sap.storage.get("iddemog");

	        if (setDemog != null)
	        {
	        	this.selectOpt = setDemog.kpi;
	        }

	        // Set the Model
	        this.oService = "../../../services/intelligence.xsjs?cmd=getAllServerIP";

	        //retrieves data for Server IP Dropdown box

	       oController.getData(this.oService, this);

	       //Model for Server IP
	       var oModel = new sap.ui.model.json.JSONModel();
	       oModel.setData(oController.oData3);

	     //Insert Server IP Dropbown box
	       var oServerIP = new sap.m.Select("ServerIP", {
               items : {
                   path : '/businessData',
                   template : new sap.ui.core.Item({
                         key : "{ServerIP}",
                         text : "{ServerName}"
                   })
            }});

	       oServerIP.attachChange(
	                 jQuery.proxy(
	                            function(oEvent){

	                            	this.ip = oEvent.getParameters().selectedItem.mProperties.key;

	                                   var oController = this;
	                                   // Set the Header
	                             this.createContent(oController);
	                             if(this.selectOpt == "AgeRange") {
	                                 // Set the Model
	                            	 this.oService = "../../../services/intelligence.xsjs?cmd=getUserDemographicAnalysis&after=" + this.afterDate +
	                                   "&before=" + this.beforeDate+ "&serverIP=" + this.ip;

	                                    this._oDataset.removeAllDimensions();
	                                    this._oDataset.addDimension(this.dimensionAge);

	                             }else if(this.selectOpt == "Gender") {
	                                 // Set the Model
	                            	 this.oService = "../../../services/intelligence.xsjs?cmd=getUserGenderAnalysis&after=" + this.afterDate +
	                                   "&before=" + this.beforeDate+ "&serverIP=" + this.ip;

	                                    this._oDataset.removeAllDimensions();
	                                    this._oDataset.addDimension(this.dimensionsGender);
	                             }

	                             //retrieves data for Pie Chart Model

	                                   oController.getData(this.oService, this);

		                       	        var temp = 0;
		                    	        for(var i = 0 ; i < this.oData3.businessData.length; i++)
		                    	        {
		                    	        	if (this.oData3.businessData[i].Access != 0)
		                    	        	{
		                    	        		temp = 1;
		                    	        	}
		                    	        }
		                    	        if (temp == 0)
		                    	        {
		                    	        	this.oData3 = {};
		                    	        }

	                                   this._oModel.setData(oController.oData3);
//
	                                    this.chart = this.byId("BusUserDemogAnalysisChart");
//
//	                                  // Set the Data set
	                                    this._oDataset.addMeasure(this.measures1);
	                                    this._oDataset.bindData({
	                                        path:"/businessData"
	                                    });
//	                                  // Set the Dataset
	                                    this.chart.setDataset(this._oDataset);
//	                                  // Set the Model
	                                    this.chart.setModel(this._oModel);

	                                    this.saveSettings(this.ip, this.selectOpt, this.afterDate, this.beforeDate);

	              }, this));

	       oServerIP.setModel(oModel);
		    if (setDemog == null)
		    	{
		    this.ip = oServerIP.getItems()[0].mProperties.key;
		    	}
		    else {
		    oServerIP.setSelectedKey(setDemog.server);
		    this.ip = setDemog.server;
		    }

	        this.chart = this.byId("BusUserDemogAnalysisChart");

			//load dates into the optionsModel
			var currentDate =  new Date();
			var currentMonth = currentDate.getMonth();
			var afterDate = new Date();
			afterDate.setMonth(currentMonth - 1);
			if(afterDate.getMonth() != currentMonth-1 && (afterDate.getMonth() != 11 || (afterDate.getMonth() == 11 && afterDate.getDate() == 1)))
				afterDate.setDate(0);
			//these dates are based of the current date and as such have the hours set further
			//this means that the afterDate will be after the current hour currentDate = 16h17 -> afterDate = 16h17, 1 Month earlier
			afterDate.setHours(0,0,0,0);
			currentDate.setHours(23,59,59,999);
			this.options.afterDate = afterDate.getTime();
			this.options.beforeDate = currentDate.getTime();

			//set the options model that will store dates dimensions and filters
			this._optionsModel = new sap.ui.model.json.JSONModel(this.options);
			this.getView().setModel(this._optionsModel);

			//Customize the toolbar
			var toolBar = this.byId("BusUserDemogAnalysisToolbar");

			//due to issues in using the select boxes for firstDimension and secondDimension available in the chat toolbar
            // a custom select will be placed instead
            var oSelect = new sap.m.Select("UserAnalysisSelect", {
                   items : {
                          path : '/filters',
                          template : new sap.ui.core.Item({
                                key : "{key}",
                                text : "{text}"
                          })
                   },
                   change : jQuery.proxy(
                           function(oEvent){
                                  var getEvent = oEvent.getSource()._oController;
                                  var oItem = oEvent.getParameters().selectedItem;
                                  var key = oItem.getKey();

                                  oEvent.getSource()._oController._oDataset.removeAllDimensions();
                                  if(key == "AgeRange") {
                                     this.selectOpt = "AgeRange";
                                      // Set the Model
                                     this.oService = "../../../services/intelligence.xsjs?cmd=getUserDemographicAnalysis&after=" + this.afterDate +
	                                   "&before=" + this.beforeDate+ "&serverIP=" + this.ip;

                                     this._oDataset.removeAllDimensions();
                                     this._oDataset.addDimension(this.dimensionAge);

                                  }else if(key == "Gender") {
                                         this.selectOpt = "Gender";
                                      // Set the Model
                                         this.oService = "../../../services/intelligence.xsjs?cmd=getUserGenderAnalysis&after=" + this.afterDate +
  	                                   "&before=" + this.beforeDate+ "&serverIP=" + this.ip;

                                         this._oDataset.removeAllDimensions();
                                         this._oDataset.addDimension(this.dimensionsGender);
                                  }

                                  var oController = this;
                                  this.saveSettings(this.ip, this.selectOpt, this.afterDate, this.beforeDate);

                                  oController.getData(this.oService, this);

	                      	        var temp = 0;
	                      	      for(var i = 0 ; i < this.oData3.businessData.length; i++)
	                    	        {
	                    	        	if (this.oData3.businessData[i].Access != 0)
	                    	        	{
	                    	        		temp = 1;
	                    	        	}
	                    	        }
	                    	        if (temp == 0)
	                    	        {
	                    	        	this.oData3 = {};
	                    	        }

          						this._oModel.setData(oController.oData3);
//
          						 this.chart = this.byId("BusUserDemogAnalysisChart");
//
//          				        // Set the Data set
          				        this._oDataset.addMeasure(this.measures1);
          				        this._oDataset.bindData({
          				            path:"/businessData"
          				        });
//          				        // Set the Dataset
          				        this.chart.setDataset(this._oDataset);
//          				        // Set the Model
          				        this.chart.setModel(this._oModel);

                           },this)
            });
            if(setDemog != null)
            	{
            oSelect.setSelectedKey(setDemog.kpi);
            	}
            oSelect._oController = this;
            //oSelect.setModel(this._optionsModel);
            toolBar.getToolBar().insertContentLeft(oSelect);

			//Get Date in format yyyymmdd
			Date.prototype.yyyymmdd = function(int) {

		        var yyyy = this.getFullYear().toString();
		        var mm = (this.getMonth()+int).toString(); // getMonth() is zero-based
		        var dd  = this.getDate().toString();

		        return yyyy + (mm[1]?mm:"0"+mm[0]) + (dd[1]?dd:"0"+dd[0]);
		   };

		   if (setDemog == null)
		   {
			   var date = new Date();
			   var dateFormat = sap.ui.core.format.DateFormat.getInstance({pattern : "yyyyMMdd" });
			   var today = dateFormat.format(date);
			   date.setDate(date.getDate() - 61).toString();
			   afDt = dateFormat.format(date);
			   //afDt = new Date().yyyymmdd(-1);
		   }
		   else {
			   afDt = setDemog.afterDate;
		   }

		   if (setDemog == null)
		   {
			   bfDt = new Date().yyyymmdd(1);
		   }
		   else {
			   bfDt = setDemog.beforeDate;
		   }

			var oAfterDateButton = new sap.ui.commons.DatePicker("date1").addStyleClass("toolbar datepicker");
			oAfterDateButton.setYyyymmdd(afDt);
			oAfterDateButton.setLocale("en-US"); // Try with "de" or "fr" instead!
			oAfterDateButton.attachChange(
					jQuery.proxy(
					function(oEvent){
						if(oEvent.getParameter("invalidValue")){
							oEvent.oSource.setValueState(sap.ui.core.ValueState.Error);
						}else{
							this.afterDate = oEvent.getParameter("newYyyymmdd");
							this.beforeDate = sap.ui.getCore().byId("date2").getYyyymmdd();
							oEvent.oSource.setValueState(sap.ui.core.ValueState.None);
						}
						var oController = this;
						// Set the Header
				        this.createContent(oController);
						// Set the Model
						if(this.selectOpt == "AgeRange") {
                            // Set the Model
							this.oService = "../../../services/intelligence.xsjs?cmd=getUserDemographicAnalysis&after=" + this.afterDate + "&before=" +
							this.beforeDate + "&serverIP=" + this.ip;

                               this._oDataset.removeAllDimensions();
                               this._oDataset.addDimension(this.dimensionAge);

                        }else if(this.selectOpt == "Gender") {
                            // Set the Model
                        	this.oService = "../../../services/intelligence.xsjs?cmd=getUserGenderAnalysis&after=" + this.afterDate + "&before=" +
    						this.beforeDate + "&serverIP=" + this.ip;

                               this._oDataset.removeAllDimensions();
                               this._oDataset.addDimension(this.dimensionsGender);
                        }

				        //retrieves data for Pie Chart Model

						oController.getData(this.oService, this);
						this.saveSettings(this.ip, this.selectOpt, this.afterDate, this.beforeDate);
				        var temp = 0;
				        for(var i = 0 ; i < this.oData3.businessData.length; i++)
            	        {
            	        	if (this.oData3.businessData[i].Access != 0)
            	        	{
            	        		temp = 1;
            	        	}
            	        }
				        if (temp == 0)
				        {
				        	this.oData3 = {};
				        }

						this._oModel.setData(oController.oData3);
//
						 this.chart = this.byId("BusUserDemogAnalysisChart");
//
//				        // Set the Data set
				        this._oDataset.addMeasure(this.measures1);
				        this._oDataset.bindData({
				            path:"/businessData"
				        });
//				        // Set the Dataset
				        this.chart.setDataset(this._oDataset);
//				        // Set the Model
				        this.chart.setModel(this._oModel);
//
					}, this));

			var oBeforeDateButton = new sap.ui.commons.DatePicker("date2").addStyleClass("toolbar datepicker");
			oBeforeDateButton.setYyyymmdd(bfDt);
			oBeforeDateButton.setLocale("en-US"); // Try with "de" or "fr" instead!
			oBeforeDateButton.attachChange(
					jQuery.proxy(
					function(oEvent){
						if(oEvent.getParameter("invalidValue")){
							oEvent.oSource.setValueState(sap.ui.core.ValueState.Error);
						}else{
							this.beforeDate = oEvent.getParameter("newYyyymmdd");
							this.afterDate = sap.ui.getCore().byId("date1").getYyyymmdd();
							oEvent.oSource.setValueState(sap.ui.core.ValueState.None);
						}

						var oController = this;
						// Set the Header
				        this.createContent(oController);
						// Set the Model
						if(this.selectOpt == "AgeRange") {
                            // Set the Model
							this.oService = "../../../services/intelligence.xsjs?cmd=getUserDemographicAnalysis&after=" + this.afterDate + "&before=" +
							this.beforeDate + "&serverIP=" + this.ip;

                               this._oDataset.removeAllDimensions();
                               this._oDataset.addDimension(this.dimensionAge);

                        }else if(this.selectOpt == "Gender") {
                            // Set the Model
                        	this.oService = "../../../services/intelligence.xsjs?cmd=getUserGenderAnalysis&after=" + this.afterDate + "&before=" +
    						this.beforeDate + "&serverIP=" + this.ip;

                               this._oDataset.removeAllDimensions();
                               this._oDataset.addDimension(this.dimensionsGender);
                        }

				        //retrieves data for Pie Chart Model

						oController.getData(this.oService, this);
						this.saveSettings(this.ip, this.selectOpt, this.afterDate, this.beforeDate);
				        var temp = 0;
				        for(var i = 0 ; i < this.oData3.businessData.length; i++)
            	        {
            	        	if (this.oData3.businessData[i].Access != 0)
            	        	{
            	        		temp = 1;
            	        	}
            	        }
				        if (temp == 0)
				        {
				        	this.oData3 = {};
				        }

						this._oModel.setData(oController.oData3);
//
				        this.chart = this.byId("BusUserDemogAnalysisChart");
//
//				        // Set the Data set
				        this._oDataset.addMeasure(this.measures1);
				        this._oDataset.bindData({
				            path:"/businessData"
				        });
//				        // Set the Dataset
				        this.chart.setDataset(this._oDataset);
//				        // Set the Model
				        this.chart.setModel(this._oModel);
//
					}, this));

			if(setDemog != null){
				this.beforeDate = setDemog.beforeDate;
				this.afterDate = setDemog.afterDate;
			}
			else {
				this.beforeDate = bfDt;
				this.afterDate = afDt;
			}

			toolBar.getToolBar().insertContentMiddle(new sap.m.Label({text: oBundle.getText("From")}).addStyleClass("toolbar label"), 0);
			toolBar.getToolBar().insertContentMiddle(oAfterDateButton, 1);
			toolBar.getToolBar().insertContentMiddle(new sap.m.Label({text: oBundle.getText("To")}).addStyleClass("toolbar label"), 2);
			toolBar.getToolBar().insertContentMiddle(oBeforeDateButton, 3);

			toolBar.getToolBar().insertContentLeft(oServerIP);
            toolBar.getToolBar().insertContentLeft(new sap.m.Label({text: oBundle.getText("ServerIP") , design:"Bold"}));

            var oFullScreen = new sap.m.Button();
            oFullScreen.attachPress(onFullScreen,this);

            oFullScreen.setIcon("sap-icon://full-screen");
            oFullScreen.setTooltip(oBundle.getText("ExpandView"));

			toolBar.getToolBar().insertContentRight(oFullScreen);

			flsc = 'on';

    		var chartNormalHeight = this.chart.getHeight();
    		var chartFullScreenHeight = "800px";

			function onFullScreen(oEvent) {
				if (flsc == 'on'){
				oFullScreen.setTooltip(oBundle.getText("NormalView"));
				toolBar.setFullScreen(true);
				this.chart.setHeight(chartFullScreenHeight);
				flsc = 'off';}
				else if (flsc == 'off'){
					oFullScreen.setTooltip(oBundle.getText("ExpandView"));
					toolBar.setFullScreen(false);
					this.chart.setHeight(chartNormalHeight);
					flsc = 'on';
				}
			};

			var oButton1 = new sap.m.Button("b11",{
				tooltip : oBundle.getText("MapChartTooltip"),
				press : onPress
			});

			oButton1.setIcon("sap-icon://choropleth-chart");
			toolBar.getToolBar().insertContentRight(oButton1);

			function onPress(oEvent) {
				sap.m.URLHelper.redirect("/sap/rds-bdi/stream/ui/WebContent/view/DemographicAnalysis/view/GeoSpatialAnalysis.html");
			};

			var oPieChart = new sap.m.Button();

			oPieChart.setIcon("sap-icon://pie-chart");
			oPieChart.setTooltip(oBundle.getText("PieChartTooltip"));
			toolBar.getToolBar().insertContentRight(oPieChart);

			var oController = this;

			oController.createContent(oController);

			// Set the Model
			if (setDemog == null) {
				this.oService = "../../../services/intelligence.xsjs?cmd=getUserDemographicAnalysis&after=" + this.afterDate +
				"&before=" + this.beforeDate + "&serverIP=" + this.ip;
			 }
			 else {
			    	if (setDemog.kpi == "AgeRange")
			    		{
			    		this.oService = "../../../services/intelligence.xsjs?cmd=getUserDemographicAnalysis&after=" + this.afterDate +
						"&before=" + this.beforeDate + "&serverIP=" + this.ip;
			    		}
			    	if (setDemog.kpi == "Gender")
		    			{
			    		this.oService = "../../../services/intelligence.xsjs?cmd=getUserGenderAnalysis&after=" + this.afterDate +
			    		"&before=" + this.beforeDate + "&serverIP=" + this.ip;
		    			}
			 	 }

	        //retrieves data for Pie Chart Model

			oController.getData(this.oService, this);

			setTimeout(function() {
	            oController._oModel.setData(
	            	 oController.oData3
	            );
	          }, 1000);

	        this.chart = this.byId("BusUserDemogAnalysisChart");

	        var temp = 0;
	        for(var i = 0 ; i < this.oData3.businessData.length; i++)
	        {
	        	if (this.oData3.businessData[i].Access != 0)
	        	{
	        		temp = 1;
	        	}
	        }
	        if (temp == 0)
	        {
	        	this.oData3 = {};
	        }

	        // Set the Data set
	        this._oDataset.removeAllDimensions();
	        if(setDemog == null)
	        	{
	        this._oDataset.addDimension(this.dimensionAge);
	        	}
	        else{
	        	if (setDemog.kpi == "AgeRange"){
	        		this._oDataset.addDimension(this.dimensionAge);
	        	}
	        	if (setDemog.kpi == "Gender"){
	        	this._oDataset.addDimension(this.dimensionsGender);
	        	}
	        }
	        this._oDataset.addMeasure(this.measures1);
	        this._oDataset.bindData({
	            path:"/businessData"

	        });

	        // Create a Model
//	        this._oModel.setData(this.oData3);

	        // Set the Dataset
	        this.chart.setDataset(this._oDataset);

	        // Set the Model
	        this.chart.setModel(this._oModel);
	        this.saveSettings(this.ip, this.selectOpt, this.afterDate, this.beforeDate);

	        function initToolTip(){
	            if(! document.getElementById("charToolTip")){
	                var toolTipHtml = '<div id="charToolTip" class="v-background"><div class="v-tooltip-mainDiv"><table class="v-tooltip-dimension-measure"><tr><td class="vbod-y-dimension-label">Browser:</td><td class="v-body-dimension-value">OTHER</td></tr><tr><td class="v-body-measure-label">Access:</td><td class="v-body-measure-value">818</td></tr></table><div class="v-separationline"></div><div class="v-footer-label tooltipfooterlabel"></div></div></div>';
	                $("body").append(toolTipHtml);
	            }
	        }
	        var integration = new sap.viz.ui5.types.controller.Interaction({
	            decorations : [ {
	                name : 'showDetail',
	                fn : function(options) {
	                    initToolTip();
	                    var toolTipNode = $("#charToolTip")

	                    toolTipNode.css({
	                        "position": "absolute",
	                        "display": "block",
	                        "left": options.position.x + 4,
	                        "bottom": $(document).height() - options.position.y + 4
	                    });
	                    var data = options.data;
	                    toolTipNode.find(".v-body-dimension-label").html(data[0].name);
	                    toolTipNode.find(".v-body-dimension-value").html(data[0].value);
	                    toolTipNode.find(".v-body-measure-label").html(data[1].name);
	                    toolTipNode.find(".v-body-measure-value").html(data[1].value+"%");
	                    if(options.selectedNumber > 0){
	                        toolTipNode.find(".v-footer-label").html(options.selectedNumber+" values selected");
	                        toolTipNode.find(".v-separationline").css({"display" : "block"});
	                        toolTipNode.find(".v-footer-label").css({"display" : "block"});
	                    }else{
	                        toolTipNode.find(".v-separationline").css({"display" : "none"});
	                        toolTipNode.find(".v-footer-label").css({"display" : "none"});
	                    }
	                    return true;
	                }
	            }, {
	                name : 'hideDetail',
	                fn : function(options) {
	                    var toolTipNode = $("#charToolTip")
	                    if(toolTipNode){
	                        toolTipNode.css("display", "none");
	                    }
	                    return true;
	                }
	            }]
	        });

	        this.chart.setInteraction(integration);
	    },
	    onAfterRendering: function(){
	    	
	    	if($("#date1 input").css("left")!=0){

	    		var dateist = setInterval(function(){

	    			$("#date1 input").css("left","0px");
	    			$("#date2 input").css("left","0px");

	    		},1);
	    	}

	    	if($(window).width()<1265){

	    		var setitv = setInterval(function(){

	    			if($(".sapCaUiChartToolBarWrapper .sapMBarMiddle .sapMBarPH").css("left")!=0){
	    				$(".sapCaUiChartToolBarWrapper .sapMBar").css("height","100px");
	    				$(".sapCaUiChartToolBarWrapper .sapMBarMiddle .sapMBarPH").css({"overflow":"visible","left":"0px"});
	    				$(".sapCaUiChartToolBarWrapper .sapMBarMiddle .sapMBarPH").css({"top":"46px"});
	    				$(".sapCaUiChartToolBarWrapper .sapMBarMiddle .sapMBarPH .sapMLabel").css({"marginRight":"0px"});
	    			}else{
	    				clearInterval(setitv);
	    			}

	    		},1);

	    		//$(".sapCaUiChartToolBarWrapper .sapMBarMiddle .sapMBarPH").css({"top":"46px"});
	    		//$(".sapCaUiChartToolBarWrapper .sapMBarMiddle .sapMBarPH .sapMLabel").css({"marginRight":"0px"});

	    	}
	    	
	    },
});
