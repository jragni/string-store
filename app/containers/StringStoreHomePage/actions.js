/**
 * StringStoreHomePage Actions
 */

const { CHANGE_STRING, SUBMIT_STRING } = require('./constants');

/** changeString
 * Action that changes the input field of the form.
 *
 * @param {string} string: the new text of the input field.
 *
 * @return {object} An action object with type of CHANGE_STRING.
 */
export function changeString(string) {
  return {
    type: CHANGE_STRING,
    string,
  };
}

export function submitString(string) {
  return {
    type: SUBMIT_STRING,
    string,
  };
}
