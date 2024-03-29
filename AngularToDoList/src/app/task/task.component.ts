import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() public task: Task;

  constructor() { }

  ngOnInit() {
  }

}
