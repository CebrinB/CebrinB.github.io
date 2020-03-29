import Horse from "./Horse.js";
import { openMenu, selectEvent, showCreateHorse } from "./utilities.js";

const myHorse = new Horse(document.getElementById('horses'));

//on load grab the array and insert it into the page
window.addEventListener("load", () => {
if (localStorage.hasOwnProperty('horseList')) {
  myHorse.loadHorse();
}
myHorse.displayHorseList();
});

//set a listener for the user to open the menu
document.getElementById('menuButton').addEventListener("click", openMenu);

//set a listener for the user to add a new horse
document.getElementById('addButton').addEventListener("click", showCreateHorse);

document.getElementById('submitForm').addEventListener('click', myHorse.addHorse);