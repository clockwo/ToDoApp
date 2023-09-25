import "../scss/main.scss";

import Task from "./components/task.js";

const content = document.querySelector("[data-js-tasks]");

const task = new Task("buy", "buy something tonight");

const taskElement = document.createElement("div");

const [name, desc] = task.getData();

const nameElement = document.createElement("h2");
nameElement.textContent = name;

const descElement = document.createElement("p");
descElement.textContent = desc;

[nameElement, descElement].forEach((item) => taskElement.appendChild(item));

content.appendChild(taskElement);
