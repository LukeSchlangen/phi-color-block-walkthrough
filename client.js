$(document).ready(function(){
  console.log('jQuery is ready to go!'); // log to say we're ready
  var colorArray = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'blue']; // colors to use later

  // Loops through all of the colors
  for (var i = 0; i < colorArray.length; i++) {
      // Adding a new block
      var newColorBlock = $('<div>'); // Empty div - Not added to page yet
      newColorBlock.css('background-color', colorArray[i]); // Adds a color to the empty div (the ith color)
      newColorBlock.addClass('colorBlock'); // Adds a class to the empty div - gives it height and width
      newColorBlock.data('colorOfBlock', colorArray[i]); // Adds information to the DOM without showing it to the user
      $('#colorBlockContainer').append(newColorBlock); // Add the div to the dom
  }

  $('#colorBlockContainer').on('click', '.colorBlock', function(){ // event listener
    console.log('$(this).data().colorOfBlock : ', $(this).data().colorOfBlock);
    var colorOfBlockSelected = $(this).data().colorOfBlock;
    if(randomColor == colorOfBlockSelected) {
      $('#responseSection').text('You got it!');
    } else {
      $('#responseSection').text('Oh no... that is not right');
    }
  });

  // Select a random color and add it to the DOM
  var randomNumberSelected = randomNumber(0, colorArray.length - 1); // get random number from 0 through 4 (for now)
  var randomColor = colorArray[randomNumberSelected]; // uses randomNumberSelected (0-4), to pick a color from colorArray
  $('#userColorPrompt').text(randomColor);


});

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
