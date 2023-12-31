import '../scss/main.scss';
import domElements from './components/selectors';
import Container from './components/container';
import { initIndexPage, initProjects } from './pages/index';

class App {
  constructor() {
    this.domElements = domElements;
    this.currentAction = null;
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

  handleProjectAddClick = () => {
    const { menuElement } = this.domElements;
    menuElement.showModal();
    menuElement.addEventListener('click', this.handleBackdropClick);
    this.currentAction = 'addProject';
  };

  handleAddTaskClick = () => {
    const { menuElement } = this.domElements;
    menuElement.showModal();
    menuElement.addEventListener('click', this.handleBackdropClick);
  };

  handleSubmitClick = () => {
    const { taskNameElement, containerElement } = this.domElements;

    if (this.currentAction === 'addProject') {
      this.addContainer(taskNameElement.value);
      this.resetAll();
    } else {
      this.containerState.containers[
        containerElement.dataset.container
      ].addTask(taskNameElement.value);
    }

    this.currentAction = null;
  };

  // TODO: Add handler for HideProjectClick
  // eslint-disable-next-line class-methods-use-this
  handleProjectHideClick = ({ target }) => {
    target.classList.toggle('down');
  };

  handleCheckboxToggle(checkbox) {
    const taskElement = checkbox.closest('.task');
    const section = taskElement.closest('section');
    const taskIndex = this.getTaskIndex(section, taskElement);
    const textElement = taskElement.querySelector('.task-text');
    this.toggleTaskDoneState(textElement, taskIndex, section);
  }

  // eslint-disable-next-line class-methods-use-this
  getTaskIndex = (section, taskElement) =>
    Array.from(section.querySelectorAll('.task')).indexOf(taskElement);

  toggleTaskDoneState(textElement, taskIndex, section) {
    textElement.classList.toggle('cross');
    this.containerState.containers[section.dataset.container].makeDone(
      taskIndex
    );
  }

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
        this.handleProjectHideClick(event);
      } else if (event.target.type === 'checkbox') {
        this.handleCheckboxToggle(event.target);
      }
    });

    // TODO: Make event delegation better here
    submitTaskButtonElement.addEventListener('click', this.handleSubmitClick);
    addTaskButtonElement.addEventListener('click', this.handleAddTaskClick);
  };
}

const app = new App();
app.init();
