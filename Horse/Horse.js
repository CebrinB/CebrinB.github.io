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

  //evaluates user touch input on a list item to determine which function to call
  selectEvent(event) {
    switch (event.target.value) {
      case "on":
          this.completeHorse(event.target.checked,event.currentTarget.dataset.horseid);
          break;
      case "X":
          this.deleteHorse(event.currentTarget.dataset.horseid);
          break;
      case "All":
      default:
          break;
    }
  }  

  //Create a new horse
  addHorse() {
    console.log("it worked!");
    // if (text.length > 0) {
    //   const task = {
    //     id: + new Date(),
    //     content: text,
    //     completed: false
    //   };
    //   this.horseList.push(horse);
    // }
    // document.getElementById('add').value = '';
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

  //open the menu
  openMenu() {
    console.log("menu clicked!");
  }
};

//open the menu
function openMenu() {
  console.log("menu clicked!");
}
//Dynamically renders HTML for horse list
function renderHorseList(parent, horses) {
  horses.forEach(horses => {
    parent.appendChild(renderOneHorse(horse));
  });  
}

//Dynamically renders HTML for a single horse
function renderOneHorse(horse) {
  const item = document.createElement('li');
  //item.classList.add('light');
  item.setAttribute('data-horseid', horse.id);
  let checked = (horse.completed ? 'Checked' : '');
  
  item.innerHTML = `
  <div>
    <input type="checkbox" ${checked}>
    <span>${horse.content}</span>
    <input type="button" value="X" > 
  </div>`;

  return item;
}

