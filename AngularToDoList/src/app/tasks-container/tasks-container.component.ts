import { Component, OnInit } from '@angular/core';
import {Task, TaskBuyers, TaskStatus} from "../task";

@Component({
  selector: 'app-tasks-container',
  template: `<app-task-list [items]="tasks"></app-task-list>`,
})
export class TasksContainerComponent implements OnInit {

  private tasks: Task[] = [

  ];

  constructor() { }

  ngOnInit() {
  }

}
