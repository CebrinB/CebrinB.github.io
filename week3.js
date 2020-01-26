let calculator = {

  first: "0",
  second: "0",
  add: "0",
  multiplied: "0",

  //prompts for two values and saves them as object properties
  read() {
    calculator.first = document.getElementById("first").value;
    calculator.second = document.getElementById("second").value;

    console.log(calculator.first);
    console.log(calculator.second);
  }, 
  
  //returns the sum of saved values
  sum() {
    calculator.add = +calculator.first + +calculator.second;
    document.getElementById("read").style.display = "none";
    document.getElementById("add").style.display = "block";
    document.getElementById("mul").style.display = "none";
    document.getElementById("add").innerHTML = calculator.add;
  },
  
  //multiplies saved values and returns the result
  mul() {
    document.getElementById("read").style.display = "none";
    document.getElementById("add").style.display = "none";
    document.getElementById("mul").style.display = "block";

    calculator.multiplied = calculator.first * calculator.second;
    document.getElementById("mul").innerHTML = calculator.multiplied;

  } 
};

function prompt() {
  document.getElementById("read").style.display = "block";
  document.getElementById("add").style.display = "none";
  document.getElementById("mul").style.display = "none";
}