sap.ui.controller("sap.rds.bdi.stream.Homepage.view.shell", {
    onInit : function() {
        var oBundle = jQuery.sap.resources({
            url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
            locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        this.setPageTitle(oBundle.getText("shell.page.title.overview"));
        this.app = new sap.ui.core.mvc.JSView("appView", {
            viewName : "sap.rds.bdi.stream.Homepage.view.app"
        });

        
        this.oShell.addContent(this.app);
        
        //Add Home Button into shell;
        this.oShell.addHeadItem(
	        new sap.ui.unified.ShellHeadItem("oHomeButton",{
	        	icon: "sap-icon://home",
	        	visible: false,
	            press: this.app.getController().toHome
	        })
        );

        this.userInfo = this.getUserInfo();
    },

    onBeforeRendering: function() {
        this.setUserItem();
    },

    onAfterRendering: function() {
        var oBundle = jQuery.sap.resources({
            url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
            locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        this.setPageTitle(oBundle.getText("shell.page.title.overview"));
        this.addShellTitle();
    },

    setPageTitle: function(titleText) {
        this.oPageTitle.setText(titleText);
        sap.ui.getCore().byId("oShell").setSearch(this.oPageTitle);
    },

    handleUserItemPress: function(oEvent) {
        var that = this;

        var oBundle = jQuery.sap.resources({
            url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
            locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        
        this.aboutBtn = new sap.m.Button({
            icon: "sap-icon://hint",
            text: oBundle.getText("user.menu.item.about"),
            press: function() {
                jQuery.proxy(that.handleAboutPress(), that);
            }
        });
        this.userPreferencesBtn = new sap.m.Button({
            icon: "sap-icon://person-placeholder",
            text: oBundle.getText("user.menu.item.user.preferences"),
            press: function() {
                jQuery.proxy(that.handleUserPreferences(), that);
            }
        });
        this.configurationBtn = new sap.m.Button({
            icon: "sap-icon://action-settings",
            text: oBundle.getText("user.menu.item.configuration"),
            press: function() {
                jQuery.proxy(that.handleConfigurationPress(), that);
            }
        });
        this.logConfigBtn = new sap.m.Button({
            icon: "sap-icon://settings",
            text: oBundle.getText("user.menu.item.logConfiguration"),
            press: function() {
                jQuery.proxy(that.handleLogConfigurationPress(), that);
            }
        });
        this.logoutBtn = new sap.m.Button({
            icon: "sap-icon://log",
            text: oBundle.getText("user.menu.item.logout"),
            press: function() {
                jQuery.proxy(that.handleLogoutPress(), that);
            }
        });

        if (!this._actionSheet) {
          this._actionSheet = sap.m.ActionSheet({
              buttons: [ this.aboutBtn, this.userPreferencesBtn, this.configurationBtn, this.logConfigBtn, this.logoutBtn]
          });
          this.getView().addDependent(this._actionSheet);
        }

        if (!this._actionSheet.isOpen()) {
            this._actionSheet.openBy(oEvent.getSource());
        } else {
            this._actionSheet.close();
        }
    },

    handleUserPreferences: function() {
        var that = this;
        var user = this.userInfo || {}; 
        
        var oBundle = jQuery.sap.resources({
            url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
            locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        
        this.mainList = new sap.m.List({
            items:[
                   new sap.m.StandardListItem({
                       title: oBundle.getText("user.menu.item.user.name"),
                       description: user.fullName
                   }),
                   new sap.m.StandardListItem({
                       title: oBundle.getText("user.menu.item.server"),
                       info: window.location.host
                   }),
                   new sap.m.StandardListItem({
                       title: oBundle.getText("user.menu.item.language"),
                       info: user.language
                   }),
                   new sap.m.StandardListItem({
                       title: oBundle.getText("user.menu.item.theme"),
                       info: "SAP Blue Crystal",
                       type: sap.m.ListType.Navigation,
                       press: function(){
                           that.setTheme(oDialog);
                       }
                   })
            ]
        });
        
        var saveButton = new sap.m.Button({
            text : oBundle.getText("user.menu.buttom.save"),
            press : function () {
                oDialog.close();
            }
        });
        var cancelButton = new sap.m.Button({
            text : oBundle.getText("user.menu.buttom.cancel"),
            press : function () {
                oDialog.close();
            }
        });

        var oDialog = new sap.m.Dialog({
            title: oBundle.getText("user.menu.item.user.preferences"),
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
        
        var oBundle = jQuery.sap.resources({
            url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
            locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        
        var oSimpleForm = new sap.ui.layout.form.SimpleForm({
            editable: false,
            content: [
                      new sap.m.Text({text: oBundle.getText("user.menu.text.about")}),
                      new sap.m.Label({text : oBundle.getText("user.menu.label.technical.name")}),
                      new sap.m.Text({text : oBundle.getText("user.menu.text.technical.name")}),
                      new sap.m.Label({text : oBundle.getText("user.menu.label.version")}),
                      new sap.m.Text({text : oBundle.getText("user.menu.text.version")}),
                      new sap.m.Label({text : oBundle.getText("user.menu.label.sapui5")}),
                      new sap.m.Text({text : (sap.ui.version || "") + (' (' + (sap.ui.buildinfo.buildtime || "") + ')') || ''}),
                      new sap.m.Label({text : oBundle.getText("user.menu.label.user.agent")}),
                      new sap.m.Text({text : navigator.userAgent || ''}),
                      new sap.m.Label({text : ''}),
                      new sap.m.Label({text : oBundle.getText("user.menu.label.support")}),
                      new sap.m.Text({text: oBundle.getText("user.menu.text.support")})
            ]
        });

        var okButton = new sap.m.Button({
            text: oBundle.getText("user.menu.button.ok"),
            press: function () {
                oDialog.close();
            }
        });

        var oDialog = new sap.m.Dialog({
            title: oBundle.getText("user.menu.item.about"),
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
        window.open('http://' + window.location.host + '/sap/rds-bdi/stream/config.html');
    },
    
    handleLogConfigurationPress: function () {
        window.open('http://' + window.location.host + '/sap/rds-bdi/stream/logConfig.html');
    },
    setTheme: function(oDialog) {
        var that = this;

        var oBundle = jQuery.sap.resources({
            url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
            locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        if (sap.ui.getCore().byId("themeList") == undefined) {
            this.themeList = new sap.m.List("themeList", {
                mode: sap.m.ListMode.SingleSelectLeft,
                items: [
                        new sap.m.StandardListItem({
                            title: oBundle.getText("user.menu.item.blue"),
                            selected: true
                        })
                ]
            });
        }
        var oBar = new sap.m.Bar({
            contentLeft: [
                          new sap.m.Button({
                             icon: "sap-icon://nav-back",
                             press: function() {
                                 oDialog.removeAllContent();
                                 oDialog.destroyCustomHeader();
                                 oDialog.setTitle(oBundle.getText("user.menu.item.user.preferences"));
                                 oDialog.addContent(that.mainList);
                             }
                          })
            ],
            contentMiddle: [
                            new sap.m.Label({
                                text: oBundle.getText("user.menu.item.theme")
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
        var oBundle = jQuery.sap.resources({
            url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
            locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        sap.m.MessageBox.show(
                oBundle.getText("user.menu.text.logout"),
                sap.m.MessageBox.Icon.QUESTION,
                oBundle.getText("user.menu.text.confirmation"),
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
            url : "/sap/rds-bdi/stream/ui/xsjs/api.xsjs/intelligence/getInfoFromSession",
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
    },

    addShellTitle: function() {
    	var oBundle = jQuery.sap.resources({
        	url : "ui/WebContent/view/Homepage/i18n/i18n.properties",
        	locale : sap.ui.getCore().getConfiguration().getLanguage() 
        });
        var oShellTitle = oBundle.getText("shell.title.stream.intelligence");
        $(".sapUiUfdShellIco").append("<label class='shell-header-title'>" + oShellTitle + "<label>");
    }
});