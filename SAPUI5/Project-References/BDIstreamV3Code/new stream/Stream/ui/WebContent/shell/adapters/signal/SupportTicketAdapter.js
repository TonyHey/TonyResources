//// Copyright (c) 2013 SAP AG, All Rights Reserved
///**
// * @fileOverview The SupportTicket adapter for the Sandbox platform.
// *
// * @version @version@
// */
//(function () {
//    "use strict";
//    /*global jQuery, sap */
//    jQuery.sap.declare("sap.ushell.adapters.signal.SupportTicketAdapter");
//
//    sap.ushell.adapters.signal.SupportTicketAdapter = function (oSystem) {
//
//        this.createTicket = function (oSuportObject) {
//            var oDeferred = new jQuery.Deferred(),
//            sTicketId = "1234567";
//
//            oDeferred.resolve(sTicketId);
//            return oDeferred.promise();
//        };
//
//    };
//}());

// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview The SupportTicket adapter for the Sandbox platform.
 *
 * @version @version@
 */
(function () {
    "use strict";
    /*global jQuery, sap */
    jQuery.sap.declare("sap.ushell.adapters.signal.SupportTicketAdapter");
    jQuery.sap.require("sap.ushell.ui.footerbar.ContactSupportButton");
    jQuery.sap.require("sap.ushell.ui.footerbar.LoginDetailsButton");
    jQuery.sap.require("sap.ushell.ui.footerbar.LogoutButton");
    jQuery.sap.require("sap.ushell.ui.footerbar.AboutButton");
//    jQuery.sap.require('sap.ui.commons.MessageBox');
    jQuery.sap.require('sap.m.MessageBox');
    jQuery.sap.require("sap.ushell.library");
    jQuery.sap.require("sap.ushell.resources");
    
    jQuery.sap.require("sap.ui.layout.form.SimpleForm");
    jQuery.sap.require("sap.m.Label");
    jQuery.sap.require("sap.m.Text");
    jQuery.sap.require("sap.m.Input");
    jQuery.sap.require("sap.m.Dialog");
    jQuery.sap.require("sap.m.Button");
    jQuery.sap.require("sap.ushell.services.Container");
    
    //i18n instance
    var oBundle = jQuery.sap.resources({
           url : "ui/WebContent/i18n/i18n.properties",
           locale : sap.ui.getCore().getConfiguration().getLanguage() 
    });
    
    
    sap.ushell.adapters.signal.SupportTicketAdapter = function (oSystem) {
    	sap.ushell.ui.footerbar.ContactSupportButton.prototype.init = function () {
            this.setIcon('sap-icon://sys-help');
            this.setWidth('100%');
            this.setText(oBundle.getText("contactSupportBtn"));
            this.setTooltip(oBundle.getText("contactSupportBtn_tooltip"));
            this.attachPress(this.showContactSupportDialog);
            this.setEnabled();// disables button if shell not initialized
        };
        
    	sap.ushell.ui.footerbar.ContactSupportButton.prototype.showContactSupportDialog = function(){
//    		alert("show Contact support");
    		var user = sap.ushell.Container.getUser() || {},
            translationBundle = sap.ushell.resources.i18n,
            oSimpleForm = new sap.ui.layout.form.SimpleForm({
                editable : false,
                content : [
                    new sap.m.Text({text: oBundle.getText("contactSupport")})
                ]
            }),
            oDialog,
            okButton = new sap.m.Button({
                text : translationBundle.getText("okBtn"),
                press : function () {
                    oDialog.close();
                }
            });

	        oDialog = new sap.m.Dialog({
	            id: "contactSupportDialog",
	        	title: translationBundle.getText("contactSupportBtn"),
	            contentWidth : "300px",
	            leftButton: okButton,
	            afterClose : function () {
	                oDialog.destroy();
	            }
	        });
	
	        oDialog.addContent(oSimpleForm);
	        oDialog.open();
    	};
    	
    	sap.ushell.ui.footerbar.LoginDetailsButton.prototype.showLoginDetailsDialog = function() {
//    		alert("show login detail");
    		var user = sap.ushell.Container.getUser() || {},
            translationBundle = sap.ushell.resources.i18n,
            oSimpleForm = new sap.ui.layout.form.SimpleForm({
                editable : false,
                content : [
                    new sap.m.Label({text: translationBundle.getText("userFld")}),
                    new sap.m.Text({text: user.getFullName() || ''}),
                    new sap.m.Label({text: translationBundle.getText("serverFld")}),
                    new sap.m.Text({text: window.location.host }),
                    new sap.m.Label({text: translationBundle.getText("languageFld")}),
                    new sap.m.Text({text: user.getLanguage() || ''})
                ]
            }),
            oDialog,
            okButton = new sap.m.Button({
                text : translationBundle.getText("okBtn"),
                press : function () {
                    oDialog.close();
                }
            });

        oDialog = new sap.m.Dialog({
            id: "loginDetailsDialog",
        	title: translationBundle.getText("loginDetails"),
            contentWidth : "300px",
            leftButton: okButton,
            afterClose : function () {
                oDialog.destroy();
            }
        });

        oDialog.addContent(oSimpleForm);
        oDialog.open();
    	};
    	
    	sap.ushell.ui.footerbar.LogoutButton.prototype.logout = function() {
//    		alert("Log out");
//    		sap.ui.commons.MessageBox.confirm(oBundle.getText("logOutMsg"), function(bConfirmed) {
//				if(!bConfirmed) {
//					return false;
//				}
//				
//				$.ajax({
//					url : "/sap/hana/xs/formLogin/token.xsjs",
//					type : "GET",
//					beforeSend : function(request) {
//						request.setRequestHeader("X-CSRF-Token", "Fetch");
//					},
//					success : function(data, textStatus, XMLHttpRequest) {
//						var token = XMLHttpRequest.getResponseHeader("X-CSRF-Token");
//						$.ajax({
//							url : "/sap/hana/xs/formLogin/logout.xscfunc",
//							type : "POST",
//							beforeSend : function(request) {
//								request.setRequestHeader("X-CSRF-Token", token);
//							},
//							success : function(data, textStatus, XMLHttpRequest) {
//								// location.reload(true);
//
//								// Workaround to fix the logout issue
//								window.location = "/sap/hana/xs/formLogin/login.html?x-sap-origin-location=" + encodeURIComponent(window.location.pathname);
//							}
//						});
//					}
//				});
//
//			}, "Logout");
    		
    		var _getLogoutDetails = function(dirtyState) {
    	        var oLogoutDetails = {},
    	            oResourceBundle = sap.ushell.resources.i18n;

    	        if (dirtyState === sap.ushell.Container.DirtyState.DIRTY || dirtyState === sap.ushell.Container.DirtyState.MAYBE_DIRTY) {
    	            oLogoutDetails.message = oResourceBundle.getText('unsaved_data_warning_popup_message');
    	            oLogoutDetails.icon = sap.m.MessageBox.Icon.WARNING;
    	            oLogoutDetails.messageTitle = oResourceBundle.getText("unsaved_data_warning_popup_title");
    	        }
    	        else {
    	            oLogoutDetails.message = oResourceBundle.getText('logoutConfirmationMsg');
    	            oLogoutDetails.icon = sap.m.MessageBox.Icon.QUESTION;
    	            oLogoutDetails.messageTitle = oResourceBundle.getText("title_confirm");
    	        }

    	        return oLogoutDetails;
    	    };
    		
    		sap.ushell.Container.getGlobalDirty().done(function (dirtyState) {
                var oLogoutDetails = _getLogoutDetails(dirtyState);
                sap.m.MessageBox.show(oLogoutDetails.message, oLogoutDetails.icon,
                    oLogoutDetails.messageTitle, [sap.m.MessageBox.Action.OK, sap.m.MessageBox.Action.CANCEL],
                    function (oAction) {
                        if (oAction === sap.m.MessageBox.Action.OK) {
                        	$.ajax({
            					url : "/sap/hana/xs/formLogin/token.xsjs",
            					type : "GET",
            					beforeSend : function(request) {
            						request.setRequestHeader("X-CSRF-Token", "Fetch");
            					},
            					success : function(data, textStatus, XMLHttpRequest) {
            						var token = XMLHttpRequest.getResponseHeader("X-CSRF-Token");
            						$.ajax({
            							url : "/sap/hana/xs/formLogin/logout.xscfunc",
            							type : "POST",
            							beforeSend : function(request) {
            								request.setRequestHeader("X-CSRF-Token", token);
            							},
            							success : function(data, textStatus, XMLHttpRequest) {
            								// location.reload(true);

            								// Workaround to fix the logout issue
            								window.location = "/sap/hana/xs/formLogin/login.html?x-sap-origin-location=" + encodeURIComponent(window.location.pathname);
            							}
            						});
            					}
            				});
                        }
                    }, sap.ui.core.ElementMetadata.uid("confirm"));
            });
    		
    		
        };
    	
        this.createTicket = function (oSuportObject) {
            var oDeferred = new jQuery.Deferred(),
            sTicketId = "1234567";

            oDeferred.resolve(sTicketId);
            return oDeferred.promise();
        };
        //modify About Button's Dialog
        sap.ushell.ui.footerbar.AboutButton.prototype.showAboutDialog = function () {
            //jQuery.sap.require("sap.ushell.services.AppConfiguration");
            var translationBundle = sap.ushell.resources.i18n,
                //metaData = sap.ushell.services.AppConfiguration.getMetadata(),
                oSimpleForm = new sap.ui.layout.form.SimpleForm({
                	id: 'aboutDialogFormID',
                    editable: false,
                    content : [
                        new sap.m.Label({text : translationBundle.getText("technicalName")}),
                        //new sap.m.Text({text : metaData.libraryName || ''}),
                        new sap.m.Text({text : "sap.rds.bdi.stream.apps.source"}),
                        new sap.m.Label({text : translationBundle.getText("fioriVersionFld")}),
                        //new sap.m.Text({text : metaData.version || ''}),
                        new sap.m.Text({text : "2.0.0"}),
//                        new sap.m.Label({text : translationBundle.getText("fioriBuildFld")}),
//                        new sap.m.Text({text : sap.ui.buildinfo.buildtime || ''}),
                        new sap.m.Label({text : translationBundle.getText("sapui5Fld")}),
                        new sap.m.Text({text : (sap.ui.version || "") + (' (' + (sap.ui.buildinfo.buildtime || "") + ')') || ''}),
                        new sap.m.Label({text : translationBundle.getText("userAgentFld")}),
                        new sap.m.Text({text : navigator.userAgent || ''}),
                        new sap.m.Label({text : ''}),
                        //add support content into About Button's Dialog
                        new sap.m.Label({text : oBundle.getText("supportBtn")}),
                        new sap.m.Text({text: oBundle.getText("supportContent")})
                    ]
                }),
                /*oHeader = new sap.m.ObjectHeader({
                    title : metaData.title,
                    icon : metaData.icon
                }).addStyleClass('sapUshellAboutDialogHeader'),*/
                oDialog,
               // oVBox,
                okButton = new sap.m.Button({
                    text : translationBundle.getText("okBtn"),
                    press : function () {
                        oDialog.close();
                    }
                });

            /*if (jQuery.isEmptyObject(metaData) || !metaData.icon) {
                oVBox = new sap.m.VBox({
                    items: [oSimpleForm]
                });
            }
            else {
                oVBox = new sap.m.VBox({
                    items: [oHeader, oSimpleForm]
                });
            }*/
            oDialog = new sap.m.Dialog({
            	id: "aboutContainerDialogID",
                title: translationBundle.getText("about"),
                contentWidth : "250px",
                horizontalScrolling: false,
                leftButton: okButton,
                afterClose : function () {
                    oDialog.destroy();
                }
            });
            //oDialog.addContent(oVBox);
            oDialog.addContent(oSimpleForm);
            oDialog.open();
        };
    };
}());
