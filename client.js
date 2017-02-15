$(document).ready(function(){
  console.log('jQuery is ready to go!'); // log to say we're ready
  var colorArray = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'blue']; // colors to use later

  // Loops through all of the colors
  for (var i = 0; i < colorArray.length; i++) {
      // Adding a new block
      var newColorBlock = $('<div>'); // Empty div - Not added to page yet
      newColorBlock.css('background-color', colorArray[i]); // Adds a color to the empty div (the ith color)
      newColorBlock.addClass('colorBlock'); // Adds a class to the empty div - gives it height and width
      $('#colorBlockContainer').append(newColorBlock); // Add the div to the dom
  }

  // Select a random color and add it to the DOM
  var randomNumberSelected = randomNumber(0, colorArray.length - 1); // get random number from 0 through 4 (for now)
  var randomColor = colorArray[randomNumberSelected]; // uses randomNumberSelected (0-4), to pick a color from colorArray
  $('#userColorPrompt').text(randomColor);


});

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
