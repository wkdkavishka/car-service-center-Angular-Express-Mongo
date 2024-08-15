"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNote = exports.updateNote = exports.deleteNote = exports.getNoteOne = exports.getNoteAll = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const note_1 = __importDefault(require("../models/note"));
// View all notes
const getNoteAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield note_1.default.find({});
        return res.status(200).json(notes);
    }
    catch (e) {
        return res.status(404).json({ e: "Seems like no notes are available" });
    }
});
exports.getNoteAll = getNoteAll;
// View a single note
const getNoteOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // Check if the ID is valid
        if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ e: "Seems ID is not valid" });
        }
        const note = yield note_1.default.findById(id);
        if (note) {
            return res.status(200).json(note);
        }
        else {
            return res.status(404).json({ e: "No such note found" });
        }
    }
    catch (e) {
        return res.status(404).json({ e: "Seems no such file" });
    }
});
exports.getNoteOne = getNoteOne;
// Delete a note
const deleteNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // Check if the ID is valid
        if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ e: "Seems ID is not valid" });
        }
        const note = yield note_1.default.findOneAndDelete({ _id: id });
        if (note) {
            return res.status(200).json(note);
        }
        else {
            return res.status(404).json({ e: "No such note found" });
        }
    }
    catch (e) {
        return res.status(404).json({ e: "Seems no such file" });
    }
});
exports.deleteNote = deleteNote;
// Update a note
const updateNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // Check if the ID is valid
        if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ e: "Seems ID is not valid" });
        }
        const note = yield note_1.default.findOneAndUpdate({ _id: id }, Object.assign({}, req.body), { new: true });
        if (note) {
            return res.status(200).json(note);
        }
        else {
            return res.status(404).json({ e: "No such note found" });
        }
    }
    catch (e) {
        return res.status(404).json({ e: "Seems no such file" });
    }
});
exports.updateNote = updateNote;
// Add a new note
const addNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, user, content } = req.body; // deconstruction
    try {
        const note = yield note_1.default.create({ name, user, content });
        return res.status(200).json(note);
    }
    catch (e) {
        return res.status(400).json({ e: "Seems unable to add file" });
    }
});
exports.addNote = addNote;
