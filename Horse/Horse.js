import { renderHorseList, renderOneHorse } from "./utilities.js";
export default class Horse {
  constructor(elementId) {
    this.parentElement = elementId;
    this.horseList = [];
  }

  //Returns the array of horses
  getAllHorses() {
    return this.horseList;
  }

  //Takes the ID for a single horse and returns that horse from the array
  getHorseById(horseId) {
    return this.getAllHorses().find(horse => horse.id.toString() === horseId);
  }

  //Displays the horse list, calls the setter for event listeners
  // on the horse list, and saves the horse list.
  displayHorseList() {
    this.parentElement.innerHTML = '';
    renderHorseList(this.parentElement, this.getAllHorses());
    this.addHorseListener();
    this.saveHorse();
  }

  //sets a listener for each list item being displayed
  addHorseListener() {
    const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach(child => {
      child.addEventListener('touchend', e => {
        this.selectEvent(e);
      });
    });
  }  

  //Create a new horse
  addHorse() {
    let form = document.getElementById('newHorse');
    console.log(form.elements);

    
    //document.getElementById('makeHorse').style.display = 'none';
    /*const horse = {
      id: + new Date(),
      name: form.elements[0],
      damColor: form.elements[1],
      damPattern: form.elements[2],
      damGray: form.elements[3],
      sireColor: form.elements[4],
      sirePattern: form.elements[5],
      sireGray: form.elements[6]
    };*/

    //console.log(horse);
    //this.horseList.push(horse);
    //document.getElementById('add').value = '';
  }

  //Mark a horse as "Completed"
  completeHorse(checked, horseid) {
    (checked? this.getHorseById(horseid).completed = false 
    : this.getHorseById(horseid).completed = true)
  }
  
  //Delete a horse
  deleteHorse(horseid) {
    this.horseList.splice(this.horseList.indexOf(this.getHorseById(horseid)),1);
  }

  //Save the array of horses into localStorage memory
  saveHorse() {
    localStorage.setItem('horseList', JSON.stringify(this.horseList));
  }

  //Load the array of horses from localStorage memory
  loadHorse() {
    this.horseList = JSON.parse(localStorage.getItem('horseList'));
  }
};

