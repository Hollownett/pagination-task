import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import API from "../utils/API"
import * as actions from "../constants/actions"
import { fillFilms, getFilmsError }  from "../actions/actions"

function  fetchFilms(){ 
    return API.get(`films/`);
}

function fetchSome(param){
  return API.get(param);
}

function* handleCharacters (persons){
  const filmPersons = [];
  console.log(persons);
  try {
    yield all(persons.map((person) => {
      let filmPerson = call(fetchSome,person);
      filmPersons.push(filmPerson.data.name);
    }))
    return filmPersons;
  } catch (e) {
    console.log(e);
  }
};

function* handlePlanets (planets){
  const filmPlanets = [];
  try {
    yield all( planets.map((planet) => {
      let filmPlanet = call (fetchSome,planet);
      filmPlanets.push(filmPlanet.data.name);
    }))
    return filmPlanets;
  } catch (e) {
    console.log(e);
  }
};

export function* getFilmsActionEffect() {
     try {
        let moreFilm = yield call(fetchFilms);
        moreFilm = moreFilm.data.results;
        yield all (moreFilm.map((item) => {
          //  item.persons  = call(handleCharacters(item.characters))
          //  item.planet = call(handlePlanets,item.planets)
          }))
        yield put(fillFilms(moreFilm))
        }catch(error){
           yield put(getFilmsError(error))
   }
}

export function* getFilmsActionWatcher(){
    yield takeLatest(actions.GET_FILMS_REQUEST, getFilmsActionEffect)
}