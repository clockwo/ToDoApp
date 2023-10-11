import '../scss/main.scss';
import domElements from './components/selectors';
import Container from './components/container';
import { initIndexPage, initProjects } from './pages/index';

class App {
  constructor() {
    this.domElements = domElements;
    this.containerState = {
      isActive: false,
      containers: {
        inbox: new Container('inbox'),
        today: new Container('today'),
        upcoming: new Container('upcoming'),
        projects: new Container('projects'),
        // Add as many containers as needed
      },
    };
  }

  // Private functions
  updateNavigation = (containerName) => {
    const { navElement } = this.domElements;

    navElement.replaceChildren();

    const h1 = document.createElement('h1');
    h1.textContent = containerName;
    h1.classList.add('nav-title');
    const returnButton = document.createElement('button');

    returnButton.textContent = '<';
    returnButton.setAttribute('data-rtb', '');
    returnButton.classList.add('return-button');

    returnButton.addEventListener('click', this.returnButtonClickHandler);
    navElement.appendChild(returnButton);
    navElement.appendChild(h1);
  };

  setContainerActive = () => {
    this.containerState.isActive = true;
  };

  setContainerInactive = () => {
    this.containerState.isActive = false;
  };

  addContainer = (name) => {
    this.containerState.containers[`${name}`] = new Container(name);
    console.log(this.containerState.containers);
  };

  clearMainElement = ({ mainElement } = this.domElements) => {
    mainElement.replaceChildren();
  };

  clearNavigationElement = ({ navElement } = this.domElements) => {
    const defaultLogo = new Image(65, 65);
    defaultLogo.src = './images/logo.png';

    navElement.replaceChildren(defaultLogo);
  };

  loadContainer = (dataValue) => {
    const { mainElement } = this.domElements;
    mainElement.appendChild(
      this.containerState.containers[dataValue].initDisplayElement()
    );
    this.updateNavigation(dataValue);
  };

  resetAll = () => {
    this.clearMainElement();
    this.setContainerInactive();
    this.initDefaultPage();
    this.clearNavigationElement();
  };

  // Buttons events

  returnButtonClickHandler = () => {
    this.resetAll();
  };

  mainElementClickHandler = ({ target }) => {
    const dataValue = target.dataset.container;
    this.setContainerActive();
    this.clearMainElement();
    this.loadContainer(dataValue);
  };

  handleAddTaskClick = () => {
    const { menuElement } = domElements;
    menuElement.showModal();
    menuElement.addEventListener('click', this.handleBackdropClick);
  };

  handleBackdropClick = (event) => {
    const { menuElement } = this.domElements;
    const dialogDimensions = menuElement.getBoundingClientRect();

    if (
      event.clientX < dialogDimensions.left ||
      event.clientX > dialogDimensions.right ||
      event.clientY < dialogDimensions.top ||
      event.clientY > dialogDimensions.bottom
    ) {
      menuElement.close();
    }
  };

  handleSubmitTaskClick = () => {
    const { taskNameElement, containerElement } = this.domElements;
    this.containerState.containers[containerElement.dataset.container].addTask(
      taskNameElement.value
    );
  };

  // TODO: Add handler for AddProjectClick
  handleProjectAddClick = () => {
    const data = new Date();
    this.addContainer(`hello${data.getSeconds()}`);
    this.resetAll();
  };

  // TODO: Add handler for HideProjectClick

  // TODO:

  // Initialization
  initDefaultPage = ({ mainElement } = this.domElements) => {
    mainElement.appendChild(initIndexPage());
    mainElement.appendChild(initProjects(this.containerState.containers));
  };

  init = () => {
    this.initDefaultPage();

    const { mainElement, addTaskButtonElement, submitTaskButtonElement } =
      this.domElements;

    mainElement.addEventListener('click', (event) => {
      if (
        event.target.matches('[data-container]') &&
        !this.containerState.isActive
      ) {
        this.mainElementClickHandler(event);
      } else if (event.target.matches('[data-js-projects-button-add]')) {
        this.handleProjectAddClick();
      } else if (event.target.matches('[data-js-projects-button-hide]')) {
        console.log(1);
      }
    });

    // TODO: Make event delegation better here

    addTaskButtonElement.addEventListener('click', this.handleAddTaskClick);
    submitTaskButtonElement.addEventListener(
      'click',
      this.handleSubmitTaskClick
    );
  };
}

const app = new App();
app.init();
