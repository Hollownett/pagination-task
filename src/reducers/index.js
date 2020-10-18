import { combineReducers } from 'redux'

import { peoplesReducer } from './peoplesReducer'
import { filmsReducer } from "./filmsReducer"
import { planetsReducer } from "./planetsReducer"

export const rootReducer = combineReducers({
  peoples: peoplesReducer,
  films: filmsReducer,
  planets: planetsReducer,
})
