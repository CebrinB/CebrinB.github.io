//open the menu
export function openMenu() {
  document.getElementById('menu').style.display = 'block';
  document.getElementById('menuButton').classList.add('active');

}

export function showCreateHorse() {
  document.getElementById('makeHorse').style.display = 'block'; 
}

export function hideCreateHorse() {
  document.getElementById('makeHorse').style.display = none; 
}


export function showHorse() {
  document.getElementById('createHorse').style.display = none; 
}

//evaluates user touch input on a list item to determine which function to call
export function selectEvent(event) {
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

//Dynamically renders HTML for horse list
export function renderHorseList(parent, horses) {
  horses.forEach(horses => {
    parent.appendChild(renderOneHorse(horse));
  });  
}

//Dynamically renders HTML for a single horse
export function renderOneHorse(horse) {
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