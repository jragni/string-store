import {
  POST_STRING,
  POST_STRING_SUCCESS,
  POST_STRING_ERROR,
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from '../constants';

import {
  postString,
  stringPosted,
  stringPostingError,
  loadStrings,
  stringsLoaded,
  stringsLoadingError,
} from '../actions';

// TODO add negative tests as well
describe('App Actions', () => {
  describe('loadStrings', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_STRINGS,
      };

      expect(loadStrings()).toEqual(expectedResult);
    });
  });

  describe('stringsLoaded', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = ['Test'];
      const expectedResult = {
        type: LOAD_STRINGS_SUCCESS,
        strings: fixture,
      };

      expect(stringsLoaded(fixture)).toEqual(expectedResult);
    });
  });

  describe('stringsLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_STRINGS_ERROR,
        error: fixture,
      };

      expect(stringsLoadingError(fixture)).toEqual(expectedResult);
    });
  });

  describe('postString', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: POST_STRING,
      };

      expect(postString()).toEqual(expectedResult);
    });
  });

  describe('stringPosted', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = 'Test';
      const expectedResult = {
        type: POST_STRING_SUCCESS,
        string: fixture,
      };

      expect(stringPosted(fixture)).toEqual(expectedResult);
    });
  });

  describe('stringsPostingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: POST_STRING_ERROR,
        error: fixture,
      };

      expect(stringPostingError(fixture)).toEqual(expectedResult);
    });
  });
});
