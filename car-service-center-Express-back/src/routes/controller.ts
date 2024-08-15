import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Note from '../models/note';

// View all notes
export const getNoteAll = async (req: Request, res: Response): Promise<Response> => {
    try {
        const notes = await Note.find({});
        return res.status(200).json(notes);
    } catch (e) {
        return res.status(404).json({ e: "Seems like no notes are available" });
    }
};

// View a single note
export const getNoteOne = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        // Check if the ID is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ e: "Seems ID is not valid" });
        }

        const note = await Note.findById(id);
        if (note) {
            return res.status(200).json(note);
        } else {
            return res.status(404).json({ e: "No such note found" });
        }
    } catch (e) {
        return res.status(404).json({ e: "Seems no such file" });
    }
};

// Delete a note
export const deleteNote = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        // Check if the ID is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ e: "Seems ID is not valid" });
        }

        const note = await Note.findOneAndDelete({ _id: id });
        if (note) {
            return res.status(200).json(note);
        } else {
            return res.status(404).json({ e: "No such note found" });
        }
    } catch (e) {
        return res.status(404).json({ e: "Seems no such file" });
    }
};

// Update a note
export const updateNote = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        // Check if the ID is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ e: "Seems ID is not valid" });
        }

        const note = await Note.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });
        if (note) {
            return res.status(200).json(note);
        } else {
            return res.status(404).json({ e: "No such note found" });
        }
    } catch (e) {
        return res.status(404).json({ e: "Seems no such file" });
    }
};

// Add a new note
export const addNote = async (req: Request, res: Response): Promise<Response> => {
    const { name, user, content } = req.body; // deconstruction
    try {
        const note = await Note.create({ name, user, content });
        // console.log(note); // testing ########
        return res.status(200).json(note);
    } catch (e) {
        return res.status(400).json({ e: "Seems unable to add file" });
    }
};

