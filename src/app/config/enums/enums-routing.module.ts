import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnumsComponent } from './enums.component';


const routes: Routes = [

  {
   path: '',
   component: EnumsComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnumsRoutingModule {}
