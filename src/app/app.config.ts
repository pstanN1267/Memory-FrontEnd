import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import {
  heroArrowLeft,
  heroArrowPath,
  heroCheckCircle,
  heroFaceFrown,
  heroFaceSmile,
  heroFolderOpen,
  heroNoSymbol,
  heroPlusCircle,
  heroRocketLaunch,
} from '@ng-icons/heroicons/outline';
<<<<<<< HEAD
import { provideHttpClient } from '@angular/common/http';
=======
import {provideHttpClient} from "@angular/common/http";
>>>>>>> Memory-FrontEnd/master

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
<<<<<<< HEAD
    provideNgIconsConfig({ size: '1.5em' }),
=======
    provideNgIconsConfig({size: '1.5em'}),
>>>>>>> Memory-FrontEnd/master
    provideIcons({
      heroArrowLeft,
      heroArrowPath,
      heroNoSymbol,
      heroPlusCircle,
      heroCheckCircle,
      heroFolderOpen,
      heroRocketLaunch,
      heroFaceFrown,
      heroFaceSmile,
    }),
  ],
<<<<<<< HEAD
=======

>>>>>>> Memory-FrontEnd/master
};
