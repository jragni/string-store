/**
 * StringStoreHomePage selectors
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
