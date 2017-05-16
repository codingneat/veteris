import * as auth from './auth.actions';

export interface AuthState {
    authenticated: boolean;
};

export const initialState: AuthState = {
    authenticated: false
};

export function authReducer(state = initialState, action: auth.Actions): AuthState {
    switch (action.type) {
        case auth.LOGIN_SUCCESS: {
            return Object.assign({}, state, { authenticated: true });
        }
        default: {
            return state;
        }
    }
}

