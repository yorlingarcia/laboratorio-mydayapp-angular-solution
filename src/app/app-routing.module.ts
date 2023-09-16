import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'all',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'pending',
    component: HomeComponent,
  },
  {
    path: 'completed',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: 'all',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
