const colors = ['Bay','Black','Brown','Grullo (Black Dun)',
  'Bay Dun (Zebra Dun)','Buckskin','Cremello','Red Dun',
  'Champagne', 'Red (Chestnut/Sorrel)','Palomino', 'Silver Dapple'];



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
    return this.getAllHorses().find(horse => horse.id === horseId);
  }

  renderHorseList(parent) {
    parent.innerHTML = '';
  
    this.horseList.forEach(
      (horse) => {
        let item = document.createElement('li');
        item.classList.add('small');
        
        let pic = document.createElement('a');
        pic.innerHTML = `
        <img class="pic" src="default.jpg" alt="picture of horse">`;
        pic.addEventListener('click', this.editPicture.bind(this, horse));
  
        let name = document.createElement('span');
        name.innerHTML = horse.name;
        name.addEventListener('click', this.editHorse.bind(this, horse));
  
        let del = document.createElement('a');
        del.innerHTML = `
        <i class="fas fa-plus-circle cancel"</i>`;
        del.addEventListener('click', this.removeHorse.bind(this, horse));
  
        item.appendChild(pic);
        item.appendChild(name);
        item.appendChild(del);
  
        parent.appendChild(item);
      }
    );
  } 

  //Create a new horse
  addHorse() {
    let form = document.getElementById('newHorse');

    const horse = {
      id: + new Date(),
      name: form.elements[0].value,
      damColor: form.elements[1].options[form.elements[1].selectedIndex].text,
      damPattern: form.elements[2].options[form.elements[2].selectedIndex].text,
      damGray: form.elements[3].checked,
      sireColor: form.elements[4].options[form.elements[4].selectedIndex].text,
      sirePattern: form.elements[5].options[form.elements[5].selectedIndex].text,
      sireGray: form.elements[6].checked
    };

    this.horseList.push(horse);
    this.saveHorse();
    document.getElementById('makeHorse').style.display = 'none';
  }

  //change the picture for a horse
  editPicture(horse) {
    console.log('edit picture!');
  }

  //edit horse characteristics
  editHorse(horse) {
    console.log('edit name!');
    console.log(horse);
  }

  //Delete horse from array, save to localStorage, then redraw the list
  removeHorse(horse) {
    this.horseList.splice(this.horseList.indexOf(this.getHorseById(horse.id)),1);
    this.saveHorse();
    this.renderHorseList(document.querySelector('#horses'));
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

