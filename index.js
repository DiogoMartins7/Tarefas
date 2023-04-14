const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

let tasks = [];

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    span.textContent = task;
    editButton.textContent = 'Editar';
    editButton.classList.add('edit');
    deleteButton.textContent = 'Apagar';

    deleteButton.addEventListener('click', () => {
      tasks.splice(index, 1);
      renderTasks();
    });

    editButton.addEventListener('click', () => {
      const newTask = prompt('Editar tarefa', task);
      if (newTask !== null && newTask.trim() !== '') {
        tasks[index] = newTask.trim();
        renderTasks();
      }
    });

    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

addTaskButton.addEventListener('click', () => {
  const newTask = taskInput.value.trim();
  if (newTask !== '') {
    tasks.push(newTask);
    taskInput.value = '';
    renderTasks();
  }
});

renderTasks();
