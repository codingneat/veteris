import { Component, Input} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../app.reducer';
import * as webpages  from '../webpage.actions';
import { WebpageService }  from '../webpage.service';
import { Webpage } from '../../models/webpage'


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.styl' ]
})

export class SearchComponent{
  webpages$: Observable<any[]>

  constructor(
      private store: Store<fromRoot.AppState>, 
      private webpageService: WebpageService, 
  ) {
    this.webpages$ = store.select(webpages.getWebpagesState);
  }


}
