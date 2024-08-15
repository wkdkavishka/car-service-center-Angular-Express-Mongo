import mongoose, { Schema, Document, Model } from 'mongoose';

// Define the TypeScript interface for the Car document
interface Car extends Document {
    name: string;
    user: string;
    content: string;
}

// Define the schema for the Car model
const CarSchema: Schema<Car> = new Schema(
    {
        name: { type: String, required: true },
        user: { type: String, required: true },
        content: { type: String, required: true }
    },
    { timestamps: true }
);

// Create and export the model
const Car: Model<Car> = mongoose.model<Car>('Car', CarSchema);
export default Car;
