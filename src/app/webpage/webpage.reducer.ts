import * as webpages from './webpage.actions';


export interface WebpageState {
  webpage: {
    webpage: any,
    loading: boolean,
    error: any
  },
  webpages: {
    webpages: any[],
    loading: boolean,
    error: any
  }
}

export const initialState: WebpageState = {
  webpage: {
    webpage: {},
    loading: false,
    error: null
  },
  webpages: {
    webpages: [],
    loading: false,
    error: null
  }

};

export function webpagesReducer(state = initialState, action): WebpageState {
  switch (action.type) {
    case webpages.LOAD_WEBPAGE:
      return  Object.assign({}, state,  { webpage : {
         webpage : {},
         loading: true, 
         error: null 
      }});
    case webpages.LOAD_SUCCEEDED:
      if(action.payload.pertinence.length != 0) action.payload.points = action.payload.pertinence[0].points.toString();
      return  Object.assign({}, state,  { webpage : {
         webpage : action.payload,
         loading: false, 
         error: null
      }});
    case webpages.LOAD_FAILED:
      return  Object.assign({}, state,  { webpage : {
         webpage : {},
         loading: false, 
         error: action.error 
      }});
    case webpages.UPDATE_WEBPAGE:
      return  Object.assign({}, state,  { webpage : {
         webpage : action.payload,
         loading: false, 
         error: null 
      }});
    case webpages.ADD_COMMENT:
      return  Object.assign({}, state, {
         webpage : Object.assign({}, state.webpage,  { comments:[
            ...state.webpage.webpage.comments.slice(0, state.webpage.webpage.comments.length),
            action.payload,
            ...state.webpage.webpage.comments.slice(state.webpage.webpage.comments.length + 1)
         ]}),
         loading: false, 
         error: null 
      });
    case webpages.ADD_TAG:
      return  Object.assign({}, state, {
         webpage : Object.assign({}, state,  { webpage : { tags:[
            ...state.webpage.webpage.tags.slice(0, state.webpage.webpage.tags.length),
            action.payload,
            ...state.webpage.webpage.tags.slice(state.webpage.webpage.tags.length + 1)
         ]}}),
         loading: false, 
         error: null 
      });
    case webpages.LOAD_WEBPAGES_SUCCEEDED:
        return  Object.assign({}, state, { webpages:{
            webpages : action.payload,
            loading: false, 
            error: null
        }});
  }

  return state;
}
