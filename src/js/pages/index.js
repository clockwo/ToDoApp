export const initIndexPage = () => {
  const indexPageElement = document.createElement("section");
  indexPageElement.classList.add("inbox", "wrapper");

  indexPageElement.innerHTML = `
    <div class="window">
        <p class="win-button" data-container="inbox">Inbox</p>
        <p class="win-button">Today</p>
        <p class="win-button">Upcoming</p>
    </div>
  `;

  return indexPageElement;
};

export const initProjects = (projects) => {
  const projectsElement = document.createElement("section");
  projectsElement.classList.add("wrapper");

  projectsElement.innerHTML = `
    <div class="projects">
        <h2 class="projects-title">Projects</h2>
        <div class="projects-buttons">
            <button class="projects-button-add" type="button">+</button>
            <button class="projects-button-hide" type="button">></button>
        </div>
    </div>
  `;

  const windowElement = document.createElement("div");
  windowElement.classList.add("window");

  for (const [projectName] of Object.entries(projects)) {
    const projectElement = document.createElement("p");
    projectElement.classList.add("win-button");
    projectElement.setAttribute("data-container", projectName);
    projectElement.textContent = projectName;
    windowElement.appendChild(projectElement);
  }

  projectsElement.appendChild(windowElement);
  return projectsElement;
};
