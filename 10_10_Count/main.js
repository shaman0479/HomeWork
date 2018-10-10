function countBs(str) {
  var result = 0;
  
  for(var i = 0; i < str.length; i++){
    if(str.charAt(i).toLowerCase() === 'b') {
      result++;
    }
  }
  
  return result;
}

console.log(countBs('Many desktop publishing packages and web page editors'));


function  countChar(str, symbol) {
  var result = 0;
  
  for(var i = 0; i < str.length; i++) {
    if(str.charAt(i).toLowerCase() === symbol) {
      result++;
    }
  }
  
  return result;
}

console.log(countChar('Many desktop publishing packages and web page editors', 'i'));