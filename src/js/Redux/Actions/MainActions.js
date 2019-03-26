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
  getConfig: [],
  setConfig: ['config'],
  putConfig: ['config'],
  getImages: [],
  putImages: ['images'],
  getDrives: [],
  putDrives: ['drives'],
  setSrc: ['src'],
  setDest: ['dest'],
  clone: ['src', 'dest'],
  showScreen: ['screen', 'screenProps'],
})

export const MainTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  config: {},
  images: [],
  drives: [],
  src: null,
  dest: null,
  screen: 'MainScreen',
  screenProps: null
})

/* ------------- Reducers ------------- */
export const init = (state, { config }) => INITIAL_STATE;
export const putConfig = (state, { config }) => merge(state, { config });
export const putImages = (state, { images }) => merge(state, { images });
export const putDrives = (state, { drives }) => merge(state, { drives });
export const setSrc = (state, { src }) => merge(state, { src });
export const setDest = (state, { dest }) => merge(state, { dest });
export const showScreen = (state, { screen, screenProps }) => merge(state, { screen, screenProps });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PUT_CONFIG]: putConfig,
  [Types.PUT_IMAGES]: putImages,
  [Types.PUT_DRIVES]: putDrives,
  [Types.SET_SRC]: setSrc,
  [Types.SET_DEST]: setDest,
  [Types.SHOW_SCREEN]: showScreen,
})

/* ------------- Selectors ------------- */

// Is the current user logged in?
// export const isLoggedIn = (state: Object) => (state.user && state.user !== {})
