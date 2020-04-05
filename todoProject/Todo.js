export default class Todo {
  constructor(elementId) {
    this.parentElement = elementId;
    this.toDoList = [];
  }

  //Returns the array of tasks
  getAllTodos() {
    return this.toDoList;
  }

  //Takes the ID for a single task and returns that task from the array
  getTodoById(todoId) {
    return this.getAllTodos().find(todo => todo.id.toString() === todoId);
  }

  //Displays the task list, calls the setter for event listeners
  // on the task list, and saves the task list.
  displayTodoList() {
    this.parentElement.innerHTML = '';
    renderTodoList(this.parentElement, this.getAllTodos());
    this.addTodoListener();
    this.saveTodo();
  }

  //sets a listener for each list item being displayed
  addTodoListener() {
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
          this.completeTodo(event.target.checked,event.currentTarget.dataset.todoid);
          break;
      case "X":
          this.deleteTodo(event.currentTarget.dataset.todoid);
          break;
      case "All":
          this.filterTodo(event.target.value);
          break;
      case "Active":
          this.filterTodo(event.target.value);
          break;
      case "Completed":
          this.filterTodo(event.target.value);
          break;
      default:
          break;
    }
  }  

  //Create a new task
  addTodo(text) {
    if (text.length > 0) {
      const task = {
        id: + new Date(),
        content: text,
        completed: false
      };
      this.toDoList.push(task);
    }
    document.getElementById('add').value = '';
  }

  //Mark a task as "Completed"
  completeTodo(checked,todoid) {
    (checked? this.getTodoById(todoid).completed = false 
    : this.getTodoById(todoid).completed = true)
  }
  
  //Delete a task
  deleteTodo(todoid) {
    this.toDoList.splice(this.toDoList.indexOf(this.getTodoById(todoid)),1);
    this.filterTodo(document.querySelector('.clicky').value);
  }

  //Filter the displayed tasks by All, Active, and Completed
  filterTodo(filter) {
    let filteredList = [];

    if (filter === "All") {
      this.displayTodoList();
      this.addFocus(filter);
      return;
    } else if (filter === "Active") {
      this.toDoList.forEach(todo => {
        if (!todo.completed) {
          filteredList.push(todo);
        }
      });
    } else {
      this.toDoList.forEach(todo => {
        if (todo.completed) {
          filteredList.push(todo);
        }
      });
    }

    this.parentElement.innerHTML = '';
    renderTodoList(this.parentElement, filteredList);
    this.addFocus(filter);
    this.addTodoListener();
  }
  
  addFocus(filter) {
    const buttonArray = document.querySelectorAll('.filter');
    buttonArray.forEach(button => {
      if (filter === button.value) {
        button.classList.add('clicky');
      } else button.classList.remove('clicky');
     });
  }

  //Save the array of tasks into localStorage memory
  saveTodo() {
    localStorage.setItem('toDoList', JSON.stringify(this.toDoList));
  }

  //Load the array of tasks from localStorage memory
  loadTodo() {
    this.toDoList = JSON.parse(localStorage.getItem('toDoList'));
  }
};

//Dynamically renders HTML for task list
function renderTodoList(parent, todos) {
  todos.forEach(todo => {
    parent.appendChild(renderOneTodo(todo));
  });
  parent.appendChild(renderFilterBar(todos));  
}

//Dynamically renders HTML for a single task
function renderOneTodo(todo) {
  const item = document.createElement('li');
  //item.classList.add('light');
  item.setAttribute('data-todoid', todo.id);
  let checked = (todo.completed ? 'Checked' : '');
  
  item.innerHTML = `
  <div>
    <input type="checkbox" ${checked}>
    <span>${todo.content}</span>
    <input type="button" value="X" > 
  </div>`;

  return item;
}

//Dynamically renders HTML for the filter bar
function renderFilterBar(todos) {
  const item = document.createElement('li');
  item.setAttribute('data-filterBar', true);
  item.innerHTML = `
  <div>
    <p>${todos.length} tasks left</p>
    <input type="button" value="All" class="filter clicky">
    <input type="button" value="Active" class="filter">
    <input type="button" value="Completed" class="filter">
    </div>`;

    return item;
}

