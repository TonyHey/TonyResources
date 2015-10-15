sap.ui.controller("product.product", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf product.product
*/
	onInit: function() {
		var oModel = new sap.ui.model.json.JSONModel('model/product.json');
	/*	oModel.oHeaders={
				"DataServiceVersion":"3.0",
				"MaxDataServiceVersion":"3.0"
		}*/
		sap.ui.getCore().setModel(oModel,"products");
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf product.product
*/
	onAfterRendering: function() {
		$("#formId").hide();
	},
	
	mode:0,
	
	resetForm:function(){
		$("#id").val("");
		$("#name").val("");
		$("#title").val("");
		$("#price").val("");
		$("#description").val("");
	},

	create:function(){
		this.mode = 'create';
		this.resetForm();
		
		
		$("#formId").slideDown(500,function(){
			var id = sap.ui.getCore().byId('tableId')._getRowCount();
			$("#id").val(id+1);
		});
		
	},
	
	edit:function(){
		this.mode = 'create';
		this.resetForm();
		
		var oTable = sap.ui.getCore().byId("tableId");
		var selected = oTable.getSelectedIndex();
		
		if(selected == -1){
			alert("please select a row!");
		}else{
			$("#formId").slideDown(500,function(){
				var data = oTable.getModel("products").getData["products("+ selected +")"];
				
				var id = data.id;
				var name = data.name;
				var price = data.price;
				var title = data.title;
				var description = data.description;
				
				$("#id").val(id);
				$("#name").val(name);
				$("#price").val(price);
				$("#title").val(title);
				$("#description").val(description);
				
			});
		}
		
		
	},
	
	removeId:0,
	remove:function(){
		this.mode = 'remove';
		
		var oTable = sap.ui.getCore().byId("tableId");
		var selected = oTable.getSelectedIndex();
		
		if(selected == -1){
			alert("please select a row!");
		}else{
			var data = oTable.getModel("products").oData["products("+ selected +")"];
			
			removeId = data.id;
			this.save();
		}
		
	},
	
	save:function(){
		if(this.mode == 'create'){
			products.product.push({
				id:$("#id").val(),
				name:$("#name").val(),
				title:$("#title").val(),
				description:$("#description").val()
				
			});
		};
			
		if(this.mode == 'edit'){
			
				
		};
			
		if(this.mode == 'remove'){
			
				
		};
		
	}
	
	

});