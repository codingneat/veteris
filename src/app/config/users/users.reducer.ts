import * as users from './users.actions';


export interface UserState {
  items: any[];
  loading: boolean;
  error?: any;
};

export const initialState: UserState = {
  items: [],
  loading: false,
  error: null,
};

export function usersReducer(state = initialState, action: users.Actions): UserState {
  switch (action.type) {
    case users.LOAD_USERS:
      return {
        items: [],
        loading: true,
        error: null,
      };
    case users.LOAD_SUCCEEDED:
      return {
        items: action.payload,
        loading: false,
        error: null
      };
    case users.LOAD_FAILED:
      return {
        items: [],
        loading: false,
        error: action.payload
      };
    case users.REMOVE_USER:
      return {
        items: [
          ...state.items.slice(0, action.payload),
          ...state.items.slice(action.payload + 1)
        ],
        loading: false,
        error: null
      };
    default: {
      return state;
    }
  }
}

