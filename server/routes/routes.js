/* eslint-disable no-unused-vars */

/** Routes for the String Store App. */
const express = require('express');
const router = new express.Router();
const jsonschema = require('jsonschema');
const { updateString } = require('../helper');
const stringsSchema = require('../schema/stringsSchema.json');
const { BadRequestError } = require('../expressError');

// NOTE: db used in place of postgresql per instruction.

let db = [
  {
    id: 1,
    message: 'Hello world!',
  },
];

/** GET /strings: get a list of all strings stored on the database. */
router.get('/strings', (req, res, next) => res.json(db));

/** POST /strings: make a new string given the message. */
router.post('/strings', (req, res, next) => {
  // Validate the body of the request using the schema.
  const result = jsonschema.validate(req.body, stringsSchema);
  if (!result.valid) {
    throw new BadRequestError();
  }

  // Add request to db with id
  db.unshift({ ...req.body, id: db[0].id + 1 });
  return res.status(201).json({ msg: 'Successfully added!', load: req.body });
});

/** DELETE /strings/:id delete a string given the id in the params. */
router.delete('/strings/:id', (req, res, next) => {
  // NOTE: no admin validation on delete. (will add upon further iteration).
  const { id } = req.params;
  if (!id || id > db.length) {
    throw new BadRequestError();
  }

  // NOTE: not the most efficient wayh to do this, for demonstration purposes only.
  db = db.slice(0, id).concat(db.slice(id + 1));
  return res
    .status(201)
    .json({ message: `String ID: ${id} successfully deleted!` });
});

/** PATCH /strings/:id updates the string's message given an id */
router.patch('/strings/:id', (req, res, next) => {
  const { id } = req.params;
  const { message } = req.body;

  const result = jsonschema.validate(req.body);
  if (!result.valid) {
    throw new BadRequestError();
  }

  // Updates string and creates an updated database(array) or returns -1
  const newDb = updateString(db, id, message);
  if (newDb) {
    db = newDb;
    return res.json({ message: `String id:${id} has been updated.` });
  }

  return res.status(404).json({ message: 'String ID not found' });
});

module.exports = router;
