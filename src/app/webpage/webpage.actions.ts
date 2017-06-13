import { Action } from '@ngrx/store';
import * as fromRoot from '../app.reducer';

export const LOAD_WEBPAGE = 'LOAD_WEBPAGE(WEBPAGE)';
export const LOAD_SUCCEEDED = 'LOAD_SUCCEEDED(WEBPAGE)';
export const LOAD_FAILED = 'LOAD_FAILED(WEBPAGE)';
export const UPDATE_WEBPAGE = 'UPDATE_WEBPAGE(WEBPAGE)';
export const ADD_COMMENT = 'ADD_COMMENT(WEBPAGE)';
export const ADD_TAG = 'ADD_TAG(WEBPAGE)';
export const LOAD_LAST_WEBPAGES = 'LOAD_LAST_WEBPAGES';
export const LOAD_WEBPAGES_SUCCEEDED = 'LOAD_WEBPAGES_SUCCEEDED';
export const LOAD_WEBPAGES = 'LOAD_WEBPAGES';

export class loadSucceeded implements Action {
  readonly type = LOAD_SUCCEEDED;

  constructor(public payload: any) { }
}

export class loadFailed implements Action {
  readonly type = LOAD_FAILED;

  constructor(public error: any) { }
}

export class loadWebpage implements Action {
  readonly type = LOAD_WEBPAGE;

  constructor(public payload: any) { }
}

export class updateWebpage implements Action {
  readonly type = UPDATE_WEBPAGE;

  constructor(public payload: any) { }
}

export class addComment implements Action {
  readonly type = ADD_COMMENT;

  constructor(public payload: any) { }
}

export class addTag implements Action {
  readonly type = ADD_TAG;

  constructor(public payload: any) { }
}

export class loadLastWebpages implements Action {
  readonly type = LOAD_LAST_WEBPAGES;

  constructor() { }
}

export class loadWebpagesSucceeded implements Action {
  readonly type = LOAD_WEBPAGES_SUCCEEDED;

  constructor(public payload: any) { }
}

export class loadWebpages implements Action {
  readonly type = LOAD_WEBPAGES;

  constructor(public payload: any) { }
}

export type Actions
  = loadSucceeded
  | loadFailed
  | loadWebpage
  | updateWebpage
  | addComment
  | addTag
  | loadLastWebpages
  | loadWebpagesSucceeded;

export const getWebpagesState = (state: fromRoot.AppState) => state.webpages.webpages.webpages;

export const getWebpageState = (state: fromRoot.AppState) => state.webpages.webpage.webpage;


