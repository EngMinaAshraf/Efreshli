import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { config } from './app/app.config.server';


const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;

// ✅ Correct import

// ✅ Correct function
// export function getPrerenderParams() {
//   return [
//     { route: '/category/fruits' },
//     { route: '/category/vegetables' },
//     { route: '/category/beverages' }
//   ];
// }
