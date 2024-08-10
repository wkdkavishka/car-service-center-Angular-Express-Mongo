// requirements
const express = require("express") // require express
//const model_note = require("../models/note")
const {
    add_note, get_note_all, get_note_one, update_note, delete_note
} = require("../route_control/controls")

// router instance
const router = express.Router()

// paths/routes --------------------------
// home
router.get('/', get_note_all) // read 

// view note
router.get('/get-note/:id', get_note_one) //read

// add new note
router.post('/',add_note) // create

// update a note
router.patch('/:id', update_note) // update

// delete a note
router.delete('/:id', delete_note) // delete


//----------------------------------------







// export router module
module.exports = router