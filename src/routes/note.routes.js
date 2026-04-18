const express = require('express');
const router = express.Router();
const { createNote, createNotesBulk, getAllNotes, getNoteById } = require('../controllers/note.controller');

router.post('/', createNote);
router.post('/bulk', createNotesBulk);
router.get('/', getAllNotes);
router.get('/:id', getNoteById);

module.exports = router;
