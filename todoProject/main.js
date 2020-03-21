import Todo from "./Todo.js";

const myTodo = new Todo(document.getElementById('todos'));

//on load grab the array and insert it into the page
window.addEventListener("load", () => {
if (localStorage.hasOwnProperty('toDoList')) {
  myTodo.loadTodo();
}
myTodo.displayTodoList();
});

//set a listener for the user to add a new task
document.getElementById('new').addEventListener("click", () => {
  myTodo.addTodo(document.getElementById('add').value);
  myTodo.displayTodoList();
});