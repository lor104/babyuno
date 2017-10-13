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
  $('#color-red').draggable({
    containment: "window",
    zIndex : "1",
    revert : true
  });
  $('#color-yellow').draggable({
    containment: "window",
    zIndex : "1",
    revert : true
  });
  $('#color-purple').draggable({
    containment: "window",
    zIndex : "1",
    revert : true
  });
  $('#color-green').draggable({
    containment: "window",
    zIndex : "1",
    revert : true
  });

  $('#container').droppable({
    accept: '.drop',
    drop: function(event,ui) {
      fillContainer( ui.draggable );
    }
  })

var design;
function fillContainer( $item ) {
    var image;

    var imageTag = $item.context.id;
    var element = document.getElementById(imageTag);
    // console.log(element)
    console.log("Is this a color: " + element.classList.contains("color"));
    console.log("Is this a icon: " + element.classList.contains("icon"));

    if (element.classList.contains("icon")) {
      switch (imageTag) {
        case "icon-moose":
          image = 'images/moose-red.svg';
          design = 'moose';
          break;
        case "icon-owl":
          image = 'images/owl-purple.svg';
          design = 'owl';
          break;
        case "icon-pig":
          image = 'images/pig-red.svg';
          design = 'pig';
          break;
        case "icon-trex":
          image = 'images/trex-green.svg';
          design = 'trex';
          break;
        case "icon-monkey":
          image = 'images/monkey-purple.svg';
          design = 'monkey';
          break;
        case "icon-sheep":
          image = 'images/sheep-yellow.svg';
          design = 'sheep';
          break;
      }
    var body = $('body');
    console.log(design)
    $('#onesie-design').attr("src", image);
  }
  if (element.classList.contains("color")) {
    console.log("this is a color");
    console.log(imageTag)
    if (imageTag === "color-red") {
      switch (design) {
        case "moose":
          image = "images/moose-red.svg";
          break;
        case "owl":
          image = "images/owl-red.svg";
          break;
        case "pig":
          image = "images/pig-red.svg";
          break;
        case "trex":
          image = "images/trex-red.svg";
          break;
        case "monkey":
          image = "images/monkey-red.svg";
          break;
        case "sheep":
          image = "images/sheep-red.svg";
          break;
      }
    } else if (imageTag === "color-yellow") {
      switch (design) {
        case "moose":
          image = "images/moose-yellow.svg";
          break;
        case "owl":
          image = "images/owl-yellow.svg";
          break;
        case "pig":
          image = "images/pig-yellow.svg";
          break;
        case "trex":
          image = "images/trex-yellow.svg";
          break;
        case "monkey":
          image = "images/monkey-yellow.svg";
          break;
        case "sheep":
          image = "images/sheep-yellow.svg";
          break;
      }
    } else if (imageTag === "color-green") {
      switch (design) {
        case "moose":
          image = "images/moose-green.svg";
          break;
        case "owl":
          image = "images/owl-green.svg";
          break;
        case "pig":
          image = "images/pig-green.svg";
          break;
        case "trex":
          image = "images/trex-green.svg";
          break;
        case "monkey":
          image = "images/monkey-green.svg";
          break;
        case "sheep":
          image = "images/sheep-green.svg";
          break;
      }
    } else if (imageTag === "color-purple") {
      switch (design) {
        case "moose":
          image = "images/moose-purple.svg";
          break;
        case "owl":
          image = "images/owl-purple.svg";
          break;
        case "pig":
          image = "images/pig-purple.svg";
          break;
        case "trex":
          image = "images/trex-purple.svg";
          break;
        case "monkey":
          image = "images/monkey-purple.svg";
          break;
        case "sheep":
          image = "images/sheep-purple.svg";
          break;
      }
    }
    var body = $('body');
    console.log(design)
    $('#onesie-design').attr("src", image);
  }
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
