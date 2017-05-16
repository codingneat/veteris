import { ActionReducer, combineReducers } from '@ngrx/store';
import { routerReducer, RouterState } from '@ngrx/router-store';
import { counterReducer } from './components/counter';
import { CounterState } from './components/home.component';
import { authReducer, AuthState } from './auth/auth.reducer';
import { enumsReducer, EnumState } from './config/enums/enums.reducer';
import { usersReducer, UserState } from './config/users/users.reducer';

export interface AppState {
  RouterState,
  authState: AuthState,
  counterState: CounterState,
  enums: EnumState,
  users: UserState
}

const reducers = {
  routerReducer,
  counter: counterReducer,
  auth: authReducer,
  enums: enumsReducer,
  users: usersReducer
};

const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function appReducer(state: any, action: any) {
    return productionReducer(state, action);
}