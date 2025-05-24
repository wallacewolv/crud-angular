import { http, HttpResponse } from 'msw';

import { Course } from '../../src/app/courses/model/course';

export interface LoginBody {
  token: string;
}

export const ListCourses = http.get<never, never, Course[]>(
  '/courses',
  async () => {
    const response: Course[] = [
      {
        _id: '1',
        name: 'Angular',
        category: 'front-end',
      },
      {
        _id: '2',
        name: 'Node.js',
        category: 'back-end',
      },
    ];

    return HttpResponse.json(response);
  },
);
