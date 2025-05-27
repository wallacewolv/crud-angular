import { HttpClient } from '@angular/common/http';
import { DestroyRef, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { delay, first, Observable } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/api-courses/courses';

  constructor(
    private httpClient: HttpClient,
    private destroyRef: DestroyRef,
  ) {}

  list(): Observable<Course[]> {
    // const errorTest = false;
    // const params = new HttpParams().append('errorTest', errorTest);

    return this.httpClient
      .get<Course[]>(this.API)
      .pipe(first(), delay(500), takeUntilDestroyed(this.destroyRef));
  }

  findById(id: string): Observable<Course> {
    return this.httpClient
      .get<Course>(`${this.API}/${id}`)
      .pipe(first(), takeUntilDestroyed(this.destroyRef));
  }

  save(record: Course): Observable<Course> {
    if (record._id) {
      return this.update(record);
    }

    return this.create(record);
  }

  private create(record: Course): Observable<Course> {
    return this.httpClient
      .post<Course>(this.API, record)
      .pipe(first(), takeUntilDestroyed(this.destroyRef));
  }

  private update(record: Course): Observable<Course> {
    return this.httpClient
      .put<Course>(`${this.API}/${record._id}`, record)
      .pipe(first(), takeUntilDestroyed(this.destroyRef));
  }
}
