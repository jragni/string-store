/**
 * Tests for StringDisplayPage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { stringsLoaded, stringsLoadingError } from 'containers/App/actions';
import { LOAD_STRINGS } from '../../App/constants';

import serverData, { getStrings } from '../saga';

// const strings = [{ id: 1, message: 'TEST' }];

/* eslint-disable redux-saga/yield-effects */
describe('getStrings Saga', () => {
  let getStringsGenerator;

  beforeEach(() => {
    getStringsGenerator = getStrings();

    const selectDescriptor = getStringsGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the stringsLoaded action if it requests the data successfully', () => {
    const response = [
      {
        id: 1,
        message: 'TEST',
      },
    ];

    const putDescriptor = getStringsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(stringsLoaded(response)));
  });

  it('should dispatch the stringsLoadingError action if the response is errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getStringsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(stringsLoadingError(response)));
  });
});

describe('serverData Saga', () => {
  const getServerData = serverData();

  it('should start task to watch for LOAD_STRINGS action', () => {
    const takeLatestDescriptor = getServerData.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_STRINGS, getStrings));
  });
});
