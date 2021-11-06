/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

// NOTE: ADDED FOR DEV
const makeSelectStrings = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.strings,
  );

// END DEV
// TODO: delete unnecessary selectors upon completion
const makeSelectCurrentUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.currentUser,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectRepos = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userData.repositories,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectStrings,
  makeSelectCurrentUser,
  makeSelectRepos,
  makeSelectLocation,
};
