/**
 * Tests for StringStoreHomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { stringPosted, stringPostingError } from 'containers/App/actions';
import stringPostData, { postString } from '../saga';
import { POST_STRING } from '../../App/constants';

const string = 'TEST';

/* eslint-disable redux-saga/yield-effects */
describe('postString Saga', () => {
  let postStringGenerator;

  beforeEach(() => {
    postStringGenerator = postString();

    const selectDescriptor = postStringGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = postStringGenerator.next(string).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the postString action if the request is successful', () => {
    const response = {
      msg: 'Successfully added!',
      load: {
        message: 'TEST',
      },
    };
    const putDescriptor = postStringGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(stringPosted(response)));
  });

  it('should call the stringPostingError', () => {
    const response = new Error('Test Error');
    const putDescriptor = postStringGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(stringPostingError(response)));
  });
});

describe('stringPostData Saga', () => {
  const stringPostDataSaga = stringPostData();

  it('should start task to watch for POST_STRING', () => {
    const takeLatestDescriptor = stringPostDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(POST_STRING, postString));
  });
});
