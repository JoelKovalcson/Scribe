const fs = require('fs');
const path = require('path');

function saveNotes(notes) {
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
}

function getMaxID(notes) {
    let max = 0;
    notes.forEach(note => {
        if(note.id > max) max = note.id;
    });
    return max;
}

function createNewNote(note, notes) {
    notes.push(note);
    saveNotes(notes);
    return note;
}

module.exports = {
    getMaxID,
    createNewNote,
    saveNotes
};