// @flow
import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// const merge = (state, data) => {
//   // console.log("merge", data);
//   return Object.assign({}, state, data)
// }

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  // <actionName>:[<arg1>,...,<argN>] --> function actionName(arg1,..., argN)
  init: [],
  run: ['command', 'args'],
})

export const MainTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
})

/* ------------- Reducers ------------- */
export const init = (state, { config }) => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INIT]: init,
})

/* ------------- Selectors ------------- */

// Is the current user logged in?
// export const isLoggedIn = (state: Object) => (state.user && state.user !== {})
