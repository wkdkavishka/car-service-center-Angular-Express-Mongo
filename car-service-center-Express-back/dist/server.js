"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import required modules
const express_1 = __importDefault(require("express")); // Import express and types
const mongoose_1 = __importDefault(require("mongoose")); // Import mongoose
// import routes from './routes/routes'; // Import routes
// import cors from 'cors'; // Uncomment if you decide to use CORS
// Configuration variables
const port = 4000;
const dbName = "web_notes";
const databasePath = `mongodb://localhost:27017/${dbName}`;
// Initialize Express app
const app = (0, express_1.default)();
// Set mongoose to use strictQuery to avoid deprecation warnings
mongoose_1.default.set('strictQuery', true);
// Database connection and server listener
mongoose_1.default.connect(databasePath)
    .then(() => {
    app.listen(port, () => {
        console.log("Listening to PORT --> ", port);
    });
})
    .catch((error) => {
    console.log("Error --> ", error);
});
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// Custom middleware to log request path and method
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next(); // Pass control to the next middleware/route handler
});
/*
// Uncomment and configure CORS if needed
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    })
);
*/
// Set up routes
// app.use("/express_api", routes);
