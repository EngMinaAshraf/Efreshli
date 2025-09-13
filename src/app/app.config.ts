// import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
// import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideBrowserGlobalErrorListeners(),
//     provideZonelessChangeDetection(),
//     provideRouter(routes), provideClientHydration(withEventReplay())
//   ]
// };


// src/app/app.config.ts
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
// import { provideHttpClient } from '@angular/common/http';

// Import NgRx providers
// import { provideStore } from '@ngrx/store';
// import { provideEffects } from '@ngrx/effects';
// import { provideStoreDevtools } from '@ngrx/store-devtools';

// Import your root reducer and effects
// import { appReducer } from './core/state/app.state'; // Add this import
// import { ProductEffects } from './core/state/product.effects';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // provideHttpClient(),
    // // NgRx Providers
    // provideStore(appReducer), // Use appReducer here
    // provideEffects(ProductEffects),
    // provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};