import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebpageComponent } from './webpage/webpage.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {
   path: '',
   component: WebpageComponent,
  }, 
  {
   path: 'search',
   component: SearchComponent,
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebpageRoutingModule {}
