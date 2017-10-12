$(document).ready(function() {

  $('#icon-moose').draggable({
    containment: "window",
    zIndex : "1",
    revert : true
  });
  $('#icon-owl').draggable({
    containment: "window",
    zIndex : "1",
    revert : true
  });
  $('#icon-pig').draggable({
    containment: "window",
    zIndex : "1",
    revert : true
  });
  $('#icon-trex').draggable({
    containment: "window",
    zIndex : "1",
    revert : true
  });
  $('#icon-monkey').draggable({
    containment: "window",
    zIndex : "1",
    revert : true
  });
  $('#icon-sheep').draggable({
    containment: "window",
    zIndex : "1",
    revert : true
  });

  $('#container').droppable({
    accept: '.icon',
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
      case "icon-moose":
        image = 'images/moose-red.svg'
        break;
      case "icon-owl":
        image = 'images/owl-purple.svg'
        break;
      case "icon-pig":
        image = 'images/pig-red.svg'
        break;
      case "icon-trex":
        image = 'images/trex-green.svg'
        break;
      case "icon-monkey":
        image = 'images/monkey-purple.svg'
        break;
      case "icon-sheep":
        image = 'images/sheep-yellow.svg'
        break;
    }
    console.log(image)
    var body = $('body');
    $('#onesie-design').attr("src", image);
    // $('#container').css("background-size", "50%");
}

})
