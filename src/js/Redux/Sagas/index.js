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
    takeLatest(MainTypes.RUN, MainSagas.run),
    takeLatest(MainTypes.RUN_WEB_CRAWLER, MainSagas.runWebCrawler),
    takeLatest(MainTypes.LIST, MainSagas.list)
  ])
}

export default root;
