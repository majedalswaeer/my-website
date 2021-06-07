// var CEO = "majed";
// console.log(CEO);
// document.write("<p style= 'color:green;'> CEO is an unknown lie unless you can believe him ALSO " + CEO + " IS UNREAL because if u didnt believe the last words majed will be real, Welcome to the place that dosent exist, ENJOY OUR FAKE WEBSITE WHICH SALES everything real :) </p>")

// alert("THIS WEBSITE BELONGS TO NONE, UNLESS YOU CAN ENTER IT")
///
//majed=0;
//if (CEO == majed) {
///alert("Good for u")
//} else {

//alert("Great for me")
//}

//prompt("Please enter my name", "majed, already did :) ");

// lec6
// logical operators
// and, or , not
//if (CEO<=25 || CEO=25)
// || MEANS or
// loops
//if (var i=1;i<5;i++) {
//console.log(i);
//}
///
//while (plant != "Jade Plant" && plant != "Aloe Vera" && plant != "Passion Flower") {

/// plant = prompt("please enter on of : Jade Plant, Aloe Vera, Passion Flower");
//}
//document.write("<img src='https://www.mssdefence.com/wp-content/uploads/2016/11/Discount-Action-Mss-Defence.png'/>")
//____________________________________________________

//var plant = prompt("whats your fav plant, choose one and get a discount ? : Jade Plant, Aloe Vera, Passion Flower ");

//for (var i=0;i<5;){
//document.write("<img //src='https://www.mssdefence.com/wp-content/uploads/2016/11/Discount-Action-Mss-Defence.png'/>")
//}
//x=5;
//if (plant=="Jade Plant" || plant=="Aloe Vera" || plant=="Passion Flower"){
//console.log(plant:);
//} else {
//  plant = prompt("please enter one of these options:Jade Plant, Aloe Vera, Passion Flower ");
// console.log(plant:)
//}
//____________________________________________________

var plant = prompt("think about a good DEAL");

function plantfunc() {
  for (var i = 0; i<plant ; i++) {
    document.write("<img src='https://www.mssdefence.com/wp-content/uploads/2016/11/Discount-Action-Mss-Defence.png'/>")
  }


  var plant = prompt("whats your fav plant, choose one and get a discounts ? : Jade Plant, Aloe Vera, Passion Flower ");

  while (plant != "Jade Plant" && plant != "Aloe Vera" && plant != "Passion Flower") {
    plant = prompt("please enter one of these options:Jade Plant, Aloe Vera, Passion Flower ");
  }
  document.write("<img src='https://www.mssdefence.com/wp-content/uploads/2016/11/Discount-Action-Mss-Defence.png'/>")
}
plantfunc()








