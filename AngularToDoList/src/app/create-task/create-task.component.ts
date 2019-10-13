import {Component, OnInit} from '@angular/core';
import {TaskService} from "../task.service";
import {TaskBuyers, TaskStatus} from "../task";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  private title: string = '';

  constructor(
    private service: TaskService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onCreate(): void {
    this.service.create({
      title: this.title,
      status: TaskStatus.Uncompleted,
      buyer: TaskBuyers.husband,
    }).subscribe(() => {
      this.router.navigate(['/tasks']);
    });
  }

}
