const express = require('express');
const router = express.Router();
const { createNote, createNotesBulk, getAllNotes, getNoteById, replaceNote, updateNote, deleteNote } = require('../controllers/note.controller');

router.post('/', createNote);
router.post('/bulk', createNotesBulk);
router.get('/', getAllNotes);
router.get('/:id', getNoteById);
router.put('/:id', replaceNote);
router.patch('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;
