import { Routes } from '@angular/router';

import { CourseResolver } from './guards/course.resolver';

export const COURSES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./containers/courses/courses.component').then(
        (c) => c.CoursesComponent,
      ),
  },
  {
    path: 'new',
    loadComponent: () =>
      import('./containers/course-form/course-form.component').then(
        (c) => c.CourseFormComponent,
      ),
    resolve: { course: CourseResolver },
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./containers/course-form/course-form.component').then(
        (c) => c.CourseFormComponent,
      ),
    resolve: { course: CourseResolver },
  },
];
