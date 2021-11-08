/* eslint-disable no-restricted-syntax */
/** Helper functions for the server. */

/** updateString
 * Updates the message of a string given the id and array serving as the
 * database. If the id is not found, the function will return -1.
 *
 * NOTE: This helper function is for demonstration only in place of ORM/RMDB methods.
 * @param {Array} db: The database with an array of string objects like
 *                     [{id, message}...]
 * @param {Number} or {String} id: id of the message to update.
 * @param {String} message: message of the string to update.
 * @return {Array} updated db
 *
 * NOTE: Used in ./routes/routes.js
 */

function updateString(db, id, message) {
  for (const entry of db) {
    if (entry.id == id) {
      entry.message = message;
      return db;
    }
  }
  return -1;
}

module.exports = { updateString };
