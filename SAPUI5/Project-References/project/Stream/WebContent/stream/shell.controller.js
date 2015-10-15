sap.ui.controller("sap.stream.shell", {
	 
	    onInit : function() {
	        this.homeView = new sap.ui.core.mvc.HTMLView({
	            viewName : "sap.stream.homepage"
	        });

	        this.oShell.addContent(this.homeView);
	        this.userInfo = this.getUserInfo();
	    },
        
	    onBeforeRendering: function() {
	    	
	    },

	    onAfterRendering: function() {
	        this.setUserItem();
	    },
	    handleUserItemPress: function(oEvent) {
	        var that = this;
	        
	        this.configurationBtn = new sap.m.Button({
	            icon: "sap-icon://action-settings",
	            text: "Configuration",
	            press: function() {
	                jQuery.proxy(that.handleConfigurationPress(), that);
	            }
	        });
	        this.aboutBtn = new sap.m.Button({
	            icon: "sap-icon://hint",
	            text: "About",
	            press: function() {
	                jQuery.proxy(that.handleAboutPress(), that);
	            }
	        });
	        this.userPreferencesBtn = new sap.m.Button({
	            icon: "sap-icon://person-placeholder",
	            text: "User Preferences",
	            press: function() {
	                jQuery.proxy(that.handleUserPreferences(), that);
	            }
	        });
	        this.logoutBtn = new sap.m.Button({
	            icon: "sap-icon://log",
	            text: "Log Out",
	            press: function() {
	                jQuery.proxy(that.handleLogoutPress(), that);
	            }
	        });

	        if (!this._actionSheet) {
	          this._actionSheet = sap.m.ActionSheet({
	              buttons: [ this.aboutBtn, this.userPreferencesBtn, this.configurationBtn, this.logoutBtn]
	          });
	          this.getView().addDependent(this._actionSheet);
	        }

	        this._actionSheet.openBy(oEvent.getSource());
	    },

	    handleUserPreferences: function() {
	        var that = this;
	        var user = this.userInfo || {}; 
	        
	        this.mainList = new sap.m.List({
	            items:[
	                   new sap.m.StandardListItem({
	                       title: "User Name",
	                       description: user.fullName
	                   }),
	                   new sap.m.StandardListItem({
	                       title: "Server",
	                       info: window.location.host
	                   }),
	                   new sap.m.StandardListItem({
	                       title: "Language",
	                       info: user.language
	                   }),
	                   new sap.m.StandardListItem({
	                       title: "Theme",
	                       info: "SAP Blue Crystal",
	                       type: sap.m.ListType.Navigation,
	                       press: function(){
	                           that.setTheme(oDialog);
	                       }
	                   })
	            ]
	        });
	        
	        var saveButton = new sap.m.Button({
	            text : "Save",
	            press : function () {
	                oDialog.close();
	            }
	        });
	        var cancelButton = new sap.m.Button({
	            text : "Cancel",
	            press : function () {
	                oDialog.close();
	            }
	        });

	        var oDialog = new sap.m.Dialog({
	            title: "User Preferences",
	            contentWidth : "300px",
	            contentHeight: "300px",
	            leftButton: saveButton,
	            endButton:cancelButton,
	            afterClose : function () {
	                oDialog.destroy();
	            },
	            content: that.mainList
	        });

	        oDialog.open();
	    },

	    handleAboutPress: function () {
	        var oSimpleForm = new sap.ui.layout.form.SimpleForm({
	            editable: false,
	            content: [
	                      new sap.m.Text({text: "SAP HANA Big Data Intelligence rapid-deployment solution \u2013 Stream Solution Version 3.0.0"}),
	                      new sap.m.Label({text : "Technical Name"}),
	                      new sap.m.Text({text : "sap.stream.apps.source"}),
	                      new sap.m.Label({text : "Version"}),
	                      new sap.m.Text({text : "3.0"}),
	                      new sap.m.Label({text : "sapui5"}),
	                      new sap.m.Text({text : (sap.ui.version || "") + (' (' + (sap.ui.buildinfo.buildtime || "") + ')') || ''}),
	                      new sap.m.Label({text : "user Agent"}),
	                      new sap.m.Text({text : navigator.userAgent || ''}),
	                      new sap.m.Label({text : ''}),
	                      new sap.m.Label({text : "Support"}),
	                      new sap.m.Text({text: "You can create IT messages to SAP Component SV-RDS-HDB if there are problems need SAP support"})
	            ]
	        });

	        var okButton = new sap.m.Button({
	            text: "OK",
	            press: function () {
	                oDialog.close();
	            }
	        });

	        var oDialog = new sap.m.Dialog({
	            title: "About",
	            navButtonPress: function() {
	                alert("NAV");
	            },
	            contentWidth : "250px",
	            horizontalScrolling: false,
	            leftButton: okButton,
	            afterClose : function () {
	                oDialog.destroy();
	            }
	        });

	        oDialog.addContent(oSimpleForm);
	        oDialog.open();
	    },
	    
	    handleConfigurationPress: function () {
	        window.open('http://' + window.location.host + '/Stream/config.html');
	    },
	    
	    setTheme: function(oDialog) {
	        var that = this;

	        this.themeList = new sap.m.List({
	            mode: sap.m.ListMode.SingleSelectLeft,
	            items: [
	                    new sap.m.StandardListItem({
	                        title: "SAP Blue Crystal",
	                        selected: true
	                    }),
	                    new sap.m.StandardListItem({
	                        title: "Withe Background"
	                    })
	            ],
	            select: function() {
	                alert(this.getSelectedItem().getTitle());
	            }
	        });
	        var oBar = new sap.m.Bar({
	            contentLeft: [
	                          new sap.m.Button({
	                             icon: "sap-icon://nav-back",
	                             press: function() {
	                                 oDialog.removeAllContent();
	                                 oDialog.setTitle("User Preferences");
	                                 oDialog.addContent(that.mainList);
	                             }
	                          })
	            ],
	            contentMiddle: [
	                            new sap.m.Label({
	                                text: "Theme"
	                            })
	            ]
	        });

	        oDialog.setCustomHeader(oBar);
	        oDialog.removeAllContent();
	        oDialog.addContent(this.themeList);
	        oDialog.open();
	    },
	    
	    handleLogoutPress: function() {
	        jQuery.sap.require("sap.m.MessageBox");
	        sap.m.MessageBox.show(
	                "Do you really would like to log off?",
	                sap.m.MessageBox.Icon.QUESTION,
	                "Log Out",
	                [sap.m.MessageBox.Action.OK, sap.m.MessageBox.Action.CANCEL],
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
	    },
	    /**
	     * Get the logged-in user Info.
	     */
	    getUserInfo: function() {
	        var oUserInfo;
	        
	        $.ajax({
	            url : "./services/intelligence.xsjs?cmd=getInfoFromSession",
	            dataType : 'json',
	            type : 'GET',
	            async : false,
	            success : function (data) {
	              oUserInfo = {
	                  fullName: data.user.name,
	                  language: sap.ui.getCore().getConfiguration().getLanguage()
	              };
	            },
	            fail : function () {
	                console.log("-------getInfoFromSession fail");
	            }
	        });
	        
	        return oUserInfo;
	    },

	    setUserItem: function() {
	        this.userItem.setUsername(this.userInfo.fullName);
	        //icon
	    }
});