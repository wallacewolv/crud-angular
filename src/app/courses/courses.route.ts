import { Routes } from '@angular/router';

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
  },
];
