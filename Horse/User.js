export default class User {
  constructor () {
    this.username = '';
  }

  saveUsername() {
    localStorage.setItem('horseUsername', JSON.stringify(this.username));
  }

  loadUsername() {
    let text = '';

    if (localStorage.hasOwnProperty('horseUsername')) {
      this.username = JSON.parse(localStorage.getItem('horseUsername'));
      return this.username;
    }

    text = prompt('Please enter your name:');

    if (text === null) {
        return this.username;
    } else {
      this.username = ', ' + text;
      this.saveUsername();
    }
    
    return this.username;
  }
}