/**
 * Gets the strings from the server.
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import { LOAD_STRINGS } from 'containers/App/constants';
import { stringsLoaded, stringsLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Server repos request/response handler
 */

export function* getStrings() {
  const requestURL = 'http://localhost:3000/api/strings';
  const requestOptions = {
    methods: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const strings = yield call(request, requestURL, requestOptions);
    console.log('strings: ', strings);
    // FIXME strings need to appear
    yield put(stringsLoaded(strings));
  } catch (err) {
    yield put(stringsLoadingError(err));
  }
}

/**
 *  Root saga manages wather lifecycle
 */

export default function* serverData() {
  yield takeLatest(LOAD_STRINGS, getStrings);
}
