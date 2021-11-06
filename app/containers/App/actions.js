/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  POST_STRING,
  POST_STRING_SUCCESS,
  POST_STRING_ERROR,
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
} from './constants';

// TODO: DELETE STARTING HERE
/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}
// END DELETE

// TODO: Docstrings for 3 functions below.
/** loadStrings
 *
 */
export function loadStrings() {
  return {
    type: LOAD_STRINGS,
  };
}

/** stringsLoaded
 * TODO: add docstrings
 */
export function stringsLoaded(strings) {
  return {
    type: LOAD_STRINGS_SUCCESS,
    strings,
  };
}

/** stringsLoadingError
 * TODO: add docstrings
 */
export function stringLoadingError(error) {
  return {
    type: LOAD_STRINGS_ERROR,
    error,
  };
}

/**
 * TODO: add docstring
 * @returns
 */
export function postString() {
  return {
    type: POST_STRING,
  };
}

/** stringPosted
 * TODO: add docstrings
 */
export function stringPosted(string) {
  return {
    type: POST_STRING_SUCCESS,
    string,
  };
}

/** stringsLoadingError
 * TODO: add docstrings
 */
export function stringPostingError(error) {
  return {
    type: POST_STRING_ERROR,
    error,
  };
}
