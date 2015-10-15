sap.ui.controller("demo.19", {


	onInit: function() {
	    
	},


	search: function(name, model) {
        var url = "http://itunes.apple.com/search?term="+name;

        $.ajax({
            type: "GET",
            url: url,
            async : false,
            dataType: "jsonp",
            success: function(data) {
                model.setData(data);
                console.log(data);
            }
        });

    },

});