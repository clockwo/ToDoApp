export const initIndexPage = () => {
  const indexPageElement = document.createElement('section');
  indexPageElement.classList.add('inbox', 'wrapper');

  indexPageElement.innerHTML = /* html */ `
    <div class="window">
        <p class="win-button" data-container="inbox">Inbox</p>
        <p class="win-button">Today</p>
        <p class="win-button">Upcoming</p>
    </div>
  `;

  return indexPageElement;
};

export const initProjects = (projects) => {
  const projectsElement = document.createElement('section');
  projectsElement.classList.add('wrapper');

  projectsElement.innerHTML = /* html */ `
    <div class="projects">
        <h2 class="projects-title">Projects</h2>
        <div class="projects-buttons">
            <button  class="projects-button-add" data-js-projects-button-add type="button">
              <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" stroke-width="10"/>
                  <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" stroke-width="10"/>
              </svg>
            </button>
            <button class="projects-button-hide rotate" data-js-projects-button-hide type="button">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L12 18L20 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
        </div>
    </div>
  `;

  const windowElement = document.createElement('div');
  windowElement.classList.add('window');

  // eslint-disable-next-line no-restricted-syntax
  for (const [projectName] of Object.entries(projects)) {
    const projectElement = document.createElement('p');
    projectElement.classList.add('win-button');
    projectElement.setAttribute('data-container', projectName);
    projectElement.textContent = projectName;
    windowElement.appendChild(projectElement);
  }

  projectsElement.appendChild(windowElement);
  return projectsElement;
};
