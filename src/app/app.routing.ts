import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout.component';
import { HomeComponent } from './components/home.component';



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
         component: HomeComponent 
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
