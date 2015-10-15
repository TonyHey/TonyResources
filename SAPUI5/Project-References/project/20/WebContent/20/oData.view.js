sap.ui.jsview("20.oData", {


	getControllerName : function() {
		return "20.oData";
	},

	createContent : function(oController) {
	    var oMatrix = sap.ui.commons.layout.MatrixLayout({
            
            layoutFixed: true,
            width: '300px',
            columns: 3
            
        });
        
        oMatrix.createRow(
                
                new sap.ui.commons.Label({text:"oData"})
        
        );
        
        
        //table
        
        var oTable = new sap.ui.table.Table("tableId",{
                visibleRowCount: 5,
                editable: false
        });
        
        oTable.addColumn(new sap.ui.table.Column({
            
            label: new sap.ui.commons.Label({text: "ID"}),
            visible: true,
            template: new sap.ui.commons.TextView({text: "{employees>EmployeeID}"})
            
        }));
        
        oTable.addColumn(new sap.ui.table.Column({
            
            label: new sap.ui.commons.Label({text: "FirstName"}),
            visible: true,
            template: new sap.ui.commons.TextView({text: "{employees>FirstName}"})
            
        }))
        
        oTable.addColumn(new sap.ui.table.Column({
            
            label: new sap.ui.commons.Label({text: "LastName"}),
            visible: true,
            template: new sap.ui.commons.TextView({text: "{employees>LastName}"})
            
        }));
        
        oTable.addColumn(new sap.ui.table.Column({
            
            label: new sap.ui.commons.Label({text: "Title"}),
            visible: true,
            template: new sap.ui.commons.TextView({text: "{employees>Title}"})
            
        }));
        
        oTable.addColumn(new sap.ui.table.Column({
            
            label: new sap.ui.commons.Label({text: "Notes"}),
            visible: true,
            template: new sap.ui.commons.TextView({text: "{employees>Notes}"})
            
        }));
        
        oTable.bindRows("employees>/Employees");
        
        var ele = [oMatrix,oTable];
        
        return ele;
	}

});
