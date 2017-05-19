import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module';
import { WebpageRoutingModule } from './webpage-routing.module';

import { WebpageComponent } from './webpage/webpage.component';
import { WebpageLeftCardComponent, WebpageFormMetadataComponent, WebpageCommentsComponent, WebpageTagsComponent } from './webpage/components';
import { WebpagesComponent } from './webpages/webpages.component';
import { WebpageCardComponent } from './webpages/components';
import { SearchComponent } from './search/search.component';
import { SearchFormComponent } from './search/components';


import { WebpageService } from './webpage.service';

@NgModule({
  declarations: [ 
    WebpageCardComponent,
    WebpageComponent, 
    WebpageLeftCardComponent,
    WebpageFormMetadataComponent,
    WebpageCommentsComponent,
    WebpageTagsComponent, 
    WebpagesComponent,
    SearchComponent,
    SearchFormComponent 
  ],
  imports: [
    SharedModule,
    WebpageRoutingModule
  ],
  providers: [
    WebpageService,
  ],
  exports: [ 
    WebpageComponent, 
    WebpagesComponent
  ],
})
export class WebpageModule {}