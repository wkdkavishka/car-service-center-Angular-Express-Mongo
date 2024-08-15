import mongoose, { Schema, Document, Model } from 'mongoose';

// Define the TypeScript interface for the Note document
interface Note extends Document {
    name: string;
    user: string;
    content: string;
}

// Define the schema for the Note model
const NoteSchema: Schema<Note> = new Schema(
    {
        name: { type: String, required: true },
        user: { type: String, required: true },
        content: { type: String, required: true }
    },
    { timestamps: true }
);

// Create and export the model
const Note: Model<Note> = mongoose.model<Note>('Note', NoteSchema);
export default Note;
