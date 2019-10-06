import { Injectable } from '@angular/core';
import {ApiService, GenericService} from "./api.service";
import {Task} from "./task";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService implements GenericService<Task> {

  constructor(private api: ApiService<Task>) { }

  getAll(): Observable<Task[]> {
    return this.api.getAll('tasks')
  }

  get(id: string): Observable<Task> {
    return this.api.get('tasks', id)
  }

  create(item: Task): Observable<Task> {
    return this.api.create('tasks', item);
  }

  update(id: string, item: Partial<Task>): Observable<Task> {
    return this.api.update('tasks', id, item);
  }

  delete(id: string): Observable<Task> {
    return this.api.delete('tasks', id);
  }
}
