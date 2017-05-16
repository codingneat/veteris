import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { go } from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


import { AuthService } from './auth.service'
import * as actions from './auth.actions';


@Injectable()
export class AuthEffects {


  @Effect() login$: Observable<Action> = this.actions$
    .ofType(actions.LOGIN)
    .switchMap(action =>
      this.authService.login(action.payload)
        .map(res => ({ type: actions.LOGIN_SUCCESS, payload: res }))
        .catch(err => Observable.of({ type: actions.LOGIN_FAILURE, payload: err }))
    );

  @Effect() loginSuccess$: Observable<Action> = this.actions$
    .ofType(actions.LOGIN_SUCCESS)
    .map(() => go(['/home']));

  @Effect() errorStatus403$ = this.actions$
    .map(action => action.payload)
    .filter(payload => payload && payload.errorStatus === 403)
    .map(payload => go(['/login']));

  @Effect() errorStatus500$ = this.actions$
    .map(action => action.payload)
    .filter(payload => payload && payload.errorStatus === 500)
    .map(payload => go(['/login']));
    



    constructor(private actions$: Actions, private router: Router, private authService: AuthService) { }



}