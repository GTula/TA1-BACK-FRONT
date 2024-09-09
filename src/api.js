// Variables globales *
import * as HTMLElements from "./HTMLElements.js"

// Clases
import { Task } from "./Task.js";
import { TaskManager } from "./TaskManager.js";

// Event Handlers
import * as Handlers from "./eventHandlers.js";

// Event Listeners
import { addEventListeners } from "./eventListeners.js";

export function fetchTasksGet() {
    fetch('http://localhost:3000/api/tasks', {
        method: 'GET',
      })
        .then(response => response.json()) 
        .then(tasks => { 
          displayTasks(tasks); 
        })
        .catch(error => {
          console.error('Error:', error); 
        });
      }
  
function displayTasks(tasks) {
  tasks.forEach(task => {
    if (task.id && task.title && task.description && task.assignedTo && task.status) {
      TaskManager.addNewTaskBack(
        task.id,
        task.title,
        task.description,
        task.assignedTo,
        task.priority || 'Low',
        task.endDate || 'N/A',
        task.status
      );
    } else {
      console.error('Faltan campos por completar:', task);
    }
  });
};
      



export function fetchTasksPost(task) {
  fetch('http://localhost:3000/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task), 
  })
    .then(response => response.json()) 
    .then(data => {
      console.log('Tarea agregada:', data);
    })
    .catch(error => {
      console.error('Error:', error); 
    });
};


export function updateTaskApi(taskId, updatedTaskData) {
  fetch(`http://localhost:3000/api/tasks/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTaskData),
  })
  .then(response => response.json())
  .then(updatedTask => {
    console.log("Tarea actualizada:", updatedTask);
  })
  .catch(error => console.error('Error al actualizar la tarea:', error));
};


export function deleteTaskApi(taskId) {
  fetch(`http://localhost:3000/api/tasks/${taskId}`, {
    method: 'DELETE',
  })
  .then(response => {
    if (response.ok) {
      console.log(`Tarea con ID ${taskId} eliminada`);
    } else {
      console.error('Error al eliminar la tarea');
    }
  })
  .catch(error => console.error('Error al eliminar la tarea:', error));
}
