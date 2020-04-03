import Horse from "./Horse.js";
import { } from "./utilities.js";

const myHorse = new Horse(document.getElementById('horses'));


//on load grab the array and insert it into the page
window.addEventListener("load", () => {
if (localStorage.hasOwnProperty('horseList')) {
  myHorse.loadHorse();
}
  //loadUser();
  myHorse.displayHorseList();
});

//set a listener for the user to open the menu
document.getElementById('menuButton').addEventListener("click", () => {
  //toggleMenu(myHorse);
  document.querySelector('#menu').classList.toggle('show');
  document.querySelector('#menuButton').classList.toggle('active');
});

//set a listener for the user to add a new horse
document.getElementById('addButton').addEventListener("click", () => {
  document.querySelector('#makeHorse').classList.toggle('show'); 
  document.querySelector('#rot').classList.toggle('cancel');
  renderColors()
});

document.getElementById('submitForm').addEventListener('click', () => {
  myHorse.addHorse();
});