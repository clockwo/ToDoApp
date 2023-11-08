import createTaskElement from './render';
import TaskManager from './taskManager';

export default class Container {
  constructor(name) {
    this.name = name;
    this.section = document.createElement('section');
    this.taskManager = new TaskManager();
  }

  initDisplayElement = () => {
    this.section.setAttribute('data-container', this.name);
    this.section.classList.add('wrapper');

    this.section.innerHTML = `
        <h1>${this.name}</h1>
    `;

    this.taskManager
      .getTasks()
      .forEach((task) =>
        this.section.appendChild(
          createTaskElement(task.getDescription(), task.getIsNotDone())
        )
      );

    return this.section;
  };

  addTask = (description) => {
    this.taskManager.addTask(description);
    const task = this.taskManager.getLatestAddedTask();

    // html part
    this.section.appendChild(createTaskElement(task.getDescription()));
  };

  makeDone(index) {
    this.taskManager.makeDone(index);
  }

  // TODO: Add button what shows or hide completed tasks
}
