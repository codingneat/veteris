import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list';
import { UserFormComponent } from './user-form';


const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: 'user',
    component: UserFormComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
