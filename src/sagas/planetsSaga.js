import { all, call, put, takeLatest } from 'redux-saga/effects';
import API from "../utils/API"
import * as actions from "../constants/actions"
import { getPlanetsSuccess, getPlanetsError }  from "../actions/actions"

 function*  fetchPlanets(page){ 
    try {
        let morePlanet = yield call(API.get,`planets/?page=${page}`);
        morePlanet = morePlanet.data.results;
        yield all([...morePlanet.map((item) => {
          return call (handleResidetns,item);
        })])
        return morePlanet
      } catch (e) {
          console.log(e);
      }
}

  function* handleResidetns(planet){
    try {
      const  planetResidents = []
      yield all([...planet.residents.map((resident) => {
         return call (fetchResident, resident, planetResidents);
      })])
      planet.residents = planetResidents;
      return planet;
    } catch (e) {
      console.log(e);
    }
  };

  function* fetchResident(resident, planetResidents){
    try{
      let planetResident  = yield  call(API.get, resident)
      planetResidents.push(planetResident.data.name)
      return planetResidents
    }catch(e){
      console.log(e)
    }
  }

export function* getPlanetsActionEffect(getPlanetsAction) {
     let { payload } = getPlanetsAction;
     try {
        let morePlanets = yield call(fetchPlanets, payload);
        yield put(getPlanetsSuccess(morePlanets))
        }catch(error){
           yield put(getPlanetsError(error))
   }
}

export function* getPlanetsActionWatcher(){
    yield takeLatest(actions.GET_PLANETS_REQUEST, getPlanetsActionEffect)
}