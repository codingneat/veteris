import * as enums from './enums.actions';
import * as app from '../../app.actions';


export interface EnumState {
  themes: {
    items: any[],
    loading: boolean,
    error?: any
  },
  tags: {
    items: any[],
    loading: boolean,
    error?: any
  },
  categories: {
    items: any[],
    loading: boolean,
    error?: any
  }
}

export const initialState: EnumState = {
  themes: {
    items: [],
    loading: false,
    error: null
  },
  tags: {
    items: [],
    loading: false,
    error: null
  },
  categories: {
    items: [],
    loading: false,
    error: null
  }
};

export function enumsReducer(state = initialState, action): EnumState {
  switch (action.type) {
   case app.LOAD_DATA:
      return {
       themes : { items: [],loading: true, error: null },
       tags : { items: [],loading: true, error: null },
       categories : { items: [],loading: true, error: null }
      };  
    case enums.LOAD_SUCCEEDED_THEMES:
      return Object.assign({}, state, {
        themes: { items: action.payload, loading: false, error: null }
      });
    case enums.LOAD_FAILED_THEMES:
      return Object.assign({}, state, {
        themes: { items: [], loading: false, error: action.error }
      });
    case enums.LOAD_SUCCEEDED_TAGS:
      return Object.assign({}, state, {
        tags: { items: action.payload, loading: false, error: null }
      });
    case enums.LOAD_FAILED_TAGS:
      return Object.assign({}, state, {
        tags: { items: [], loading: false, error: action.error }
      });
    case enums.REMOVE_THEME:
      return Object.assign({}, state, {
        themes: {
          items: [
            ...state.themes.items.slice(0, action.payload),
            ...state.themes.items.slice(action.payload + 1)
          ],
          loading: false,
          error: null
        }
      });
    case enums.REMOVE_TAG:
      return Object.assign({}, state, {
        tags: {
          items: [
            ...state.tags.items.slice(0, action.payload),
            ...state.tags.items.slice(action.payload + 1)
          ],
          loading: false,
          error: null
        }
      });
    case enums.REMOVE_CATEGORY:
      return Object.assign({}, state, {
        categories: {
          items: [
            ...state.categories.items.slice(0, action.payload),
            ...state.categories.items.slice(action.payload + 1)
          ],
          loading: false,
          error: null
        }
      });
    case enums.ADD_THEME:
      console.log(state);

      return Object.assign({}, state, {
        themes: {
          items: [
            ...state.themes.items.slice(0, state.themes.items.length),
            action.payload,
            ...state.themes.items.slice(state.themes.items.length + 1)
          ],
          loading: false,
          error: null
        }
      });
    case enums.ADD_TAG:
      return Object.assign({}, state, {
        tags: {
          items: [
            ...state.tags.items.slice(0, state.tags.items.length),
            action.payload,
            ...state.tags.items.slice(state.tags.items.length + 1)
          ],
          loading: false,
          error: null
        }
      });
    case enums.ADD_CATEGORY:
      return Object.assign({}, state, {
        categories: {
          items: [
            ...state.categories.items.slice(0, state.tags.items.length),
            action.payload,
            ...state.categories.items.slice(state.tags.items.length + 1)
          ],
          loading: false,
          error: null
        }
      });
    case enums.LOAD_SUCCEEDED_CATEGORIES:
      return Object.assign({}, state, {
        categories: { items: action.payload, loading: false, error: null }
      });
    case enums.LOAD_FAILED_CATEGORIES:
      return Object.assign({}, state, {
        categories: { items: [], loading: false, error: action.error }
      });
  }

  return state;
}
