const fs = require('fs');
const puzzleToArray = fs.readFileSync('d7puzzle.txt').toString().split("\n");

function abbaChecker(string){
  //I didn't want to implement a reverse string function. So shoot me.
  return string.charAt(0) === string.charAt(3) && string.charAt(1) === string.charAt(2) && string.charAt(0) !== string.charAt(1);
}


(function supportTLS(ips){
  return ips.map(ip => {
    //break down the ip  and put into obj, organize by hypernet/reg
    var objOfSeq = {
      hypernet: [],
      regSequence: []
    }
    var currStr = "";
    for(var i = 0; i < ips.length; i++){
      if(ip.charAt(i) === "[" || i === ips.length-1){
        objOfSeq.regSequence.push(currStr)
        currStr = "";
      }
        currStr += ip.charAt(i)
      if(ip.charAt(i) === "]"){
        objOfSeq.hypernet.push(currStr)
        currStr = "";
      }
    }
    return objOfSeq
  })
  .reduce((supportTLS, currentIP, idx) =>{
    var {hypernet,regSequence} = currentIP
    //check hypernet first
    for(var i = 0; i < hypernet.length; i++){
      for(var j = 1; j < hypernet[i].length -3; j++){
        if(abbaChecker(hypernet[i].substring(j,j+4))){
          console.log(supportTLS)
          return supportTLS;
        }
      }
    }
    //then check regSequence
    for(var i = 0; i < regSequence.length; i++){

      for(var j = 0; j < regSequence[i].length -2; j++){
        if(abbaChecker(regSequence[i].substring(j,j+4))){
          console.log(supportTLS)
          return supportTLS+1;
        }
      }
    }
    console.log(supportTLS)
    return supportTLS;
  }, 0)
})(puzzleToArray)
