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
} from './constants';

/** loadStrings
 *
 * Load the list of strings, this action starts the request saga
 *
 */
export function loadStrings() {
  return {
    type: LOAD_STRINGS,
  };
}

/** stringsLoaded
 *
 * Dispatches when loading the strings is successful
 *
 * @param {Array} strings: an array of objects from the database
 *                         with data {id, messsage};
 * @returns {object} : returns an object with key of type containing
 *                     LOAD_STRINGS_SUCCESS and the array of string
 *                     the array of strings
 */
export function stringsLoaded(strings) {
  return {
    type: LOAD_STRINGS_SUCCESS,
    strings,
  };
}

/** stringsLoadingError
 *
 * Dispatched when loading the data fails.
 *
 * @param {object} error: the error raised.
 *
 * @return {object}: An action object with a type of LOAD_REPOS_ERROR
 *                   passing the error
 */
export function stringsLoadingError(error) {
  return {
    type: LOAD_STRINGS_ERROR,
    error,
  };
}

/** postString
 *
 * Add string to the database, this action starts the request saga.
 */
export function postString() {
  return {
    type: POST_STRING,
  };
}

/** stringPosted
 *
 * Dispatches when the string has been successfully posted.
 *
 * @param {string} string: the string message to be saved to the database.
 *
 * @returns {object} : returns an object with key of type containing
 *                     POST_STRING_SUCCESS and the string posted.
 */
export function stringPosted(string) {
  return {
    type: POST_STRING_SUCCESS,
    string,
  };
}

/** stringsLoadingError
 *
 * Dispatches when the string post fails.
 *
 * @param {object} error : the error raised.
 *
 * @return {object}: An action object with a type of LOAD_REPOS_ERROR
 *                   passing the error
 */
export function stringPostingError(error) {
  return {
    type: POST_STRING_ERROR,
    error,
  };
}
