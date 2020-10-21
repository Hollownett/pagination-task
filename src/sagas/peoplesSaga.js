import { all, call, put, takeLatest } from 'redux-saga/effects';
import API from "../utils/API"
import * as actions from "../constants/actions"
import { getPeoplesSuccess , getPeoplesError }  from "../actions/actions"

 function*  fetchPeoples(page){ 
    try {
      let morePeople = yield call(API.get,`people/?page=${page}`);
      morePeople = morePeople.data.results;
      yield all([...morePeople.map( (item) => {
      return  call(handleHomeWorld,item);
      })])
      return morePeople;
     } catch(e) {
         console.log(e)
   }
  
}

function* handleHomeWorld(people){
    try {
      let homeWorld = yield call(API.get, people.homeworld);
      people.homeworld = homeWorld.data.name;
      return people;
    } catch (e) {
      console.log(e);
    }
  };

export function* getPeoplesActionEffect(getPeoplesAction) {
     let { payload } = getPeoplesAction;
     try {
        let morePeople = yield call(fetchPeoples, payload);

        yield put(getPeoplesSuccess(morePeople))
        }catch(error){
           yield put(getPeoplesError(error))
   }
}

export function* getPeoplesActionWatcher(){
    yield takeLatest(actions.GET_PEOPLES_REQUEST, getPeoplesActionEffect)
}