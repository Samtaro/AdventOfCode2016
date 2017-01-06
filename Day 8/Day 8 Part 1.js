const fs = require('fs');
const puzzleToArray = fs.readFileSync('d8puzzle.txt').toString().split("\r\n");
//separate instrs into objects
var puzzleToObjects = puzzleToArray.map(function(instr){
  var instrObj = {};
  instrObj.action = instr.substring(0, instr.indexOf(" "))
  if(instrObj.action === "rect"){
      instrObj.width = instr.substring(instr.indexOf(" ")+1, instr.indexOf("x"));
      instrObj.height = instr.substring(instr.indexOf("x")+1)
  }
  else{
    instrObj.shiftOn = instr.substring(instr.indexOf(" ")+1, instr.indexOf(" ", instr.indexOf(" ")+1))
    if(instrObj.shiftOn === "row"){
      instrObj.row = instr.substring(instr.indexOf("y=")+2,instr.indexOf("by")-1)
    }
    else{
      instrObj.col = instr.substring(instr.indexOf("x=")+2,instr.indexOf("by")-1)
    }
    instrObj.shiftBy = instr.substring(instr.indexOf("by ")+3)
  }
  return instrObj;
})

//make an array to represent the screen: 50wide(width), 6 tall(height)
var screen = new Array(6)
for(var i=0; i<screen.length; i++){
  var screenRow = new Array(50);
  for(var j=0; j<screenRow.length; j++){
    screenRow[j] = 0
  }
  screen[i] = screenRow;
}

function horToVer(multiDArray){
  return multiDArray.reduce(function(finArr, curArr, idx){
    finArr = finArr || []
    for(var i=0; i<curArr.length; i++){
      if(!finArr[i]){
        finArr.push([curArr[i]])
      }
      else{
        finArr[i].push(curArr[i])
      }
    }
    return finArr
  }, [])
}

//Do the screen transformations
puzzleToObjects.forEach(function(instr, idx){
  if(instr.action === "rect"){
    for(var row = 0; row<instr.height; row++){
      for(var col = 0; col<instr.width; col++){
          screen[row][col] = 1;
        }
    }
  }
  else{
    var {shiftOn, shiftBy} = instr;
    if(shiftOn === "row"){
      var {row} = instr;
      screen[row] = screen[row].slice(50 - parseInt(shiftBy)).concat(screen[row].slice(0, 50 - parseInt(shiftBy)))
    }
    else if(shiftOn ==="column"){
      var {col} = instr;
      var tempScreen = horToVer(screen);
      tempScreen[col] = tempScreen[col].slice(6 - parseInt(shiftBy)).concat(tempScreen[col].slice(0, 6 - parseInt(shiftBy)))
      screen = horToVer(tempScreen)
    }
  }
})
//Find out how many pixels on the screens are 1s(active)
var activePixels = screen.reduce(function(active, currLine, idx){
  var activeInLine = 0;
  for(var i=0; i<currLine.length; i++){
    activeInLine+= currLine[i]
  }
  return active + activeInLine

}, 0)
console.log(activePixels)
