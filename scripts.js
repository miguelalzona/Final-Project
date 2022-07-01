class taskManagerItems {
    constructor (ID, taskName, description, assignedTo, dueDate, status) {
        this._ID= taskManagerItems.incrementID();
        this._Name= taskName;
        this._description= description;
        this._AssignedTo= assignedTo;
        this._DueDate = dueDate;
        this._taskStatusArray =['ToDo', 'In Progress', 'Review', 'Done'];
        this._addTaskItems()
    }
    addTaskItems(date, text, id) {
        const taskItems = {
            parameters: this.parameters++
             
        }
    }
let x= new taskManagerItems

function taskItems(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  console.log(taskManagerItems);
}

const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('.js-todo-input');

  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
})
};