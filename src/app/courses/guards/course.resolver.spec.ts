import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { Course } from '../model/course';
import { CourseResolver } from './course.resolver';

describe('CourseResolver', () => {
  const executeResolver: ResolveFn<Course> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => CourseResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
