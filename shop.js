$(document).ready(function() {

  // click on colour
  // design for onesie changes colour

  //when colour is clicked - must find out which design the colour is changing
  //change only that design colour


  function fillColour( $icon ) {
    var onesie; //onesie is the deisgn container
    var design; // actual design image
    var color; //design color clicked

    design = $icon.id.split("-")[0];
    color = $icon.id.split("-")[1];


    if (design == "trex") {
      switch (color) {
        case "green":
          image = 'images/trex-green.svg';
          // console.log($icon.style = 'font-weight: bold;')
          break;
        case "blue":
          image = 'images/trex-blue.svg';
          break;
        case "purple":
          image = 'images/trex-purple.svg';
          break;
        case "yellow":
          image = 'images/trex-yellow.svg';
          break;
        case "pink":
          image = 'images/trex-pink.svg';
          break;
        case "red":
          image = 'images/trex-red.svg';
          break;
      }

      $('#trex-image').attr("src", image);
    }
  }

  function handleColourClick (event) {
    event.preventDefault();
    fillColour (this)
  }

const colorLinks = document.querySelectorAll('.colors a');
colorLinks.forEach(color => color.addEventListener("click", handleColourClick))

})
