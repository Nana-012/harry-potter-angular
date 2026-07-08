import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // 👈 Corregido: sin .ts y con la ruta exacta hacia './app/app'

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
