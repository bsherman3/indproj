/* created a page for the calculation to occur on the orders page */ 

/* made an array below for the orders page */

var products = ["New York Yankees Jersey $100.00" , "New York Giants Jersey $100.00", "New York Knicks T-shirt $30.00", "New York Jets Hat $35.00", "Brooklyn Nets Beanie $20.00"];


var labels = document.getElementsByTagName("label");
// function to generate list from array 

  function processProducts() {
    for (var i=0; i < 5; i++) {
      labels[i].innerHTML=products[i]; 
    }
}
if (window.addEventListener){
    window.addEventListener("load", processProducts, false);
  } else if (window.attachEvent) {
      window.attachEvent("onload", processProducts);
  }
  
 
// function to calculate total $

function calcTotal(){

  var itemTotal = 0
  var salesRate = .06 // stores the sales rate
  var items = document.getElementsByTagName("input"); 
  
  for (var i=0; i<5; i++) { 
    if(items[i].checked){
      itemTotal += (items[i].value * 1);
    }
    }
  
  itemTotal *= 1+ salesRate;
  document.getElementById("total").innerHTML = "Your order total is $" + itemTotal.toFixed(2); 
 
}
// calls the function
var submitButton = document.getElementById("sButton");
submitButton.addEventListener("click", calcTotal);

 