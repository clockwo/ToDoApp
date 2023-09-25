export default class Task {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  getData = () => {
    return [this.name, this.description];
  };
}
