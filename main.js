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
    // var image = $item.css("background");
    var image;
    var imageTag = $item.context.id
    console.log($item.context.id)

    switch (imageTag) {
      case "bubble2":
        image = 'url("moose.png") no-repeat 25%'
        break;
      case "bubble1":
        image = 'red';
        break;
    }
    console.log(image)
    var body = $('body');
    $('#container').css("background", image);
}

})
