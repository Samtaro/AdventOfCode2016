const fs = require('fs');
const puzzleToArray = fs.readFileSync('d9puzzle.txt').toString();

(function decompressedLength(puzzle){
  var decompressedString = "";
  var counter = 0;
  while(counter < puzzle.length){
    if(puzzle.charAt(counter) === "(" ){
      var marker = puzzle.substring(counter, puzzle.indexOf(")", counter)+1)
      var numberOfLetters = parseInt(marker.substring(1, marker.indexOf("x")))
      var repeatTimes = parseInt(marker.substring(marker.indexOf("x")+1, marker.length-1))
      var repeatedString = puzzle.substr(puzzle.indexOf(")", counter)+1, numberOfLetters);

      for(var i = 0; i<repeatTimes; i++){
        decompressedString += repeatedString
      }
      counter = puzzle.indexOf(")", counter) + numberOfLetters +1
    }
    else{
      decompressedString += puzzle.charAt(counter)
      counter++
    }
  }
  console.log(decompressedString.trim().length)
})(puzzleToArray)
