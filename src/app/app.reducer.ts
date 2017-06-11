import { ActionReducer, combineReducers } from '@ngrx/store';
import { routerReducer, RouterState } from '@ngrx/router-store';
import { authReducer, AuthState } from './auth/auth.reducer';
import { enumsReducer, EnumState } from './config/enums/enums.reducer';
import { usersReducer, UserState } from './config/users/users.reducer';
import { webpagesReducer, WebpageState } from './webpage/webpage.reducer';

export interface AppState {
  RouterState,
  authState: AuthState,
  enums: EnumState,
  users: UserState,
  webpages: WebpageState
}

const reducers = {
  routerReducer,
  auth: authReducer,
  enums: enumsReducer,
  users: usersReducer,
  webpages: webpagesReducer
};

const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function appReducer(state: any, action: any) {
    return productionReducer(state, action);
}