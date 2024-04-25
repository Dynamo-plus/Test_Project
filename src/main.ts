import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { TableBasicExample } from './app/table-basic-example';

bootstrapApplication(TableBasicExample, appConfig)
  .catch((err) => console.error(err));
