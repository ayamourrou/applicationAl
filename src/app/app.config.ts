import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// Exporte une configuration de l'application
export const appConfig = {
  providers: [
    provideRouter(routes)
    // Ajoute d'autres providers ici si nécessaire
  ]
};
