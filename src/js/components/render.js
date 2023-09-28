export const createTaskElement = (description) => {
  const taskElement = document.createElement('div');
  taskElement.classList.add('task')

  taskElement.innerHTML = `
    <input class="task-box" type="checkbox" name="task" id="task">
    <p class="task-text">${description}</p>
  `;

  return taskElement;
}