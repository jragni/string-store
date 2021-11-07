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
  LOAD_REPOS_SUCCESS, // TODO: REMOVE
  LOAD_REPOS, // TODO: REMOVE
  LOAD_REPOS_ERROR, // TODO: REMOVE
} from './constants';

// The initial state of the App
// TODO: add initial states to initialState
export const initialState = {
  string: '', // NOTE: added for dev.
  strings: [], // NOTE: added for dev.
  loading: false,
  error: false,
  currentUser: false, // TODO: remove when done
  userData: {
    repositories: false, // TODO: remove when done
  },
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
        draft.strings = action.strings; // TODO: verify if this works with getting strings
        break;

      case LOAD_STRINGS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case POST_STRING:
        draft.loading = true;
        draft.error = false;
        break;

      case POST_STRING_SUCCESS:
        draft.loading = false;
        draft.string = action.string; // TODO: verify if this works with getting strings
        toast.success('String added!');
        break;

      case POST_STRING_ERROR:
        draft.error = action.error;
        draft.loading = false;
        toast.error(action.error);
        break;

      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
