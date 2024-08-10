// requirements
const mongoose = require("mongoose")
const model_note = require("../models/note")

// view all notes
const get_note_all = async (req,res) => {
    try{
        const notes = await model_note.find({})
        res.status(200).json(notes)
    }catch(error){
        res.status(404).json( {error: "seem like no notes available" } )
    }
}

// view a single note
const get_note_one = async (req,res) => {
    try{
        const {id} = req.params
        // id validity check
        if(!mongoose.Types.ObjectId.isValid(id)){ return res.status(404).json( {error: "seems id not valid" } )}

        const note = await model_note.findById(id)
        //responce
        res.status(200).json(note)

    }catch(error){
        //responce
        res.status(404).json( {error: "seem no such file" } )
    }
}

// delete note
const delete_note = async (req,res) => {
    try{
        const {id} = req.params
        // id validity check
        if(!mongoose.Types.ObjectId.isValid(id)){ return res.status(404).json( {error: "seems id not valid" } )}

        const note = await model_note.findOneAndDelete({_id: id}) // in mongodb id is as _id
        //responce
        res.status(200).json(note)

    }catch(error){
        //responce
        res.status(404).json( {error: "seem no such file" } )
    }
}

//update note
const update_note = async (req,res) => {
    try{
        const {id} = req.params
        // id validity check
        if(!mongoose.Types.ObjectId.isValid(id)){ return res.status(404).json( {error: "seems id not valid" } )}

        const note = await model_note.findOneAndUpdate( {_id: id}, {...req.body} ) // ...(object) --> spread properties
        //responce
        res.status(200).json(note)

    }catch(error){
        //responce
        res.status(404).json( {error: "seem no such file" } )
    }
}

// new note
const add_note = async(req, res) => {
    const { name, user, content } = req.body // deconstruction
    try{
        const note = await model_note.create( {name, user, content} ) // add note to db
        // response
        res.status(200).json(note)

    }catch(error){
        // response
        res.status(400).json( {error: error.message } )
    }
} 






// export
module.exports = {
    add_note,
    get_note_all,
    get_note_one,
    update_note,
    delete_note
}