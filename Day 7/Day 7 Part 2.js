const fs = require('fs');
const puzzleToArray = fs.readFileSync('d7puzzle.txt').toString().split("\n");

function abaChecker(string){
  return string.charAt(0) === string.charAt(2) && string.charAt(0) !== string.charAt(1);
}
function babChecker(string){
  return string.charAt(0) === string.charAt(2) && string.charAt(0) !== string.charAt(1);
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
    console.log(idx)
    var {hypernet,regSequence} = currentIP
    var babArray = [];
    for(var k = 0; k < hypernet.length; k++){
      for(var l = 1; l < hypernet[k].length -3; l++){
        if(babChecker(hypernet[k].substring(l,l+3))){
          console.log(hypernet[k].substring(l,l+3))
          babArray.push(hypernet[k].substring(l,l+3))
        }
      }
    }
    console.log(babArray)
    //then check regSequence
    var abaArray = []
    for(var i = 0; i < regSequence.length; i++){
      for(var j = 0; j < regSequence[i].length -2; j++){
        if(abaChecker(regSequence[i].substring(j,j+3))){
          var aba = regSequence[i].substring(j,j+3)
          abaArray.push(regSequence[i].substring(j,j+3))
          if(babArray.includes(aba[1]+aba[0]+aba[1])){
            return supportTLS + 1
          }
        }
      }
    }
    console.log(abaArray)
    console.log(supportTLS)
    return supportTLS;
  }, 0)
})(puzzleToArray)
