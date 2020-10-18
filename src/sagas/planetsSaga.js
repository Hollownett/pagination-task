import { call, put, takeLatest } from 'redux-saga/effects';
import API from "../utils/API"
import * as actions from "../constants/actions"
import { fillPlanets, getPlanetsError }  from "../actions/actions"

async function  fetchPlanets(page){ 
    try {
        let morePlanet = await API.get(`planets/?page=${page}`);
        morePlanet = morePlanet.data.results;
        await Promise.all(
          morePlanet.map(async (item) => {
            item.resident = await handleResidetns(item.residents);
          })
        );
        return morePlanet
      } catch (e) {
        console.log(e);
      }
}

  const handleResidetns = async (residents) => {
    const planetResidents = [];
    try {
      await Promise.all(
      residents.map( async (resident) => {
        let planetResident = await API.get(resident);
        planetResidents.push(planetResident.data.name);
      }))
      return planetResidents;
    } catch (e) {
      console.log(e);
    }
  };

export function* getPlanetsActionEffect(getPlanetsAction) {
     let { payload } = getPlanetsAction;

     try {
        let morePlanets = yield call(fetchPlanets, payload);
        yield put(fillPlanets(morePlanets))
        }catch(error){
           yield put(getPlanetsError(error))
   }
}

export function* getPlanetsActionWatcher(){
    yield takeLatest(actions.GET_PLANETS_REQUEST, getPlanetsActionEffect)
}