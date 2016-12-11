var md5 = require('js-md5');
var password = "";
var i = 0;
while(password.length<8){
  var hash = md5("ffykfhsq" + i)
  if(hash.substring(0,5) === "00000")
    {
      console.log(hash)
      password += hash.charAt(5)
      console.log("Hit", password)
    }
  i++
}
