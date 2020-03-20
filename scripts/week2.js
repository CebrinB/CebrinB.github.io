function display(text) {
  document.getElementById("result").innerHTML = text.value; 
}


function sum(digit, result) {
  let sum = 0;
  for (i = 0; i <= digit.value; i++) {
    sum = sum + i;
  }

  document.getElementById("result").innerHTML = sum;
}

function add(digit, digit2, result) {

  let sum = (Number(digit.value) + (Number(digit2.value)));
  
  document.getElementById("result").innerHTML = sum;
}

document.getElementById("multiply").addEventListener("click", multiply);
var multiply = function () { let num = 1; document.getElementById("result").innerHTML = num; return num;}
