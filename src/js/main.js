import "../scss/main.scss";
import { domElements } from "./components/selectors.js";
import { Container } from "./components/container.js";
import { initIndexPage, initProjects } from "./pages/index.js";

class App {
  constructor() {
    this.domElements = domElements;
    this.containerState = {
      isActive: false,
      containers: {
        inbox: new Container("inbox"),
        today: new Container("today"),
        upcoming: new Container("upcoming"),
        projects: new Container("projects"),
        // Add as many containers as needed
      },
    };
  }

  // Private functions
  updateNavigation = (containerName) => {
    const { navElement } = this.domElements;
    const h1 = document.createElement("h1");
    h1.textContent = containerName;
    h1.classList.add("test");
    const returnButton = document.createElement("button");

    returnButton.textContent = "<";
    returnButton.setAttribute("data-rtb", "");
    returnButton.classList.add("return-button");

    returnButton.addEventListener("click", this.returnButtonClickHandler);
    navElement.appendChild(returnButton);
    navElement.appendChild(h1);
  };

  setContainerActive = () => {
    this.containerState.isActive = true;
  };

  setContainerInactive = () => {
    this.containerState.isActive = false;
  };

  clearMainElement = ({ mainElement } = this.domElements) => {
    mainElement.replaceChildren();
  };

  clearNavigationElement = ({ navElement } = this.domElements) => {
    const defaultLogo = new Image(65, 65);
    defaultLogo.src = "./images/logo.png";

    navElement.replaceChildren(defaultLogo);
  };

  loadContainer = (dataValue) => {
    const { mainElement } = this.domElements;
    mainElement.appendChild(
      this.containerState.containers[dataValue].initDisplayElement(),
    );
    this.updateNavigation(dataValue);
  };

  // Buttons events

  returnButtonClickHandler = () => {
    this.clearMainElement();
    this.setContainerInactive();
    this.initDefaultPage();
    this.clearNavigationElement();
  };
  mainElementClickHandler = ({ target }) => {
    if (!target.matches("[data-container]") || this.containerState.isActive)
      return;
    const dataValue = target.dataset.container;
    this.setContainerActive();
    this.clearMainElement();
    this.loadContainer(dataValue);
  };

  addTaskButtonElementClickHandler = () => {
    const { containerElement } = domElements;
    this.containerState.containers[containerElement.dataset.container].addTask(
      "test55",
    );
  };

  //Initialization
  initDefaultPage = ({ mainElement } = this.domElements) => {
    mainElement.appendChild(initIndexPage());
    // initProjects(this.containerState.containers);
    mainElement.appendChild(initProjects(this.containerState.containers));
  };

  init = () => {
    const { mainElement, addTaskButtonElement } = this.domElements;

    mainElement.addEventListener("click", this.mainElementClickHandler);
    addTaskButtonElement.addEventListener(
      "click",
      this.addTaskButtonElementClickHandler,
    );

    this.initDefaultPage();
  };
}

const app = new App();
app.init();
