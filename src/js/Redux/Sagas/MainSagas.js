import { put, call } from 'redux-saga/effects';
import Logger from 'js-logger';
import { Api } from '../../Tools';
import { MainActions } from '../Actions';

export const init = function * init() {
  yield put(MainActions.getConfig());
  yield put(MainActions.getImages());
  yield put(MainActions.getDrives());
}

function * updateConfig(config) {
  // let {
  //   lang,
  //   theme
  // } = config;
  // Translator.setLang(lang);
  // Theme.setTheme(theme);
  yield put(MainActions.putConfig(config))
}

export const getConfig = function * getConfig() {
  Logger.time("MainSagas.getConfig")
  let res = yield call(Api.getConfig)
  let config = res.data
  Logger.info("MainSagas.getConfig result", config)
  yield updateConfig(config)
  Logger.timeEnd("MainSagas.getConfig")
}

export const setConfig = function * setConfig({config}) {
  Logger.time("MainSagas.setConfig")
  Logger.info("MainSagas.setConfig", config)
  let res = yield call(Api.setConfig, config)
  Logger.info("MainSagas.setConfig result", res)
  yield updateConfig(config)
  Logger.timeEnd("MainSagas.setConfig")
}

export const getImages = function * getImages() {
  Logger.time("MainSagas.getImages")
  let res = yield call(Api.getImages)
  let images = res.data ? res.data.trim().split(";") : [];
  Logger.info("MainSagas.getImages result", images)
  yield put(MainActions.putImages(images))
  Logger.timeEnd("MainSagas.getImages")
}

export const getDrives = function * getDrives() {
  Logger.time("MainSagas.getDrives")
  let res = yield call(Api.getDrives)
  let drives = res.data ? res.data.trim().split(";") : [];
  Logger.info("MainSagas.getDrives result", drives)
  yield put(MainActions.putDrives(drives))
  Logger.timeEnd("MainSagas.getDrives")
}


export const clone = function * clone({src, dest}) {
  Logger.time("MainSagas.clone")
  Logger.info("MainSagas.clone", src, dest)
  src = src.split(":")[0];
  dest = dest.split(":")[0];
  let res = yield call(Api.clone, src, dest)
  let status = res.data
  Logger.info("MainSagas.clone result", status)
  Logger.timeEnd("MainSagas.clone")
}
