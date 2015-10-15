sap.ui.jsview("sap.stream.detailPage.demographicAnalysis.kpiHeader", {

    getControllerName : function() {
        return "sap.stream.detailPage.demographicAnalysis.kpiHeader";
    },

    createContent : function(oController) {
    	 var unique = new sap.suite.ui.commons.HeaderCell ({
         	height: '150px',
         	width: '200px',
         	north: new sap.suite.ui.commons.HeaderCellItem({
         		content:
         		       new sap.m.Label({
         		    	   width: '200px',
         		    	   text:'Total Visits Increase'
         		       }).addStyleClass('timeSA-north')
         	}),
         	south: new sap.suite.ui.commons.HeaderCellItem ({
         		content:
         		       new sap.ui.commons.TextView ({
         		    	   text:'3,277'
         		       }).addStyleClass('demoAna-north')
         	})
         	
         });
         
         var visits = new sap.suite.ui.commons.HeaderCell ({
         	height: '150px',
         	width: '200px',
         	north: new sap.suite.ui.commons.HeaderCellItem({
         		content:
         		       new sap.m.Label({
         		    	   text:'Average Length of Stay'
         		       }).addStyleClass('timeSA-north')
         	}),
         	south: new sap.suite.ui.commons.HeaderCellItem ({
         		content:
         		       new sap.ui.commons.TextView ({
         		    	   text:'04:35'
         		       }).addStyleClass('demoAna-north')
         	})
         	
         });
         
         var avg = new sap.suite.ui.commons.HeaderCell ({
          	height: '150px',
          	
          });
                  
         var oHeaderContainer = new sap.suite.ui.commons.HeaderContainer ({
         	scrollStep: 400,
         	showDividers: true,
         	items: [unique, visits, avg]
         }).addStyleClass('timeSA-headerContainer');
         
         return oHeaderContainer;
    }
});