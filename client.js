var colorArray = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'blue', 'red', 'pink']; // colors to use later
var randomColor = '';

var numberOfColors = 3;

$(document).ready(function(){
  console.log('jQuery is ready to go!'); // log to say we're ready
  addBlocksToPage();

  $('#colorBlockContainer').on('click', '.colorBlock', function(){ // event listener
    // console.log('$(this).data().colorOfBlock : ', $(this).data().colorOfBlock);
    var colorOfBlockSelected = $(this).data().colorOfBlock;
    if(randomColor == colorOfBlockSelected) {
      // The user got it right
      $('#responseSection').text('You got it!');
      chooseNewRandomColor();
    } else {
      $('#responseSection').text('Oh no... that is not right');
    }

  });

  $('#addColorButton').on('click', function() {
    numberOfColors++;
    addBlocksToPage();
  });

  $('#removeColorButton').on('click', function() {
    numberOfColors--;
    addBlocksToPage();
  });

  function chooseNewRandomColor(){
    // Select a random color and add it to the DOM
    var randomNumberSelected = randomNumber(0, numberOfColors - 1); // get random number from 0 through 4 (for now)
    randomColor = colorArray[randomNumberSelected]; // uses randomNumberSelected (0-4), to pick a color from colorArray
    $('#userColorPrompt').text(randomColor);
  }

  function addBlocksToPage() {
    $('#colorBlockContainer').empty(); // clears all blocks before adding new ones
    // Loops through all of the colors
    for (var i = 0; i < numberOfColors; i++) {
      // Adding a new block
      var newColorBlock = $('<div>'); // Empty div - Not added to page yet
      newColorBlock.css('background-color', colorArray[i]); // Adds a color to the empty div (the ith color)
      newColorBlock.addClass('colorBlock'); // Adds a class to the empty div - gives it height and width
      newColorBlock.data('colorOfBlock', colorArray[i]); // Adds information to the DOM without showing it to the user
      $('#colorBlockContainer').append(newColorBlock); // Add the div to the dom
    }
    chooseNewRandomColor();
  }

});

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}
