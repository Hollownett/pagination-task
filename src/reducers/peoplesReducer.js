import * as actions from "../constants/actions"
import { handleActions } from "redux-actions";
const INITIAL_STATE = {
    peoples: [],
    error: null, 
    fetching: false,
}

const peoplesReducer = handleActions({
    [actions.GET_PEOPLES_REQUEST]: (state) => {
      return {...state, fetching: true }
    },
    [actions.GET_PEOPLES_SUCCESS]: (state, action) => {
      let allPeoples = state.peoples.concat(action.payload)
      return {...state, fetching: false, peoples: allPeoples}
    },
    [actions.GET_PEOPLES_ERROR]:(state, action) => {
      return {...state, fetching: false, error: action.payload}
    }
}, INITIAL_STATE)

export {peoplesReducer}
