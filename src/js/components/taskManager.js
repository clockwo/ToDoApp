import Task from "./task.js";

export class TaskManager {
  constructor() {
    this._tasks = [
      new Task("test"),
      new Task("test2"),
      new Task("test3"),
      new Task("test4"),
    ];
  }

  addTask(description) {
    if (!description) return;

    const task = new Task(description);
    this._tasks.push(task);
    
    return task;
  }

  getTasks() {
    return this._tasks;
  }
}
