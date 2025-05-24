import { bootstrapApplication } from '@angular/platform-browser';

import { worker } from '../api/mocks';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { environment } from './environment/environment';

async function initializeApp() {
  if (!environment.production) {
    await worker.start();
  }

  bootstrapApplication(AppComponent, appConfig);
}

initializeApp();
