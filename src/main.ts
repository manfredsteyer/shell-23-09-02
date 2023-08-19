import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {AppConfig} from './app/app.config';
import { loadManifest } from '@angular-architects/module-federation';

loadManifest('assets/mf.manifest.json')
	.catch(err => console.error('Error loading remote entries', err));

if (environment.production) {
  enableProdMode();
}

fetch(environment.configUrl, { method: 'get' }).then(async response => {
  await response.json().then(async (data: AppConfig) => {
    if (environment.production) {
      enableProdMode();
    }

    await platformBrowserDynamic([{ provide: AppConfig, useValue: data }])
      .bootstrapModule(AppModule);

  });
}).catch(err => console.error(err));
