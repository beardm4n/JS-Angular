import {Component} from '@angular/core';
import {Task, TaskBuyers, TaskStatus} from "./task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private tasks: Task[] = [
    {
      title: 'Buy a cheese',
      status: TaskStatus.Uncompleted,
      buyer: TaskBuyers.husband,
    },
    {
      title: 'Buy a milk',
      status: TaskStatus.Completed,
      buyer: TaskBuyers.wife,
    },
    {
      title: 'Buy a vegetables',
      status: TaskStatus.Completed,
      buyer: TaskBuyers.wife,
    },
    {
      title: 'Buy a meet',
      status: TaskStatus.Uncompleted,
      buyer: TaskBuyers.husband,
    },
  ];
}
