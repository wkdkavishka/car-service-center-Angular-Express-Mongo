import mongoose, { Schema, Document, Model } from 'mongoose';

// Define the TypeScript interface for the Car document
interface Car extends Document {
    car_brand: string;
    car_model: string;
    car_numberplate: string;
}

// Define the schema for the Car model
const CarSchema: Schema<Car> = new Schema(
    {
        car_brand: { type: String, required: true },
        car_model: { type: String, required: true },
        car_numberplate: { type: String, required: true }
    },
    { timestamps: true }
);

// Creating the model
const Car: Model<Car> = mongoose.model<Car>('Car', CarSchema);

export default Car;
