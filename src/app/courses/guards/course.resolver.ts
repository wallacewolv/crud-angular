/* eslint-disable dot-notation */
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

export const CourseResolver: ResolveFn<Course> = (route) => {
  const coursesService = inject(CoursesService);

  if (route.params && route.params['id']) {
    const id = route.params['id'];
    return coursesService.findById(id);
  }

  return of({
    _id: '',
    name: '',
    category: '',
  });
};
