import { call } from 'redux-saga/effects';
import Logger from 'js-logger';
import { Api } from '../../Tools';
// import { MainActions } from '../Actions';

export const init = function * init() {
  // yield put(MainActions.getConfig());
  // yield put(MainActions.getImages());
  // yield put(MainActions.getDrives());
}


export const run = function * run({command, args}) {
  Logger.time("MainSagas.getConfig")
  let res = yield call(Api.run, command, args)
  Logger.info("MainSagas.getConfig result", command, args, res.data)
  Logger.timeEnd("MainSagas.getConfig")
}
