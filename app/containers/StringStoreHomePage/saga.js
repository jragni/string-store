/**
 * Gets the strings from the database.
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { POST_STRING } from 'containers/App/constants';

import { stringPosted, stringPostingError } from 'containers/App/actions';
import request from 'utils/request';
import { makeSelectString } from 'containers/StringStoreHomePage/selectors';

/** postString
 * StringStore server request/response handler. Handles
 * adding strings to the database.
 */
export function* postString() {
  const string = yield select(makeSelectString());
  // TODO: will need to update the URL to host url for server.
  const requestURL = 'http://localhost:3000/api/strings';
  const callOptions = {
    method: 'POST',
    body: JSON.stringify({ message: string }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    // call our helper see 'utils/request')
    const resp = yield call(request, requestURL, callOptions);
    yield put(stringPosted(resp));
  } catch (err) {
    yield put(stringPostingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */

export default function* stringPostData() {
  yield takeLatest(POST_STRING, postString);
}
