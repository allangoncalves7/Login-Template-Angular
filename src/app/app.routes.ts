import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login',
    loadChildren: () => import('./Login/login.routes').then(m => m.LOGIN_ROUTES)
  }
];
