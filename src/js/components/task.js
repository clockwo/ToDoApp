export default class Task {
  constructor(description) {
    this.description = description;
    this.isDone = false;
  }

  getDescription = () => this.description;
}
