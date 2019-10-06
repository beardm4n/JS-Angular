import { Component, OnInit } from '@angular/core';
import {Task} from "../task";
import {TaskService} from "../task.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-tasks-container',
  template: `<app-task-list [items]="tasks | async"></app-task-list>`,
})
export class TasksContainerComponent implements OnInit {

  private tasks: Observable<Task[]>;

  constructor(private service: TaskService) { }

  ngOnInit() {
    this.tasks = this.service.getAll();
  }

}
