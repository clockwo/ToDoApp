import { createTaskElement } from "./render.js";
import { TaskManager } from "./taskManager.js";

export class Container {
  constructor(name) {
    this._name = name;
    this.section = document.createElement("section");
    this.taskManager = new TaskManager();
  }

  initDisplayElement = () => {
    this.section.setAttribute("data-container", this._name);

    this.section.innerHTML = `
        <h1>${this._name}</h1>
    `;

    this.taskManager
      .getTasks()
      .forEach((task) =>
        this.section.appendChild(createTaskElement(task.getDescription())),
      );

    return this.section;
  };

  addTask = (description) => {
    const task = this.taskManager.addTask(description);

    // html part
    this.section.appendChild(createTaskElement(task.getDescription()));
  };
}
