export default class Todo {
  constructor(elementId) {
    this.parentElement = elementId;
    this.toDoList = [];
  }

  getAllTodos() {
    return this.toDoList;
  }

  getTodoById(todoId) {
    return this.getAllTodos().find(todo => todo.id === todoId);
  }

  showTodoList() {
    this.parentElement.innerHTML = '';
    renderTodoList(this.parentElement, this.getAllTodos());
    this.addTodoListener();
  }

  showOneTodo(todoId) {
    const todo = this.getTodoById(todoId);
    this.parentElement.innerHTML = "";
    this.parentElement.appendChild(renderOneTodo(todo));
  }

  addTodoListener() {
    const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach(child => {
      child.addEventListener('touchend', e => {
        debugger;
        this.deleteTodo(e.currentTarget.getAttribute('id'));
      });
    });
  }

  

  addTodo(text) {
    const task = {
      id: + new Date(),
      content: text,
      completed: false
    };
    this.toDoList.push(task);

    console.log(this.toDoList);

  }

  editTodo() {}
  completeTodo() {}
  deleteTodo(todo) {
    let array = document.querySelectorAll('[todoid]');
    console.log(array);
  }
  filterTodo() {} 
};

function renderTodoList(parent, todos) {
  todos.forEach(todo => {
    parent.appendChild(renderOneTodo(todo));
  });
}

function renderOneTodo(todo) {
  const item = document.createElement('li');
  //item.classList.add('light');
  item.setAttribute('data-id', todo.id);
  item.innerHTML = `
  <div>
    <input type="checkbox">
    <span>${todo.content}</span>
    <input type="button" value="X" > 
  </div>`;

  return item;
}

