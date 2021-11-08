/* eslint-disable no-plusplus, no-unused-vars, no-shadow */

/** Routes for the String Store App. */
const express = require('express');
const router = new express.Router();
const jsonschema = require('jsonschema');
const { updateString } = require('../helper');
const stringsSchema = require('../schema/stringsSchema.json');
const { BadRequestError } = require('../expressError');

// TODO: entry exists middleware to handle id checking
// NOTE: db used in place of postgresql per instruction.

let id = 1;

let db = [
  {
    id: 0,
    message: 'Hello world!',
  },
];

/** GET /strings: get a list of all strings stored on the database. */
router.get('/strings', (req, res, next) => res.json(db));

/** POST /strings: make a new string given the message. */
router.post('/strings', (req, res, next) => {
  // Validate the body of the request using the schema.
  const validation = jsonschema.validate(req.body, stringsSchema);
  if (!validation.valid) {
    // TODO: want to know if we there are limitation with front-end.
    return res.status(422).json({ message: validation.errors[0].message });
  }

  // Add request to db with id
  // NOTE: Prepending message to list per instruction.
  db.unshift({ ...req.body, id: id++ });
  return res.status(201).json({ msg: 'Successfully added!', load: req.body });
});

/** DELETE /strings/:id delete a string given the id in the params. */
router.delete('/strings/:id', (req, res, next) => {
  // NOTE: no admin validation on delete. (will add upon further iteration).
  const { id } = req.params;
  if (!id || id > db.length) {
    return res.status(404).json({ message: `Error: id:${id} does not exist.` });
  }

  // NOTE: not the most efficient wayh to do this, for demonstration purposes only.
  db = db.filter(entry => entry.id != id);
  return res
    .status(200)
    .json({ message: `String ID: ${id} successfully deleted!` });
});

/** PATCH /strings/:id updates the string's message given an id */
router.patch('/strings/:id', (req, res, next) => {
  const { id } = req.params;
  const { message } = req.body;

  const validation = jsonschema.validate(req.body);
  if (!validation.valid) {
    return res.status(422).json({ message: validation.errors[0].message });
  }

  // Updates string and creates an updated database(array) or returns -1
  const newDb = updateString(db, id, message);
  // NOTE: would favor creating a new array using .map() method.
  if (!newDb) {
    return res.status(404).json({ message: 'String ID not found' });
  }

  db = newDb;
  return res.status(201).json({ message: `String id:${id} has been updated.` });
});

module.exports = router;
