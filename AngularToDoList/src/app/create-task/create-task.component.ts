import {Component, OnInit} from '@angular/core';
import {TaskService} from "../task.service";
import {TaskBuyers, TaskStatus} from "../task";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  private title: string = '';
  public model = {
    title: '',
  };
  constructor(
    private service: TaskService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  onCreate(taskForm: NgForm): void {
    console.log(taskForm.value);

    // this.service.create({
    //   title: taskForm.value,
    //   status: TaskStatus.Uncompleted,
    //   buyer: TaskBuyers.husband,
    // }).subscribe(() => {
    //   this.router.navigate(['/tasks']);
    // });
  }

}
