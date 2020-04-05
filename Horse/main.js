import Horse from "./Horse.js";
import User from "./User.js";

const myHorse = new Horse(document.querySelector('#horses'));
const user = new User();


//on load grab the username and array and insert it into the page
window.addEventListener("load", () => {
if (localStorage.hasOwnProperty('horseList')) {
  myHorse.loadHorse();
}
  document.querySelector('#user').innerHTML = user.loadUsername();
  myHorse.renderHorseList(document.querySelector('#horses'));
});

//set a listener for the user to open the menu
document.querySelector('#menuButton').addEventListener("click", () => {
  document.querySelector('#menu').classList.toggle('show');
  document.querySelector('#menuButton').classList.toggle('active');
});

document.querySelector('#addUser').addEventListener("click", () => {
  document.querySelector('#menu').classList.toggle('show');
  document.querySelector('#menuButton').classList.toggle('active');
  document.querySelector('#user').innerHTML = user.changeUsername();
});

//set a listener for the user to add a new horse
document.querySelector('#addButton').addEventListener("click", () => {
  document.querySelector('#makeHorse').classList.toggle('show');
  document.querySelector('#main').classList.toggle('show'); 
  document.querySelector('#rot').classList.toggle('cancel');
});

//set listener for user to add horse from menu
document.querySelector('#add').addEventListener('click', () => {
  document.querySelector('#makeHorse').classList.toggle('show');
  document.querySelector('#menu').classList.toggle('show');
  document.querySelector('#menuButton').classList.toggle('active');
  document.querySelector('#main').classList.toggle('show');  
  document.querySelector('#rot').classList.toggle('cancel');
});

document.querySelector('#submitForm').addEventListener('click', () => {
  myHorse.addHorse();
});

function openNav() {
  document.querySelector("#mySidenav").style.width = "250px";
  document.querySelector("#main").style.marginLeft = "250px";
}

function closeNav() {
  document.querySelector("#mySidenav").style.width = "0";
  document.querySelector("#main").style.marginLeft= "0";
}