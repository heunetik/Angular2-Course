import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks;
  constructor() {
    this.tasks = [
      {
        title : 'First',
        completed: false,
      },
      {
        title : 'Second',
        completed: false,
      },
      {
        title : 'Third',
        completed: false,
      },
      {
        title : 'Fourth',
        completed: false,
      },
    ]
  }

  addTask(task) {
    this.tasks.push(task);
    return {
      title : "",
      completed : false,
    };
  }

}
