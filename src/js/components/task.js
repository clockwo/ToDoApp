export default class Task {
  constructor(description) {
    this.description = description;
    this.isNotDone = false;
  }

  getDescription = () => this.description;

  getIsNotDone = () => this.isNotDone;

  markAsDone() {
    this.isNotDone = true;
  }

  markAsNotDone() {
    this.isNotDone = false;
  }
}
