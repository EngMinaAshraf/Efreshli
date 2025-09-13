// src/main.ts
// import 'zone.js';  // Add this import at the top
// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideRouter } from '@angular/router';
// import { AppComponent } from './app/app';
// import { routes } from './app/app.routes';

// bootstrapApplication(AppComponent, {
//   providers: [provideRouter(routes)]
// });


import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';

// ✅ Zone.js هي الأساس هنا وبتتضاف تلقائي من Angular
import 'zone.js';  

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
