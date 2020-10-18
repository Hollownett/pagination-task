import { all } from 'redux-saga/effects'
import { getPeoplesActionWatcher } from "./peoplesSaga";
import { getFilmsActionWatcher } from "./filmsSaga"
import { getPlanetsActionWatcher } from "./planetsSaga"

export default function* rootSaga() {
  yield all([
    getPeoplesActionWatcher(),
    getFilmsActionWatcher(),
    getPlanetsActionWatcher(),
  ])
}
