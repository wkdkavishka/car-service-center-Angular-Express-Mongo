// Import required modules
import express, { Request, Response, NextFunction } from 'express'; // Import express and types
import mongoose from 'mongoose'; // Import mongoose
import routes from './routes/routes'; // Import routes
import cors from 'cors'; // Uncomment if you decide to use CORS

// Configuration variables
// todo -> transport to a .env file on production
const port: number = 4000;
const dbName: string = "car-service";
const databasePath: string = `mongodb://localhost:27017/${dbName}`;

// Initialize Express app
const app = express();

// Set mongoose to use strictQuery
// avoid deprecation warnings for mongo 7.x up
mongoose.set('strictQuery', true);

// Database connection -> if failed app crash
// server listener
mongoose.connect(databasePath)
    .then(() => {
        app.listen(port, () => {
            console.log("Listening to PORT --> ", port);
        });
    })
    .catch((error) => {
        console.log("Error --> \n", error);
    });

// Middleware to parse JSON bodies
app.use(express.json());

// Custom middleware to log request path and method
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(req.path, req.method);
    next(); // Pass control to the next middleware/route handler
});

// Uncomment and configure CORS if needed
app.use(
    cors({
        origin: "http://localhost:4200", // adds a little security
        // methods: ["GET", "POST"],
    })
);
// Set up routes
app.use("/car_service", routes);
