const selectors = {
  main: "[data-js-main]",
  container: "[data-container]",
  addTaskButton: "[data-js-add-task-button]",
  nav: "[data-js-nav]",
  menu: "[data-js-menu]",
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

  get navElement() {
    return document.querySelector(selectors.nav);
  },

  get menuElement() {
    return document.querySelector(selectors.menu);
  },
};
