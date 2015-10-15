sap.ui.controller("sap.stream.mostVisitedPages.columnChart", {

    onInit: function(){
        this.model = new sap.ui.model.json.JSONModel({
            BusinessData: [
                {name: "About us", data: 600},
                {name: "Blog", data: 1300},
                {name: "Events", data: 270},
                {name: "News", data: 470},
                {name: "Services", data: 800},
            ]
        });

        this.dataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [{   
                axis: 1,
                name: "name",
                value: "{name}"
            }],
            measures: [{
                name: "data",
                value: "{data}"
            }],
            data: {
                path: "/BusinessData"
            }
        });

        this.columnChart.setModel(this.model);
        this.columnChart.setDataset(this.dataset);

        var oXAxis = new sap.viz.ui5.types.Axis({
            title: new sap.viz.ui5.types.Axis_title({
                text: ' '
            })
        });
        oXAxis.getAxisline().setVisible(false);
        oXAxis.getAxisTick().setVisible(false); 

        this.columnChart.setXAxis(oXAxis);

    }
});