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
    var image;
    var imageTag = $item.context.id

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
    var body = $('body');
    $('#onesie-design').attr("src", image);
}

$('#icon-moose').mouseover(function() {$('#border-moose').toggleClass("active-rotate")});

$('#icon-moose').mouseleave(function() {$('#border-moose').toggleClass("active-rotate")})

$('#icon-owl').mouseover(function() {$('#border-owl').toggleClass("active-rotate")});

$('#icon-owl').mouseleave(function() {$('#border-owl').toggleClass("active-rotate")})

$('#icon-pig').mouseover(function() {$('#border-pig').toggleClass("active-rotate")});

$('#icon-pig').mouseleave(function() {$('#border-pig').toggleClass("active-rotate")})

$('#icon-trex').mouseover(function() {$('#border-trex').toggleClass("active-rotate")});

$('#icon-trex').mouseleave(function() {$('#border-trex').toggleClass("active-rotate")})

$('#icon-monkey').mouseover(function() {$('#border-monkey').toggleClass("active-rotate")});

$('#icon-monkey').mouseleave(function() {$('#border-monkey').toggleClass("active-rotate")})

$('#icon-sheep').mouseover(function() {$('#border-sheep').toggleClass("active-rotate")});

$('#icon-sheep').mouseleave(function() {$('#border-sheep').toggleClass("active-rotate")})
})
