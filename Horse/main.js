import Horse from "./Horse.js";
import User from "./User.js";

const myHorse = new Horse(document.getElementById('horses'));
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
document.getElementById('menuButton').addEventListener("click", () => {
  document.querySelector('#menu').classList.toggle('show');
  document.querySelector('#menuButton').classList.toggle('active');
});

//set a listener for the user to add a new horse
document.getElementById('addButton').addEventListener("click", () => {
  document.querySelector('#makeHorse').classList.toggle('show');
  document.querySelector('#main').classList.toggle('show');  
  document.querySelector('#rot').classList.toggle('cancel');
});

document.getElementById('submitForm').addEventListener('click', () => {
  myHorse.addHorse();
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}