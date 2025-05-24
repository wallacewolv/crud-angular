import { http, HttpResponse } from 'msw';

import { Course } from '../../src/app/courses/model/course';

export interface LoginBody {
  token: string;
}

export const ListCourses = http.get<never, never, Course[]>(
  '/courses',
  async ({ request }) => {
    const url = new URL(request.url);
    const errorTest = url.searchParams.get('errorTest');

    if (errorTest === 'true') {
      return new HttpResponse(null, { status: 404, statusText: 'Not Found' });
    }

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
