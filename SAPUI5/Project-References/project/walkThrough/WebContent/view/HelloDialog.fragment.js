sap.ui.jsfragment("root.view.HelloDialog", {
    
    
    
    createContent: function(oController){
        return new sap.m.Dialog({
            title:"Hello",
            content:[
                     new sap.m.Text({
                         text:"what's Icon?"
                     })
             ],
            
            beginButton: new sap.m.Button({
                text: "{i18n>dialogCloseButtonText}",
                press: function(){
                    oController.onCloseDialog();
                }
            })
            
        })
    }
    
    
    
    
})