export const initIndexPage = () => {
  const indexPageElement = document.createElement("section");
  indexPageElement.classList.add("index", "wrapper");

  indexPageElement.innerHTML = `
    <div class="window">
        <p class="win-button">Inbox</p>
        <p class="win-button">Today</p>
        <p class="win-button">Upcoming</p>
    </div>
  `;

  return indexPageElement;
};
