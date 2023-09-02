import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AppConfig } from './app/app.config';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((x) => console.log('err', x)); //

// fetch(environment.configUrl, { method: 'get' })
//   .then(async (response) => {
//     await response.json().then(async (data: AppConfig) => {
//       if (environment.production) {
//         enableProdMode();
//       }

//       await platformBrowserDynamic([{ provide: AppConfig, useValue: data }]).bootstrapModule(AppModule);
//     });
//   })
//   .catch((err) => console.error(err));
