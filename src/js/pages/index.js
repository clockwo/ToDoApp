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
