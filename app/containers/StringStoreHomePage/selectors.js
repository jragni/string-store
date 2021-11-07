/**
 * StringStoreHomePage selectors
 *
 * States:
 *  string {String}: the string used for the input.
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectStringStoreHome = state => state.stringstorehome || initialState;

const makeSelectString = () =>
  createSelector(
    selectStringStoreHome,
    homeState => homeState.string,
  );

export { selectStringStoreHome, makeSelectString };
