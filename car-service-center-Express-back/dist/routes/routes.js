"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Import the controller functions
const controls_1 = require("./controls");
// Create a router instance
const router = express_1.default.Router();
// Define routes --------------------------
// Home route: View all notes
router.get('/', controls_1.getNoteAll); // READ all notes
// View a single note by ID
router.get('/get-note/:id', controls_1.getNoteOne); // READ a specific note
// Add a new note
router.post('/', controls_1.addNote); // CREATE a note
// Update an existing note by ID
router.patch('/:id', controls_1.updateNote); // UPDATE a specific note
// Delete a note by ID
router.delete('/:id', controls_1.deleteNote); // DELETE a specific note
//----------------------------------------
// Export the router module
exports.default = router;
