var md5 = require('js-md5');
var password = new Array(8)
var counter =0;
var i = 0;
while(counter <8){
  var hash = md5("ffykfhsq" + i)
  if(hash.substring(0,5) === "00000" && parseInt(hash.charAt(5)) <= 7 && !password[parseInt(hash.charAt(5))]){
        // console.log(hash)
        password[parseInt(hash.charAt(5))] = (hash.charAt(6))
        // console.log("Hit", password)
        counter++
    }
  i++
}
console.log(password.join().replace(/[,]/g, ""))
