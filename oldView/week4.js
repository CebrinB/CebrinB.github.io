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

const b = document.getElementById("values");
b.addEventListener("click", ask);

const e = document.getElementById("enter");
e.addEventListener("click", calculator.read);

const c = document.getElementById("button2");
c.addEventListener("click", calculator.sum);

const d = document.getElementById("button3");
d.addEventListener("click", calculator.mul);

function ask() {
  document.getElementById("read").style.display = "block";
  document.getElementById("add").style.display = "none";
  document.getElementById("mul").style.display = "none";
}