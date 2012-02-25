function initialize() {
    var myOptions = {
        center: new google.maps.LatLng(39.99791,-75.15398),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        myOptions);
    
    return map;
}

var active_layers = []; // keep 

function addLayer(options, map) {
    active_layers[options['name']] = new google.maps.KmlLayer(options['feed']);
    active_layers[options['name']].setMap(map);
}

function removeLayer(options, map) {
    active_layers[options['name']].setMap(null);
}
