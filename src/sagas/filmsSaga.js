import { call, put, takeLatest } from 'redux-saga/effects';
import API from "../utils/API"
import * as actions from "../constants/actions"
import { fillFilms, getFilmsError }  from "../actions/actions"

async function  fetchFilms(){ 
  try {
    let moreFilm = await API.get(`films/`);
    moreFilm = moreFilm.data.results;
    await Promise.all(
      moreFilm.map(async (item) => {
        item.persons = await handleCharacters(item.characters);
        item.planet = await handlePlanets(item.planets);
      })
    );
    return moreFilm
  } catch (e) {
    console.log(e);
  }
}


const handleCharacters = async (persons) => {
  const filmPersons = [];
  try {
    await Promise.all(
    persons.map( async (person) => {
      let filmPerson = await API.get(person);
      filmPersons.push(filmPerson.data.name);
    }))
    return filmPersons;
  } catch (e) {
    console.log(e);
  }
};

const handlePlanets = async (planets) => {
  const filmPlanets = [];
  try {
    await Promise.all(
    planets.map( async (planet) => {
      let filmPlanet = await API.get(planet);
      filmPlanets.push(filmPlanet.data.name);
    }))
    return filmPlanets;
  } catch (e) {
    console.log(e);
  }
};

export function* getFilmsActionEffect() {
     try {
        let moreFilms = yield call(fetchFilms);
        yield put(fillFilms(moreFilms))
        }catch(error){
           yield put(getFilmsError(error))
   }
}

export function* getFilmsActionWatcher(){
    yield takeLatest(actions.GET_FILMS_REQUEST, getFilmsActionEffect)
}