import * as action from "../constants/actions"
import { createAction } from "redux-actions"
// Worker triggering acions

const getPeoples = createAction(action.GET_PEOPLES_REQUEST, page => page)

const getPlanets = createAction(action.GET_PLANETS_REQUEST, page => page)

const getFilms = createAction(action.GET_FILMS_REQUEST) 

// Redux state triggering actions 

// action creators for Peoples
const getPeoplesError =  createAction(action.GET_PEOPLES_ERROR, error => error)

const fillPeoples = createAction(action.GET_PEOPLES_SUCCESS, peoples => peoples) 

// action creators Planets
const getPlanetsError =  createAction(action.GET_PLANETS_ERROR, error => error) 

const fillPlanets =  createAction(action.GET_PLANETS_SUCCESS, planets => planets) 

// action creators for Films

const getFilmsError =  createAction(action.GET_FILMS_ERROR, error => error) 


const fillFilms = createAction(action.GET_FILMS_SUCCESS, films => films) 

export {
    getPeoples,
    getPlanets,
    getFilms,
    getPeoplesError,
    getPlanetsError,
    getFilmsError,
    fillPeoples,
    fillPlanets,
    fillFilms,
}
