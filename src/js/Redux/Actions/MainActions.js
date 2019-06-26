// @flow
import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const merge = (state, data) => {
  // console.log("merge", data);
  return Object.assign({}, state, data)
}

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  // <actionName>:[<arg1>,...,<argN>] --> function actionName(arg1,..., argN)
  init: [],
  run: ['command', 'args'],
  runWebCrawler: ['command', 'options'],
  list: ['directory'],
  putDirectory: ['directory'],
  putFiles: ['files'],
  putFolders: ['folders']
})

export const MainTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  directory: '~/Desktop',
  folders: [],
  files: []
})

/* ------------- Reducers ------------- */
export const init = (state, { config }) => INITIAL_STATE;
export const putDirectory = (state, { directory }) => merge(state, { directory });
export const putFiles = (state, { files }) => merge(state, { files });
export const putFolders = (state, { folders }) => merge(state, { folders });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INIT]: init,
  [Types.PUT_DIRECTORY]: putDirectory,
  [Types.PUT_FILES]: putFiles,
  [Types.PUT_FOLDERS]: putFolders
})

/* ------------- Selectors ------------- */

// Is the current user logged in?
// export const isLoggedIn = (state: Object) => (state.user && state.user !== {})
