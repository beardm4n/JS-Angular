import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface GenericService<T> {
  getAll(): Observable<T[]>;
  get(id: string): Observable<T>;
  create(item: T): Observable<T>;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {
  static API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAll(path: string): Observable<T[]> {
    return this.http.get<T[]>(`${ApiService.API_URL}/${path}`);
  }

  get(path: string, id: string): Observable<T> {
    return this.http.get<T>(`${ApiService.API_URL}/${path}/${id}`);
  }

  create(path: string, item: T):Observable<T> {
    return this.http.post<T>(`${ApiService.API_URL}/${path}`, item);
  }
}
