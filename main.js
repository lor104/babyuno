$(document).ready(function() {

  $('#bubble1').draggable({
    containment: "window",
    zIndex : "1",
    revert : "invalid"
  });
  $('#bubble2').draggable({
    containment: "window",
    zIndex : "1",
    revert : "invalid"
  });

  $('#container').droppable({
    accept: '.bubble',
    drop: function(event,ui) {
      ui.draggable.fadeOut(function() {
        ui.draggable.remove();
      })
    }
  })

})
