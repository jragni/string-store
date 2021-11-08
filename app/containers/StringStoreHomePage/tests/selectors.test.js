/**
 * Test for the StringStoreHomePage Selectors
 *
 * State:
 *  string : the string used for the input for the form.
 */

import { selectStringStoreHome, makeSelectString } from '../selectors';

describe('selectHome', () => {
  it('should select the stringstorehome state', () => {
    const homeState = {
      string: 'TEST',
    };
    const mockedState = {
      stringstorehome: homeState,
    };
    expect(selectStringStoreHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectString', () => {
  const stringSelector = makeSelectString();
  it('should select string', () => {
    const string = 'TEST';
    const mockedState = {
      stringstorehome: { string },
    };
    expect(stringSelector(mockedState)).toEqual(string);
  });
});
