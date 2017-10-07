$(document).ready(function() {

  $('#bubble1').draggable({
    containment: "window",
    zIndex : "1",
    revert : true
  });
  $('#bubble2').draggable({
    containment: "window",
    zIndex : "1",
    revert : true
  });

  $('#container').droppable({
    accept: '.bubble',
    drop: function(event,ui) {
      fillContainer( ui.draggable );
    }
  })

function fillContainer( $item ) {
    var colour = $item.css("background-color");
    var body = $('body');
    $('#container').css("background-color", colour);
}

})
