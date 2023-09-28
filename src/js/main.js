import "../scss/main.scss";
import { domElements } from "./components/selectors.js";
import { Container } from "./components/container.js";

const mainElement = domElements.mainElement;
const addButtonElement = domElements.addTaskButtonElement;

const containerState = {
  state: "index",
  containers: {
    index: new Container("index"),
  },
};

// Button

addButtonElement.addEventListener("click", () => {
  const containerElement = domElements.containerElement;
  containerState.containers[containerElement.dataset.container].addTask(
    "test55",
  );
});

mainElement.appendChild(
  containerState.containers[containerState.state].initDisplayElement(),
);

// const initPage = (container) => {};
