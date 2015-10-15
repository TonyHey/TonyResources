sap.ui.jsview("sap.stream.detailPage.timeSeriesAnalysis.kpi", {

	getControllerName : function() {
		return "sap.stream.detailPage.timeSeriesAnalysis.kpi";
	},
 
	createContent : function(oController) {
		 //HeaderContainer begin    
        var unique = new sap.suite.ui.commons.HeaderCell ({
        	height: '150px',
        	north: new sap.suite.ui.commons.HeaderCellItem({
        		content:
        		       new sap.m.Label({
        		    	   width: '200px',
        		    	   text:'Unique Visitors'
        		       }).addStyleClass('timeSA-north')
        	}),
        	east: new sap.suite.ui.commons.HeaderCellItem ({
        		content:
        		       new sap.ui.commons.TextView ({
        		    	   text:'23,795'
        		       }).addStyleClass('timeSA-maintext')
        	}),
        	south:  new sap.suite.ui.commons.HeaderCellItem ({
        		content:
        		       new sap.ui.layout.HorizontalLayout ({
        		    	  content: [
        		    	            new sap.m.Label ({text:'Last day:'}).addStyleClass('timeSA-lastday'),
        		    	            new sap.ui.commons.TextView ({text:'21,653'}).addStyleClass('timeSA-number'), 
        		    	            
        		    	            ]
        		       }).addStyleClass('timeSA-maintext-below')
        	})
        });
        
        var visits = new sap.suite.ui.commons.HeaderCell ({
        	height: '150px',
        	north: new sap.suite.ui.commons.HeaderCellItem({
        		content:
        		       new sap.m.Label({
        		    	   text:'Visits'
        		       }).addStyleClass('timeSA-north-visits')
        	}),
        	east: new sap.suite.ui.commons.HeaderCellItem ({
        		content:
        		       new sap.ui.commons.TextView ({
        		    	   text:'54,604'
        		       }).addStyleClass('timeSA-maintext')
        	}),
        	south:  new sap.suite.ui.commons.HeaderCellItem ({
        		content:
        		       new sap.ui.layout.HorizontalLayout ({
        		    	  content: [
        		    	            new sap.m.Label ({text:'Last day:'}).addStyleClass('timeSA-lastday'),
        		    	            new sap.ui.commons.TextView ({text:'4,745'}).addStyleClass('timeSA-number'), 
        		    	            
        		    	            ]
        		       }).addStyleClass('timeSA-maintext-below')
        	})
        });
        
        var pages = new sap.suite.ui.commons.HeaderCell ({
        	height: '150px',
        	north: new sap.suite.ui.commons.HeaderCellItem ({
        		content:
        		       new sap.m.Label({
        		    	   width: '200px',
        		    	   text:'Pages Viewed'
        		       }).addStyleClass('timeSA-north')
        	}),
        	east: new sap.suite.ui.commons.HeaderCellItem ({
        		content:
        		       new sap.ui.commons.TextView ({
        		    	   text:'34,077'
        		       }).addStyleClass('timeSA-maintext')
        	}),
        	south:  new sap.suite.ui.commons.HeaderCellItem ({
        		content:
        		       new sap.ui.layout.HorizontalLayout ({
        		    	  content: [
        		    	            new sap.m.Label ({text:'Last day:'}).addStyleClass('timeSA-lastday'),
        		    	            new sap.ui.commons.TextView ({text:'3,875'}).addStyleClass('timeSA-number'), 
        		    	            
        		    	            ]
        		       }).addStyleClass('timeSA-maintext-below')
        	})
        });
        
        var bindwidth = new sap.suite.ui.commons.HeaderCell ({
        	height: '150px',
        	north: new sap.suite.ui.commons.HeaderCellItem({
        		content:
        		       new sap.m.Label({
        		    	   width: '200px',
        		    	   text:'BindWidth'
        		       }).addStyleClass('timeSA-north')
        	}),
        	east: new sap.suite.ui.commons.HeaderCellItem ({
        		content:
        		       new sap.ui.commons.TextView ({
        		    	   text:'6,705'
        		       }).addStyleClass('timeSA-maintext')
        	}),
        	south:  new sap.suite.ui.commons.HeaderCellItem ({
        		content:
        		       new sap.ui.layout.HorizontalLayout ({
        		    	  content: [
        		    	            new sap.m.Label ({text:'Last day:'}).addStyleClass('timeSA-lastday'),
        		    	            new sap.ui.commons.TextView ({text:'5,943'}).addStyleClass('timeSA-number'), 
        		    	            
        		    	            ]
        		       }).addStyleClass('timeSA-maintext-below')
        	})
        });
        
        var avg = new sap.suite.ui.commons.HeaderCell ({
        	height: '150px',
        	north: new sap.suite.ui.commons.HeaderCellItem({
        		content:
        		       new sap.m.Label({
        		    	   width: '200px',
        		    	   text:'Avg. Visit Duration'
        		       }).addStyleClass('timeSA-north')
        	}),
        	east: new sap.suite.ui.commons.HeaderCellItem ({
        		content:
        		       new sap.ui.commons.TextView ({
        		    	   text:'04:35'
        		       }).addStyleClass('timeSA-maintext')
        	}),
        	south:  new sap.suite.ui.commons.HeaderCellItem ({
        		content:
        		       new sap.ui.layout.HorizontalLayout ({
        		    	  content: [
        		    	            new sap.m.Label ({text:'Last day:'}).addStyleClass('timeSA-lastday'),
        		    	            new sap.ui.commons.TextView ({text:'04:21'}).addStyleClass('timeSA-number'), 
        		    	            
        		    	            ]
        		       }).addStyleClass('timeSA-maintext-below')
        	})
        });
        
        var oHeaderContainer = new sap.suite.ui.commons.HeaderContainer ({
        	scrollStep: 400,
        	showDividers: true,
        	items: [unique, visits, pages, bindwidth, avg]
        }).addStyleClass('timeSA-headerContainer');
        
        return oHeaderContainer;
	}

});