/**
 * Tests for the StringStoreHomePage reducers
 */

import produce from 'immer';
import stringStoreHomeReducer from '../reducer';
import { changeString } from '../actions';

/* eslint-disable defalut-case, no-param-reassign */
describe('stringStoreHomeReducer', () => {
  let state;

  beforeEach(() => {
    state = {
      string: '',
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(stringStoreHomeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeString action appropriately', () => {
    const fixture = 'TEST';
    const expectedResult = produce(state, draft => {
      draft.string = fixture;
    });

    expect(stringStoreHomeReducer(state, changeString(fixture))).toEqual(
      expectedResult,
    );
  });
});
