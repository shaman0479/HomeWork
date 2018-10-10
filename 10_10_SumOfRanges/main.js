range = function (a, b, step){
  if(!step) step = 1;
  var range = [];
  if(a<b){
    for (var i = a; i<=b; i+=step)
      range.push(i);
  }else{
    for (var i = a; i>=b; i+=step)
      range.push(i);
  }
  return range;
};


sum = function(range){
  var sum = 0;
  for (var i = 0; i<=range.length; i++)
    sum +=i;
  return sum;
  
};
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

//function range(start, end, step) {
//  if (step == null) step = 1;
//  var array = [];
//
//  if (step > 0) {
//    for (var i = start; i <= end; i += step)
//      array.push(i);
//  } else {
//    for (var i = start; i >= end; i += step)
//      array.push(i);
//  }
//  return array;
//}
//
//function sum(array) {
//  var total = 0;
//  for (var i = 0; i < array.length; i++)
//    total += array[i];
//  return total;
//}
//
//console.log(sum(range(1, 10)));
//// → 55
//console.log(range(5, 2, -1));
//// → [5, 4, 3, 2]