import * as actions from "../constants/actions"

const INITIAL_STATE = {
    peoples: [],
    error: null, 
    fetching: false,
}

const peoplesReducer = ( state = INITIAL_STATE, action ) => {
   switch(action.type){
       case actions.GET_PEOPLES_REQUEST: 
         return { ...state, fetching: true, };
       case actions.GET_PEOPLES_SUCCESS: 
         let allPeoples = state.peoples.concat(action.payload)
         return { ...state, fetching: false, peoples: allPeoples }
       case actions.GET_PEOPLES_ERROR:
         return { ...state, fetching: false, error: action.error }  
       default: 
         return { ...state } 
   }
} 

export {peoplesReducer}
