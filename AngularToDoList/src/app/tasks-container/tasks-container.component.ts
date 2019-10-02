import { Component, OnInit } from '@angular/core';
import {Task, TaskBuyers, TaskStatus} from "../task";

@Component({
  selector: 'app-tasks-container',
  template: `<app-task-list [items]="tasks"></app-task-list>`,
})
export class TasksContainerComponent implements OnInit {

  private tasks: Task[] = [
    {
      id: '1',
      title: 'Buy a cheese',
      status: TaskStatus.Uncompleted,
      buyer: TaskBuyers.husband,
    },
    {
      id: '2',
      title: 'Buy a milk',
      status: TaskStatus.Completed,
      buyer: TaskBuyers.wife,
    },
    {
      id: '3',
      title: 'Buy a vegetables',
      status: TaskStatus.Completed,
      buyer: TaskBuyers.wife,
    },
    {
      id: '4',
      title: 'Buy a meet',
      status: TaskStatus.Uncompleted,
      buyer: TaskBuyers.husband,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
