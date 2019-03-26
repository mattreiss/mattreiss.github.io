import { takeLatest, all } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { MainTypes } from '../Actions/MainActions'

/* ------------- Sagas ------------- */

import * as MainSagas from './MainSagas'


/* ------------- Connect Types To Sagas ------------- */

const root = function * root () {
  yield all([
    // Main sagas
    takeLatest(MainTypes.INIT, MainSagas.init),
    takeLatest(MainTypes.GET_CONFIG, MainSagas.getConfig),
    takeLatest(MainTypes.SET_CONFIG, MainSagas.setConfig),
    takeLatest(MainTypes.GET_IMAGES, MainSagas.getImages),
    takeLatest(MainTypes.GET_DRIVES, MainSagas.getDrives),
    takeLatest(MainTypes.CLONE, MainSagas.clone),
  ])
}

export default root;
