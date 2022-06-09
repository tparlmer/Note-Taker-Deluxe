const res = require("express/lib/response");
const { append } = require("express/lib/response");
const fs = require("fs");
const path = require("path");
const router = require("express").Router();
// const path = require('path')
// create readNote function (use fs.readFileSync)
// will return an array of notes
function readNotes(req, res) {
  const data = fs.readFile(
    path.join(__dirname, "../../db/db.json"),
    "utf8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  res.json({ message: "success" });
}

// create writeNote function (use fs.writeFileSync)
// will have a parameter so that you will pass in a note that will be added to the array of notes
// use JSON.stringify
// must be able to add a unique id to the file
// use the ID later on to delete the file
function writeNote(req, res) {
  const newNote = req.body;

  // give new note an id with a random number
  newNote.id = Math.floor(Math.random() * 100000000);

  const oldNotes = fs.readFileSync(
    path.join(__dirname, "../../db/db.json"),
    "utf8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  const notes = JSON.parse(oldNotes);
  notes.push(newNote);

  fs.writeFile(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(notes),
    "utf8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  res.json({});
}

function deleteNote(req, res) {
  const noteId = req.params.id;
  const oldNotes = fs.readFileSync(
    path.join(__dirname, "../../db/db.json"),
    "utf8",
    (err) => {
      if (err) {
        console.log(err);
      }
    } 
  );
  const notes = JSON.parse(oldNotes);
  // create a newNotes array filtering out the note with the id of noteId
  const newNotes = notes.filter((note) => note.id !== noteId);
  fs.writeFile(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(newNotes),
    "utf8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  res.json({});
  
}

// GET route (call readNote - fs.readFileSync to db.json)
//  GET /api/notes
router.get("/notes", readNotes);

// POST route (call writeNote - fs.readFileSync to db.json)
// POST /api/notes
router.post("/notes", writeNote);

// DELETE route (call deleteNote - fs.readFileSync to db.json)
// DELETE /api/notes/:id
router.delete("/notes", deleteNote);

// save note (fs.writeFileSync to db.json)

// delete note (fs.writeFileSync to db.json)

//at bottom of file
module.exports = router;
