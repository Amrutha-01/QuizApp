const A = document.getElementById('area');
const B = document.getElementById('newTask');
const C = document.getElementById('task_list');

function addTask(event) {
  event.preventDefault();
  if (B.value === '') return;
  const task = createTask(B.value);
  C.appendChild(task);
  B.value = '';
}

function createTask(taskName) {
  const task = document.createElement('li');
  task.classList.add('task');
  task.innerHTML = `
        <input type="checkbox" id="Checkbox"><label>${taskName}</label>
        <span class="delete">&times;</span>
    `;

  const deleteButton = task.querySelector('.delete');
  deleteButton.addEventListener('click', deleteTask);

  return task;
}

function deleteTask(event) {
  event.target.parentElement.remove();
}
A.addEventListener('submit', addTask);