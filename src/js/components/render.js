export const createTaskElement = ( taskData ) => {
  const [name, description] = taskData;

  const taskElement = document.createElement('div');

  const nameElement = document.createElement("h2");
  nameElement.textContent = name;

  const descElement = document.createElement("p");
  descElement.textContent = description;

  [nameElement, descElement].forEach((element) => taskElement.appendChild(element));

  return taskElement;
}