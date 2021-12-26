const router = require('express').Router();
const fs = require('fs');

const notes = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    console.log(results);
});

router.post('/notes', (req, res) => {
    const note = req.body;
    console.log(note);
});

router.delete('/notes/:id', (req, res) => {
    let results = notes[req.params.id];
    console.log(results);
});

module.exports = router;