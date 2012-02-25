$(document).ready(function() {
  var map = initialize();
  console.log(map);
  var container = $('.container');
    $('#toggle_sidebar').toggle(
      function(){
      container.addClass('open');
      $("#map_canvas").css({height:$(".contents").height()}).css({width:$(".contents").width()});
    }, function(){
      container.removeClass('open');
      $("#map_canvas").css({height:$(".contents").height()}).css({width:$(".contents").width()});
    });

  $('.sidebar li a').live("click", function(){
    var options = {
        feed: $(this).attr("data-layer-url"),
        name: $(this).attr("data-layer-name")
    };
    toggleLayer(options, map);
  })


});