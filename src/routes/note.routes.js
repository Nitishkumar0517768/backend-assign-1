const express = require('express');
const router = express.Router();
const { createNote, createNotesBulk, getAllNotes } = require('../controllers/note.controller');

router.post('/', createNote);
router.post('/bulk', createNotesBulk);
router.get('/', getAllNotes);

module.exports = router;
