const res = require('express/lib/response');
const { append } = require('express/lib/response');

const router = require('express').Router();

// create readNote function (use fs.readFileSync)
    // will return an array of notes
function readNote(req, res) {
}

    

// create writeNote function (use fs.writeFileSync)
    // will have a parameter so that you will pass in a note that will be added to the array of notes
    // use JSON.stringify
    // must be able to add a unique id to the file
        // use the ID later on to delete the file
function writeNote(req, res) {
    
}

function deleteNote(req, res) {

}

// GET route (call readNote - fs.readFileSync to db.json)
//  GET /api/notes
router.get('/notes', readNote)

// POST route (call writeNote - fs.readFileSync to db.json)
// POST /api/notes
router.post('/notes', writeNote)

// DELETE route (call deleteNote - fs.readFileSync to db.json)
router.delete('/notes', deleteNote)

// save note (fs.writeFileSync to db.json)

// delete note (fs.writeFileSync to db.json)

//at bottom of file
module.exports = router;
