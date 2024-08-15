import express from 'express';
// Import the controller functions
import { addCar, getCarAll, getCarOne, updateCar, deleteCar } from './controller';

// Create a router instance
const router = express.Router();

// Define routes --------------------------

// Home route: View all cars
router.get('/', getCarAll); // READ all cars

// View a single car by ID
router.get('/get-car/:id', getCarOne); // READ a specific car

// Add a new car
router.post('/', addCar); // CREATE a car

// Update an existing car by ID
router.patch('/:id', updateCar); // UPDATE a specific car

// Delete a car by ID
router.delete('/:id', deleteCar); // DELETE a specific car

//----------------------------------------

// Export the router module
export default router;
