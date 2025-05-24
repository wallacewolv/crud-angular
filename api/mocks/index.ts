import { setupWorker } from 'msw/browser';

import { environment } from '../../src/environment/environment';
import { ListCourses } from './list-courses';

export const worker = setupWorker(ListCourses);

export async function enableMSW() {
  if (environment.production) {
    return;
  }
  await worker.start();
}
