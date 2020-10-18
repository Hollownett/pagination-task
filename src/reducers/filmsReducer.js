import * as actions from "../constants/actions"

const INITIAL_STATE = {
    films: [],
    error: null, 
    fetching: false,
}

const filmsReducer = ( state = INITIAL_STATE, action ) => {
   switch(action.type){
       case actions.GET_FILMS_REQUEST: 
         return { ...state, fetching: true, };
       case actions.GET_FILMS_SUCCESS: 
         let allFilms = state.films.concat(action.payload)
         return { ...state, fetching: false, films: allFilms }
       case actions.GET_PLANETS_ERROR:
         return { ...state, fetching: false, error: action.error }  
       default: 
         return { ...state } 
   }
} 

export { filmsReducer }
