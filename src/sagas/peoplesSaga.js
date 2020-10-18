import { call, put, takeLatest } from 'redux-saga/effects';
import API from "../utils/API"
import * as actions from "../constants/actions"
import { fillPeoples, getPeoplesError }  from "../actions/actions"

async function  fetchPeoples(page){ 
    let morePeople = await API.get(`people/?page=${page}`);
    morePeople = morePeople.data.results;
    await Promise.all(
      morePeople.map(async (item) => {
        item.homeworld = await handleHomeWorld(item.homeworld);
      }))
    return morePeople
}

const handleHomeWorld = async (world) => {
    try {
      let homeWorld = await API.get(world);
      homeWorld = homeWorld.data.name;
      return homeWorld;
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