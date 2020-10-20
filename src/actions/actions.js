import * as action from "../constants/actions"
import { createAction } from "redux-actions"
// Worker triggering acions

const getPeoples = createAction(action.GET_PEOPLES_REQUEST, page => page)

const getPlanets = createAction(action.GET_PLANETS_REQUEST, page => page)

const getFilms = createAction(action.GET_FILMS_REQUEST) 

// Redux state triggering actions 

// action creators for Peoples
const getPeoplesError = error => {
    return { type: action.GET_PEOPLES_ERROR, payload: error }
}

const fillPeoples = peoples => {
    return { type: action.GET_PEOPLES_SUCCESS, payload: peoples }
}

// action creators Planets
const getPlanetsError = error => {
    return { type: action.GET_PLANETS_ERROR, payload: error }
}

const fillPlanets = planets => {
    return { type: action.GET_PLANETS_SUCCESS, payload: planets }
}

// action creators for Films
const getFilmsError = error => {
    return { type: action.GET_FILMS_ERROR, payload: error }
}

const fillFilms = films => {
    return { type: action.GET_FILMS_SUCCESS, payload: films }
}


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
