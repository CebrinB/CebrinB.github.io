import Todo from "./Todo.js";

const toDo = {id:0, content:"defined", completed:false};
const myTodo = new Todo(document.getElementById('todos'));

//on load grab the array and insert it into the page
window.addEventListener("load", () => {
  myTodo.showTodoList();
});

document.getElementById('new').addEventListener("click", () => {
  myTodo.addTodo(document.getElementById('add').value);
  myTodo.showTodoList();
});