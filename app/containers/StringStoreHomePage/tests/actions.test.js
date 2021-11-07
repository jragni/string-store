import { changeString, submitString } from '../actions';
import { CHANGE_STRING, SUBMIT_STRING } from '../constants';

describe('Homepage Actions', () => {
  describe('changeString', () => {
    it('should return the correct type and the passed string', () => {
      const fixture = 'TEST';
      const expectedResult = {
        type: CHANGE_STRING,
        string: fixture,
      };

      expect(changeString(fixture)).toEqual(expectedResult);
    });
  });

  describe('submitString', () => {
    it('should return the correct type and the passed string', () => {
      const fixture = 'TEST';
      const expectedResult = {
        type: SUBMIT_STRING,
        string: fixture,
      };
      expect(submitString(fixture)).toEqual(expectedResult);
    });
  });
});
