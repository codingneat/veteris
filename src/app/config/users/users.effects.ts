import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { go } from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { UserService } from './user.service';
import * as users from './users.actions';
import * as app from '../../app.actions';


@Injectable()
export class UsersEffects {

  @Effect() loadUsers$: Observable<Action> = this.actions$
    .ofType(users.LOAD_USERS)
    .switchMap(action =>
      this.userService.getUsers()
        .map(data => ({ type: users.LOAD_SUCCEEDED, payload: data }))
    )
    .catch((error) => {
      return of(new users.loadFailed({ ...error.json(), errorStatus: error.status }))
    });

  constructor(private actions$: Actions, private userService: UserService) { }
}
