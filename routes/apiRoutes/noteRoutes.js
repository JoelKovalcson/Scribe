const router = require('express').Router();
const {
    getMaxID,
    createNewNote,
    saveNotes
} = require('../../lib/notes');

let notes = require('../../db/db.json');
let maxID = getMaxID(notes);

router.get('/notes', (req, res) => {
    let results = notes;
    res.status(200).json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = ++maxID;
    const note = createNewNote(req.body, notes);
    res.status(200).json(note);
});

router.delete('/notes/:id', (req, res) => {
    notes = notes.filter(note => note.id != req.params.id);
    saveNotes(notes);
    res.sendStatus(200);
});

module.exports = router;