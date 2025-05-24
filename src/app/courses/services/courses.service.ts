import { HttpClient } from '@angular/common/http';
import { DestroyRef, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { first, Observable, tap } from 'rxjs';

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
    return this.httpClient.get<Course[]>(`${this.API}/courses`).pipe(
      first(),
      tap((courses) => console.log(courses)),
      takeUntilDestroyed(this.destroyRef),
    );
  }
}
