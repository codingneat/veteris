import { Action } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';


export const LOAD_SUCCEEDED_THEMES = 'LOAD_SUCCEEDED(THEMES)';
export const LOAD_FAILED_THEMES = 'LOAD_FAILED(THEMES)';
export const LOAD_SUCCEEDED_TAGS = 'LOAD_SUCCEEDED(TAGS)';
export const LOAD_FAILED_TAGS = 'LOAD_FAILED(TAGS)';
export const REMOVE_THEME = 'REMOVE_THEME(THEMES)';
export const REMOVE_TAG = 'REMOVE_TAG(TAGS)';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY(CATEGORIES)';
export const ADD_THEME = 'ADD_THEME(THEMES)';
export const ADD_TAG = 'ADD_TAG(TAGS)';
export const ADD_CATEGORY = 'ADD_CATEGORY(CATEGORIES)';
export const LOAD_SUCCEEDED_CATEGORIES = 'LOAD_SUCCEEDED(CATEGORIES)';
export const LOAD_FAILED_CATEGORIES = 'LOAD_FAILED(CATEGORIES)';


export class loadThemesSucceeded implements Action {
  readonly type = LOAD_SUCCEEDED_THEMES;

  constructor(public payload: any) { }
}

export class loadThemesFailed implements Action {
  readonly type = LOAD_FAILED_THEMES;

  constructor(public error: any) { }
}

export class loadTagsSucceeded implements Action {
  readonly type = LOAD_SUCCEEDED_TAGS;

  constructor(public payload: any) { }
}

export class loadTagsFailed implements Action {
  readonly type = LOAD_FAILED_TAGS;

  constructor(public error: any) { }
}

export class removeTheme implements Action {
  readonly type = REMOVE_THEME;

  constructor(public payload: any) { }
}

export class removeTag implements Action {
  readonly type = REMOVE_TAG;

  constructor(public payload: any) { }
}

export class removeCategory implements Action {
  readonly type = REMOVE_CATEGORY;

  constructor(public payload: any) { }
}

export class addTheme implements Action {
  readonly type = ADD_THEME;

  constructor(public payload: any) { }
}

export class addTag implements Action {
  readonly type = ADD_TAG;

  constructor(public payload: any) { }
}

export class addCategory implements Action {
  readonly type = ADD_CATEGORY;

  constructor(public payload: any) { }
}

export class loadCategoriesSucceeded implements Action {
  readonly type = LOAD_SUCCEEDED_CATEGORIES;

  constructor(public payload: any) { }
}

export class loadCategoriesFailed implements Action {
  readonly type = LOAD_FAILED_CATEGORIES;

  constructor(public error: any) { }
}


export type Actions
  = loadThemesSucceeded
   | loadThemesFailed
   | loadTagsSucceeded
   | loadTagsFailed
   | removeTheme
   | removeTag
   | removeCategory
   | addTheme
   | addTag
   | addCategory
   | loadCategoriesSucceeded
   | loadCategoriesFailed;

export const getThemesState = (state: fromRoot.AppState) => state.enums.themes.items;

export const getTagsState = (state: fromRoot.AppState) => state.enums.tags.items;

export const getCategoriesState = (state: fromRoot.AppState) => state.enums.categories.items;



