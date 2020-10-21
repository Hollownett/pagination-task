import * as actions from "../constants/actions"
import { handleActions } from "redux-actions";

const INITIAL_STATE = {
    planets: [],
    error: null, 
    fetching: false,
}

const planetsReducer = handleActions({
   [actions.GET_PLANETS_REQUEST]: (state) => {
    return { ...state, fetching: true };
   },
   [actions.GET_PLANETS_SUCCESS]: (state, action) => { 
    let allPlanets = state.planets.concat(action.payload)
     return {...state,  fetching: false, planets: allPlanets }
   },
   [actions.GET_PLANETS_ERROR]: (state, action) => {
     return {...state, fetching: true, error: action.payload}
   }
}, INITIAL_STATE)

export { planetsReducer }
