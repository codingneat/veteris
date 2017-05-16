import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { EnumsService } from './enums.service';
import * as enums from './enums.actions';
import * as app from '../../app.actions';

@Injectable()
export class EnumsEffects {


  @Effect() loadThemes$: Observable<Action> = this.actions$
    .ofType(app.LOAD_DATA)
    .switchMap(action =>
      this.enumsService.getThemes()
        .map(data => ({ type: enums.LOAD_SUCCEEDED_THEMES, payload: data }))
        .catch(err => Observable.of({ type: enums.LOAD_FAILED_THEMES, payload: err }))
    );

  @Effect() loadTags$: Observable<Action> = this.actions$
    .ofType(app.LOAD_DATA)
    .switchMap(action =>
      this.enumsService.getTags()
        .map(data => ({ type: enums.LOAD_SUCCEEDED_TAGS, payload: data }))
        .catch(err => Observable.of({ type: enums.LOAD_FAILED_TAGS, payload: err }))
    );

  @Effect() loadCategories$: Observable<Action> = this.actions$
    .ofType(app.LOAD_DATA)
    .switchMap(action =>
      this.enumsService.getCategories()
        .map(data => ({ type: enums.LOAD_SUCCEEDED_CATEGORIES, payload: data }))
        .catch(err => Observable.of({ type: enums.LOAD_FAILED_CATEGORIES, payload: err }))
    );

  constructor(private actions$: Actions, private enumsService: EnumsService) { }

}



