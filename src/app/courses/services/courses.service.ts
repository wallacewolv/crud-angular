import { HttpClient, HttpParams } from '@angular/common/http';
import { DestroyRef, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { delay, first, Observable } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '';

  constructor(
    private httpClient: HttpClient,
    private destroyRef: DestroyRef,
  ) {}

  list(): Observable<Course[]> {
    const errorTest = false;
    const params = new HttpParams().append('errorTest', errorTest);

    return this.httpClient
      .get<Course[]>(`${this.API}/courses`, { params })
      .pipe(first(), delay(500), takeUntilDestroyed(this.destroyRef));
  }
}
