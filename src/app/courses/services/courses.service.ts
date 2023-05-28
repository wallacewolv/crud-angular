import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';
import { Observable, delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Array<Course>> {
    return this.httpClient.get<Array<Course>>(this.API).pipe(
      first(), // first obtem os dados e encerra a conexão
      // delay(2000),
      tap((courses) => console.log(courses))
    );
  }
}
