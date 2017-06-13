import { Action } from '@ngrx/store';


export const LOAD_DATA = 'LOAD_DATA';

export class loadData implements Action {
  readonly type = LOAD_DATA;

  constructor() { }
}

export type Actions
  = loadData;