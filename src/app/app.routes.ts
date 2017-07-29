import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { InfoComponent } from './info/info.component';

// Route Configuration
export const routes: Routes = [
  {
    path: 'info/:title/:id',
    component: InfoComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
