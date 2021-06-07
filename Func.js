// way onefunction decleration
function add(x,y){
 var result= x+y;
 return result;
}
var result2 = add(3,5));
document.write("<p>"+ result2 + "</p>")

//way2 function expression
var sub = function(x,y){
  var result = x-y;
  return result
}
//console.log(sub(9,3))

var firstNum = 10;
var secondNum = 5 ;

var addOutput= add(firstNum,secondNum);
var subOutput = sub(firstNum,secondNum);
console.log(addOutput,subOutput);

