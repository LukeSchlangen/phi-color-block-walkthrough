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


});
