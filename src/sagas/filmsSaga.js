import { all, call, put, takeLatest } from 'redux-saga/effects';
import API from "../utils/API"
import * as actions from "../constants/actions"
import { getFilmsSuccess, getFilmsError }  from "../actions/actions"

function*  fetchFilms(){ 
    let moreFilms = yield call(API.get,`films/`);
    moreFilms = moreFilms.data.results;
    yield all([...moreFilms.map( (item) => {
      return  call(handlePlanets, item)
     })])
    yield all([...moreFilms.map( (item) => {
      return call(handleCharacters, item)
     })])
     return moreFilms;
}

function* handleCharacters (film){
  const filmPersons = [];
  try {
    yield all(film.characters.map((person) => {
      return call(fetchCharacter, person, filmPersons)
    }))
    film.characters = filmPersons;
    return film;
  } catch (e) {
    console.log(e);
  }
};

function* fetchCharacter(person, filmPersons){
  try{
    let filmPerson = yield call(API.get, person)
    filmPersons.push(filmPerson.data.name)
    return filmPersons;
  } catch(e){
    console.log(e);
  }
} 

function* handlePlanets(film){
  const filmPlanets = [];
  try {
    yield all( film.planets.map((planet) => {
      return  call (fetchPlanets, planet, filmPlanets);
    }))
    film.planets = filmPlanets
    return film;
  } catch (e) {
    console.log(e);
  }
};

function* fetchPlanets(planet, filmPlanets){
  try{
    let filmPlanet = yield call(API.get, planet)
    filmPlanets.push(filmPlanet.data.name)
    return filmPlanets
  }catch(e){
    console.log(e)
  }
}

export function* getFilmsActionEffect() {
     try {
        let moreFilm = yield call(fetchFilms)
        yield put(getFilmsSuccess(moreFilm))
     } catch(e) {
        yield put(getFilmsError(e))
     }
}

export function* getFilmsActionWatcher(){
    yield takeLatest(actions.GET_FILMS_REQUEST, getFilmsActionEffect)
}