import * as action from "../constants/actions"
import { createAction, createActions } from "redux-actions"
// Worker triggering acions

export const  {
    getPeoplesRequest,
    getPeoplesError,
    getPeoplesSuccess,
    getPlanetsRequest,
    getPlanetsError,
    getPlanetsSuccess,
    getFilmsRequest,
    getFilmsError,
    getFilmsSuccess
} = createActions({
    [action.GET_PEOPLES_REQUEST]: page => (page),
    [action.GET_PEOPLES_ERROR]: (error) => (error),
    [action.GET_PEOPLES_SUCCESS]: (peoples) => (peoples),
    [action.GET_PLANETS_REQUEST]: (page) => (page), 
    [action.GET_PLANETS_ERROR]: (error) => (error),
    [action.GET_PLANETS_SUCCESS]: (planets) => (planets), 
    [action.GET_FILMS_ERROR]: (error) => (error ),
    [action.GET_FILMS_SUCCESS]: (films) => (films)
}, action.GET_FILMS_REQUEST)
