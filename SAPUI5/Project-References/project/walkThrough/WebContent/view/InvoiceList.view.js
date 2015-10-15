sap.ui.jsview("root.view.InvoiceList", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.InvoiceList
	*/ 
	getControllerName : function() {
		return "root.view.InvoiceList";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.InvoiceList
	*/ 
	createContent : function(oController) {

        var oTable = new sap.m.Table("invoiceList",{
            visibleRowCount: 5,
            width: "auto",
            noDataText: "loading...",
            headerToolbar: new sap.m.Toolbar({
                content:[
                         new sap.m.Text({
                             text: "{i18n>invoiceListTitle}"
                         }),
                         new sap.m.ToolbarSpacer({
                             
                         }),
                         new sap.m.SearchField({
                             width: "20%",
                             search: function(oEvent){
                                 oController.onFilterInvoices(oEvent)
                             }
                         })
                ]
            }),
            columns: [
                new sap.m.Column({
                    header: new sap.m.Label({text:"{i18n>columnQuantity}"}),
                    hAlign: "Right",
                    minScreenWidth: "Small",
                    demandPopin: true,
                    width: "5em",
                }),
                new sap.m.Column({
                    hAlign: "Right",
                    minScreenWidth: "Small",
                    demandPopin: true,
                    width: "auto",
                    header: new sap.m.Label({text:"{i18n>columnName}"})
                }),
                new sap.m.Column({
                    hAlign: "Right",
                    minScreenWidth: "Small",
                    demandPopin: true,
                    width: "auto",
                    header: new sap.m.Label({text:"{i18n>columnStatus}"})
                }),
                new sap.m.Column({
                    hAlign: "Right",
                    minScreenWidth: "Small",
                    demandPopin: true,
                    width: "auto",
                    header: new sap.m.Label({text:"{i18n>columnSupplier}"})
                }),
                new sap.m.Column({
                    hAlign: "Right",
                    minScreenWidth: "Small",
                    demandPopin: true,
                    width: "auto",
                    header: new sap.m.Label({text:"{i18n>columnPrice}"})
                }),
            ]


        })
        
 		
 		oTable.bindItems({
            path: "invoice>/Invoices",
            template: new sap.m.ColumnListItem({
                type: sap.m.ListType.Navigation,
                cells: [
                        new sap.m.ObjectNumber({
                            number: "{invoice>Quantity}",
                            emphasized: false
                        }),
                        
                        new sap.m.ObjectIdentifier({
                            text: "{invoice>ProductName}"
                        }),
                        
                        new sap.m.Text({
                            text: "{invoice>Status}"
                        }),
                         new sap.m.Text({
                            text: "{invoice>ShipperName}"
                        }),
                        new sap.m.ObjectNumber({
                            number: {
                                parts: [{path: 'invoice>ExtendedPrice'}, {path: 'view>/currency'}],
                                type: 'sap.ui.model.type.Currency',
                                formatOptions: {
                                    showMeasure: false
                                }
                            },
                            numberUnit: "{view>/currency}",
                            numberState: "{= ${invoice>ExtendedPrice} > 50 ? 'Error' : 'Success' }"
                        })
                ]
            }),
            sorter: new sap.ui.model.Sorter({
                path : "invoice>ShipperName",
                group: true
            })
        });
 		return oTable;
	}

});