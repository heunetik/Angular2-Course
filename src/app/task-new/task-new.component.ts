import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  task;

  constructor(public taskService: TaskService) {
    this.task = {
      title : "",
      completed : false,
    };
  }

  ngOnInit() {
  }

  onSubmit() {
    this.task = this.taskService.addTask(this.task);
  }
}
