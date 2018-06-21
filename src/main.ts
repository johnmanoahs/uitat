import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';

if (environment.production) {
  enableProdMode();
  //require("@google/cloud-trace").start();
}

if (environment.GCLOUD_PROJECT) {
  //require("@google/cloud-debug").start();
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
