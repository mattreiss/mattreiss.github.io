import { put, call } from 'redux-saga/effects';
import Logger from 'js-logger';
import { Api } from '../../Tools';
import { MainActions } from '../Actions';

export const init = function * init() {
  // yield put(MainActions.getConfig());
  // yield put(MainActions.getImages());
  // yield put(MainActions.getDrives());
}


export const run = function * run({command, args}) {
  Logger.time("MainSagas.run")
  let res = yield call(Api.runStacker, command, args)
  Logger.info("MainSagas.run result", command, args, res.data)
  Logger.timeEnd("MainSagas.run")
}

export const ig = function * ig({command, args}) {
  Logger.time("MainSagas.ig")
  let res = yield call(Api.ig, command, args)
  Logger.info("MainSagas.ig result", command, args, res.data)
  Logger.timeEnd("MainSagas.ig")
}

export const list = function * list({directory}) {
  Logger.time("MainSagas.list")
  let res = yield call(Api.list, directory)
  Logger.info("MainSagas.list result", directory, res.data)
  let files = [];
  let folders = [];
  if (res.data) {
    let array = res.data.trim().split(";");
    let folderString = array[0].replace("folders=", "").trim();
    let fileString = array[1].replace("files=", "").trim();
    folders = folderString.split(",");
    files = fileString.split(",");
  }
  yield put(MainActions.putDirectory(directory));
  yield put(MainActions.putFiles(files));
  yield put(MainActions.putFolders(folders));
  Logger.timeEnd("MainSagas.list")
}

export const runWebCrawler = function * runWebCrawler({command, options}) {
  Logger.time("MainSagas.runWebCrawler")
  let res = yield call(Api.runWebCrawler, command, options)
  Logger.info("MainSagas.runWebCrawler result", command, options, res.data)
  Logger.timeEnd("MainSagas.runWebCrawler")
}
