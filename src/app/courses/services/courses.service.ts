import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClien: HttpClient) {}

  list(): Array<Course> {
    return [{ _id: '1', name: 'Angular', category: 'front-end' }];
  }
}