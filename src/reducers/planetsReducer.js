import * as actions from "../constants/actions"

const INITIAL_STATE = {
    planets: [],
    error: null, 
    fetching: false,
}

const planetsReducer = ( state = INITIAL_STATE, action ) => {
   switch(action.type){
       case actions.GET_PLANETS_REQUEST: 
         return { ...state, fetching: true, };
       case actions.GET_PLANETS_SUCCESS: 
         let allPlanets = state.planets.concat(action.payload)
         return { ...state, fetching: false, planets: allPlanets }
       case actions.GET_PLANETS_ERROR:
         return { ...state, fetching: false, error: action.error }  
       default: 
         return { ...state } 
   }
} 

export { planetsReducer }
