import { Injectable } from '@angular/core';
import {ApiService, GenericService} from "./api.service";
import {Task} from "./task";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService implements GenericService<Task> {

  private _tasks: BehaviorSubject<Task[]> = new BehaviorSubject([]);

  public readonly tasks: Observable<Task[]> = this._tasks.asObservable();

  constructor(private api: ApiService<Task>) {
    this.getAll().subscribe((tasks: Task[]) => {
      this._tasks.next(tasks);
    })
  }

  getAll(): Observable<Task[]> {
    return this.api.getAll('tasks')
  }

  get(id: string): Observable<Task> {
    return this.api.get('tasks', id)
  }

  create(item: Partial<Task>): Observable<Task> {
    const response$ = this.api.create('tasks', item);

    response$.subscribe((savedTask: Task) => {
      const prevTasks = this._tasks.getValue();

      this._tasks.next(prevTasks.concat([savedTask]));
    });

    return response$;
  }

  update(id: string, item: Partial<Task>): Observable<Task> {
    return this.api.update('tasks', id, item);
  }

  delete(id: string): Observable<Task> {
    return this.api.delete('tasks', id);
  }
}
