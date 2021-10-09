var vg_1 = "currentwork.vg.json";
var vg_2 = "combinedstacks.vg.json";
var vg_3 = "worldmapmichelin.vg.json";

vegaEmbed("#worldmap2018-2019", vg_1).then(function(result) {}).catch(console.error);

vegaEmbed("#combinedstacks", vg_2).then(function(result){}).catch(console.error);

vegaEmbed("#worldmapmichelin", vg_3).then(function(result){}).catch(console.error);