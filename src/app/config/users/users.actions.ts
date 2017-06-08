import { Action } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';


export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_SUCCEEDED = 'LOAD_SUCCEEDED(USERS)';
export const LOAD_FAILED = 'LOAD_FAILED(USERS)';
export const REMOVE_USER = 'REMOVE_USER(USERS)';


export class loadSucceeded implements Action {
  readonly type = LOAD_SUCCEEDED;

  constructor(public payload: any) { }
}

export class loadFailed implements Action {
  readonly type = LOAD_FAILED;

  constructor(public payload: any) { }
}

export class loadUsers implements Action {
  readonly type = LOAD_USERS;

  constructor() { }
}

export class removeUser implements Action {
  readonly type = REMOVE_USER;

  constructor(public payload: any) { }
}

export type Actions
  = loadSucceeded
  | loadFailed
  | removeUser
  | loadUsers;

export const getUsersState = (state: fromRoot.AppState) => state.users.items;

