const createTaskElement = (description, doneStatus) => {
  const taskElement = document.createElement('div');

  taskElement.classList.add('task');
  const cross = doneStatus ? 'cross' : '';

  taskElement.innerHTML = /* html */ `
    <input class="task-box" type="checkbox" name="task" id="task" ${
      doneStatus ? 'checked' : ''
    }>
    <p class="task-text ${cross}">${description}</p>
  `;

  return taskElement;
};

export default createTaskElement;
