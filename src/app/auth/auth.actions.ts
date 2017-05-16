import { Action } from '@ngrx/store';

export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login_Success';
export const LOGIN_FAILURE = '[Auth] Login_Failure';
export const REDIRECT = '[Auth] Redirect';

export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor(public payload: any) { }
}

export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: any) { }
}

export class LoginFailureAction implements Action {
  readonly type = LOGIN_FAILURE;

  constructor(public payload: any) { }
}

export class Redirect implements Action {
  readonly type = REDIRECT;

  constructor(public payload: any) { }
}

export type Actions
  = LoginAction
   | LoginSuccessAction
   | LoginFailureAction;