import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing-page/landing-page.component').then(
        (m) => m.LandingPageComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about-me-page/about-me-page.component').then(
        (m) => m.AboutMePageComponent
      ),
  },
  {
    path: 'project/:id',
    loadComponent: () =>
      import('./description-page/description-page.component').then(
        (m) => m.DescriptionPageComponent
      ),
  },
];
