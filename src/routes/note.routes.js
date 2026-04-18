const express = require('express');
const router = express.Router();
const { createNote, createNotesBulk } = require('../controllers/note.controller');

router.post('/', createNote);
router.post('/bulk', createNotesBulk);

module.exports = router;
