import produce from 'immer';

import appReducer from '../reducer';
import {
  loadStrings,
  stringsLoaded,
  stringsLoadingError,
  postString,
  stringPosted,
  stringPostingError,
} from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      string: '',
      strings: [],
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadStrings action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
      draft.strings = [];
    });

    expect(appReducer(state, loadStrings())).toEqual(expectedResult);
  });

  it('should handle the stringsLoaded action correctly', () => {
    const fixture = [
      {
        message: 'My String',
      },
    ];
    const expectedResult = produce(state, draft => {
      draft.strings = fixture;
      draft.loading = false;
    });

    expect(appReducer(state, stringsLoaded(fixture))).toEqual(expectedResult);
  });

  it('should handle the stringsLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.loading = false;
    });

    expect(appReducer(state, stringsLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the postString action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
    });

    expect(appReducer(state, postString())).toEqual(expectedResult);
  });

  it('should handle the stringPosted action correctly', () => {
    const fixture = [
      {
        string: 'My String',
      },
    ];
    const expectedResult = produce(state, draft => {
      draft.string = fixture;
      draft.loading = false;
    });

    expect(appReducer(state, stringPosted(fixture))).toEqual(expectedResult);
  });

  it('should handle the stringsPostingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.loading = false;
    });

    expect(appReducer(state, stringPostingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
