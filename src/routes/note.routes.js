const express = require('express');
const router = express.Router();
const { createNote, createNotesBulk, getAllNotes, getNoteById, replaceNote } = require('../controllers/note.controller');

router.post('/', createNote);
router.post('/bulk', createNotesBulk);
router.get('/', getAllNotes);
router.get('/:id', getNoteById);
router.put('/:id', replaceNote);

module.exports = router;
