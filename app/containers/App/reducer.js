/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { toast } from 'react-toastify';
import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
  POST_STRING,
  POST_STRING_SUCCESS,
  POST_STRING_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  string: '',
  strings: [],
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_STRINGS:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_STRINGS_SUCCESS:
        draft.loading = false;
        draft.strings = action.strings;
        break;

      case LOAD_STRINGS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        toast.error(action.error);
        break;

      case POST_STRING:
        draft.loading = true;
        draft.error = false;
        toast.info('Adding string to database...', {
          autoClose: 1000,
        });
        break;

      case POST_STRING_SUCCESS:
        draft.loading = false;
        draft.string = action.string;
        toast.success('String added!');
        break;

      case POST_STRING_ERROR:
        draft.error = action.error;
        draft.loading = false;
        toast.error(action.error);
        break;
    }
  });

export default appReducer;
