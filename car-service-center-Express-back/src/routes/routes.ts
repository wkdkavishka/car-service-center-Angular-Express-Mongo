import express from 'express';
// Import the controller functions
import { addNote, getNoteAll, getNoteOne, updateNote, deleteNote } from './controller';

// Create a router instance
const router = express.Router();

// Define routes --------------------------

// Home route: View all notes
router.get('/', getNoteAll); // READ all notes

// View a single note by ID
router.get('/get-note/:id', getNoteOne); // READ a specific note

// Add a new note
router.post('/', addNote); // CREATE a note

// Update an existing note by ID
router.patch('/:id', updateNote); // UPDATE a specific note

// Delete a note by ID
router.delete('/:id', deleteNote); // DELETE a specific note

//----------------------------------------

// Export the router module
export default router;
