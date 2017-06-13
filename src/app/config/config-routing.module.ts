import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardConfigComponent } from './dashboard/dashboard-config.component';
import { ConfigComponent } from './config.component';


const routes: Routes = [
  {
    path: '',
    component: ConfigComponent,
    children: [
      {
        path: '',
        component: DashboardConfigComponent,
      },
      {
        path: 'users',
        loadChildren: 'app/config/users/users.module#UsersModule'
      },
      {
        path: 'enums',
        loadChildren: 'app/config/enums/enums.module#EnumsModule'
      },

    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
