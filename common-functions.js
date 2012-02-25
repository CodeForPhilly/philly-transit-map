var active_layers = [];

function getWindowHeight() {
    if (window.self&&self.innerHeight) {
        return self.innerHeight;
    }
    if (document.documentElement&&document.documentElement.clientHeight) {
        return document.documentElement.clientHeight;
    }
    return 0;
}

function resizeMapDiv() {
    //Resize the height of the div containing the map.
    //Do not call any map methods here as the resize is called before the map is created.
	var d=document.getElementById("map_canvas");
    var offsetTop=0;
    for (var elem=d; elem!=null; elem=elem.offsetParent) {
        offsetTop+=elem.offsetTop;
    }
    var height=getWindowHeight()-offsetTop-16;
    if (height>=0) {
        d.style.height=height+"px";
    }
    //map.setCenter(new GLatLng(lat,lon),18);
}

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

function toggleLayer(options, map) {
    var layer = new google.maps.KmlLayer(options['feed']);
    var name = options['name'];
    if (!$.inArray(name, active_layers)) {
        //active_layers.splice( $.inArray(name, active_layers), 1 );
        active_layers.remove(name);
        layer.setMap();
        console.log('not active');
    } else {
        active_layers.push(name);
        layer.setMap(map);
        console.log('active');

    }
    console.log(active_layers);
}

Array.prototype.remove = function(v) { this.splice(this.indexOf(v) == -1 ? this.length : this.indexOf(v), 1); }

