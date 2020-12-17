import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//import {NgbdTablePaginationModule} from './app/pagination/pagination.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // platformBrowserDynamic()
  // .bootstrapModule(NgbdTablePaginationModule)
  // .then(ref => {
  //   // Ensure Angular destroys itself on hot reloads.
  //   if (window['ngRef']) {
  //     window['ngRef'].destroy();
  //   }
  //   window['ngRef'] = ref;

  //   // Otherwise, log the boot error
  // })
  // .catch(err => console.error(err));
