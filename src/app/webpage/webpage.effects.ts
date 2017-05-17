import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { WebpageService } from './webpage.service';
import * as webpages from './webpage.actions';

@Injectable()
export class WebpagesEffects {


  @Effect() loadWebpage$: Observable<Action> = this.actions$
    .ofType(webpages.LOAD_WEBPAGE)
    .switchMap(action =>
      this.webpageService.getWebpage(action.payload)
        .map(data => ({ type: webpages.LOAD_SUCCEEDED, payload: data }))
        .catch(err => Observable.of({ type: webpages.LOAD_FAILED, payload: err }))
    );

  @Effect() loadLastWebpages$: Observable<Action> = this.actions$
    .ofType(webpages.LOAD_LAST_WEBPAGES)
    .switchMap(action =>
      this.webpageService.getLastWebpages()
        .map(data => ({ type: webpages.LOAD_WEBPAGES_SUCCEEDED, payload: data }))
        .catch(err => Observable.of({ type: webpages.LOAD_FAILED, payload: err }))
    );
  constructor(private actions$: Actions, private webpageService: WebpageService) { }

}



