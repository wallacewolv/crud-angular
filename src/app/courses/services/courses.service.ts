import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Array<Course>> {
    return this.httpClient.get<Array<Course>>(this.API).pipe(
      first() // first obtem os dados e encerra a conexão
      // delay(2000),
      // tap((courses) => console.log(courses))
    );
  }

  loadById(id: string): Observable<Course> {
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }

  save(record: Partial<Course>): Observable<Course> {
    // console.log(record);
    if (record._id) {
      // console.log('update');
      return this.update(record);
    }
    // console.log('create');
    return this.create(record);
  }

  private create(record: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, record).pipe(first());
  }

  private update(record: Partial<Course>) {
    return this.httpClient
      .put<Course>(`${this.API}/${record._id}`, record)
      .pipe(first());
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
