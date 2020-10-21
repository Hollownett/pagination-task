import * as actions from "../constants/actions"
import { handleActions } from "redux-actions"

const INITIAL_STATE = {
    films: [],
    error: null, 
    fetching: false,
}

const filmsReducer = handleActions({
   [actions.GET_FILMS_REQUEST]: (state) => {
     return {...state, fetching: true}
   },
   [actions.GET_FILMS_SUCCESS]: (state, action) => { 
    let allFilms = state.films.concat(action.payload)
     return {...state, fetchin: false, films: allFilms} 
   },
   [actions.GET_FILMS_ERROR]: (state, action) => {
     return {...state, fetching: false, error: action.payload}
   }
},INITIAL_STATE)

export { filmsReducer }
