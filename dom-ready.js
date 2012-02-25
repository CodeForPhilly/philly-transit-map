$(document).ready(function() {
  var map = initialize();

  var container = $('.container');
    $('#toggle_sidebar').toggle(
      function(){
      container.addClass('open');
      $("#map_canvas").css({height:$(".contents").height()}).css({width:$(".contents").width()});
    }, function(){
      container.removeClass('open');
      $("#map_canvas").css({height:$(".contents").height()}).css({width:$(".contents").width()});
    });

  $('.sidebar input').checked = false;

  $('.sidebar input').live("change", function(){
    var options = {
        feed: $(this).attr("data-layer-url"),
        name: $(this).attr("data-layer-name"),
        type: $(this).attr("data-layer-type")
    };

    if (this.checked) {
      if (options.type === "cameras") {
        addPennDOTCameras(map);
      } else if (options.type === "points") {
        addPointSet(options, map);
      } else {
        addLayer(options, map);
      }
    } else {
      if (options.name === "penndot-cameras") {
          removePennDOTCameras(map);
      } else {
          removeLayer(options, map);
      }
    }

  })


});
