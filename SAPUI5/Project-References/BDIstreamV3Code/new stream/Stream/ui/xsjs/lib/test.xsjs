var b = $.import("sap.rds-bdi.stream.ui.xsjs.lib","core");
$.response.setBody(JSON.stringify(b.process($.request.queryPath, $.request.parameters)));