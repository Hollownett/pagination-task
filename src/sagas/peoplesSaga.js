import { all, call, put, takeLatest } from 'redux-saga/effects';
import API from "../utils/API"
import * as actions from "../constants/actions"
import { fillPeoples, getPeoplesError }  from "../actions/actions"

 function*  fetchPeoples(page){ 
  let morePeople = yield call(API.get,`people/?page=${page}`);
  morePeople = morePeople.data.results;
  const [homeworld] = yield all([...morePeople.map( (item) => {
    return  call(handleHomeWorld,item.homeworld);
     })])
     morePeople.map( (item) => {
      item.homeworld = homeworld
       })
     return morePeople;
}

function* handleHomeWorld(world){
    try {
      let homeWorld = yield call(API.get, world);
      world = homeWorld.data.name;
      return world;
    } catch (e) {
      console.log(e);
    }
  };

export function* getPeoplesActionEffect(getPeoplesAction) {
     let { payload } = getPeoplesAction;
     try {
        let morePeople = yield call(fetchPeoples, payload);

        yield put(fillPeoples(morePeople))
        }catch(error){
           yield put(getPeoplesError(error))
   }
}

export function* getPeoplesActionWatcher(){
    yield takeLatest(actions.GET_PEOPLES_REQUEST, getPeoplesActionEffect)
}