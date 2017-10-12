$(document).ready(function() {

  $('#moose').draggable({
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
      case "moose":
        image = 'images/moose-red.svg'
        break;
      case "bubble2":
        image = 'red';
        break;
    }
    console.log(image)
    var body = $('body');
    $('#onesie-design').attr("src", image);
    // $('#container').css("background-size", "50%");
}

})
