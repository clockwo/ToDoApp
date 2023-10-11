import Task from './task';

export default class TaskManager {
  constructor() {
    this.tasks = [
      new Task('test'),
      new Task('test2'),
      new Task('test3'),
      new Task('test4'),
    ];
  }

  addTask(description) {
    if (!description) return;

    const task = new Task(description);
    this.tasks.push(task);
  }

  getLatestAddedTask() {
    const [lastElement] = this.tasks.slice(-1);
    return lastElement;
  }

  getTasks() {
    return this.tasks;
  }

  // TODO: Add remove task handler
}
