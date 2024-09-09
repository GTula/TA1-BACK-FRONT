// Variables globales *
import * as HTMLElements from "./HTMLElements.js"

// Clases
import { Task } from "./Task.js";
import { TaskManager } from "./TaskManager.js";

// Event Handlers
import * as Handlers from "./eventHandlers.js";

// Event Listeners
import { addEventListeners } from "./eventListeners.js";

import { fetchTasksGet } from "./api.js";

// Inicialización de Event Listeners.
addEventListeners();



document.addEventListener("DOMContentLoaded", fetchTasksGet());