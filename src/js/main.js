import "../scss/main.scss";

import Task from "./components/task.js";
import {createTaskElement} from "./components/render.js";

const content = document.querySelector("[data-js-tasks]");

const task = new Task("buy", "buy something tonight");


content.appendChild(createTaskElement(task.getData()));
