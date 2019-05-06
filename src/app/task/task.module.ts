import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Components
import { TasksComponent } from './tasks/tasks.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskNewComponent } from './task-new/task-new.component';

// Services
import { TaskService } from './services/task.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    TasksComponent,
    TaskListComponent,
    TaskNewComponent
  ],
  exports: [
    TasksComponent,
    TaskListComponent,
    TaskNewComponent
  ],
  entryComponents: [],
  providers: [
    TaskService
  ]
})
export class TaskModule { }