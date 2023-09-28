const selectors = {
  main: "[data-js-main]",
  container: "[data-container]",
  addTaskButton: "[data-js-add-task-button]",
};

export const domElements = {
  get mainElement() {
    return document.querySelector(selectors.main);
  },

  get addTaskButtonElement() {
    return document.querySelector(selectors.addTaskButton);
  },

  get containerElement() {
    return document.querySelector(selectors.container);
  },
};
