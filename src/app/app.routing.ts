import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout.component';
import { DashboardComponent } from './components/dashboard';


const appRoutes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: 'app/auth/auth.module#AuthModule'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
         path: 'home', 
         component: DashboardComponent 
      },
      {
        path: 'config',
        loadChildren: 'app/config/config.module#ConfigModule'
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
