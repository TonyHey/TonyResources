/**
 * add configuration button
 */

function resetPressAction(){
    var actionBtn = sap.ui.getCore().byId("actionsBtn");
    var view = sap.ui.getCore().byId("mainShell");
    
    var oBundle = jQuery.sap.resources({
        url : "ui/WebContent/i18n/i18n.properties",
        locale : sap.ui.getCore().getConfiguration().getLanguage()
    });

    //detach the default action set by ShellController
    var controller = view.getController();
    actionBtn.detachPress(controller.pressActionBtn, controller);
    
    //set the same button when jump into the different pages
    var model = controller.getModel();
    model.setProperty("/states/home/actions", ["aboutBtn", "loginDetails", "hideGroupsBtn","logConfigBtn", "logoutBtn"]);
    model.setProperty("/currentState/actions", ["aboutBtn", "loginDetails", "hideGroupsBtn","logConfigBtn", "logoutBtn"]);
    var actionsParams = model.getProperty("/states/home/actions");
    //model.setProperty("/states/app/actions", ["aboutBtn", "loginDetails", "logoutBtn"]);
    model.setProperty("/states/app/actions", actionsParams);
    model.setProperty("/states/catalog/actions", actionsParams);
    model.setProperty("/states/catalogApp/actions", actionsParams);
    model.setProperty("/states/minimal/actions", actionsParams);
    model.setProperty("/states/embedded/actions", actionsParams);
    model.setProperty("/states/standalone/actions", actionsParams);
    
    var newPressAction = function(oEvent){
        var view = sap.ui.getCore().byId("mainShell");
        var controller = view.getController();

        // don't hide the shell header when the action sheet is open on mobile devices only
        if (!sap.ui.Device.system.desktop) {
            controller.getModel().setProperty("/headerHiding", false);
        }
        var oActionSheet = sap.ui.getCore().byId('headActions');
//        var user = sap.ushell.Container.getUser() || {};
//        var fullName = user.getFullName().toUpperCase();
        if (!oActionSheet) {
            var oLoginDetails = new sap.ushell.ui.footerbar.LoginDetailsButton("loginDetails"),
                oLogoutButton = new sap.ushell.ui.footerbar.LogoutButton("logoutBtn"),
                oAboutButton = new sap.ushell.ui.footerbar.AboutButton("aboutBtn"),
                oSettingButton = new sap.ushell.shells.ui.footerbar.SettingButton("hideGroupsBtn"),
                oLogConfigBtn = new sap.ushell.shells.ui.footerbar.LogConfigButton("logConfigBtn"),
                oContactSupport = new sap.ushell.ui.footerbar.ContactSupportButton("ContactSupportBtn", {
                    visible: controller.bContactSupportEnabled
                });
            oContactSupport.setTooltip("Support");
            oLoginDetails.setText(oBundle.getText("loginDetailsBtn"));
            oLoginDetails.setTooltip(oBundle.getText("loginDetailsBtn_tooltip"));
//            if (fullName !== 'SYSTEM' && fullName !== 'STREAM_ADMIN'){
//				oSettingButton.setVisible(false);
//			}
            oActionSheet = new sap.m.ActionSheet("headActions", {
                placement: sap.m.PlacementType.Bottom,
                buttons: {path: "/currentState/actions", factory: function (sId, oContext) {
                    return sap.ui.getCore().byId(oContext.getObject());
                }}
            });
            var model = controller.getModel();
            oActionSheet.updateAggregation = view.updateShellAggregation;
            oActionSheet.setModel(model);
            view.aDanglingControls.push(oActionSheet, oLoginDetails, oLogoutButton, oAboutButton, oContactSupport,oLogConfigBtn, oSettingButton);
        }

        oActionSheet.openBy(oEvent.getSource());
        oActionSheet.attachAfterClose(oActionSheet, function() {
            // reset header hiding according to the current state (on mobile devices only)
            if (!sap.ui.Device.system.desktop) {
                var currentState = sap.ui.getCore().byId('shell').getModel().getProperty("/currentState"),
                headerHiding = currentState.headerHiding;
                this.getModel().setProperty("/headerHiding", headerHiding);
            }
        });
    };
    actionBtn.attachPress(newPressAction);
            }