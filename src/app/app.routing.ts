import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout.component';
import { DashboardComponent } from './components/dashboard';
import { PageNotFoundComponent } from './components/page-not-found/not-found.component';
import { SavingWebpageComponent } from './components/saving-webpage/saving-webpage.component';
import { UnauthenticatedGuard } from './guards/unauthenticated.guard';
import { CanDeactivateGuard } from './guards/can-deactivate-guard.service';
import { MainLayoutComponentGuard } from './guards/main-layout.guard';


const appRoutes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: 'app/auth/auth.module#AuthModule',
    canActivate: [UnauthenticatedGuard]
  },
  {
    path: 'saving_webpage',
    component: SavingWebpageComponent,
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [MainLayoutComponentGuard],
    children: [
      {
        path: 'home',
        component: DashboardComponent
      },
      {
        path: 'config',
        canActivateChild: [MainLayoutComponentGuard],
        loadChildren: 'app/config/config.module#ConfigModule'
      },
      {
        path: 'webpage',
        canActivateChild: [MainLayoutComponentGuard],
        loadChildren: 'app/webpage/webpage.module#WebpageModule'
      },
    ]
  },
  {
    path: '**',
    canActivate: [UnauthenticatedGuard],
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
