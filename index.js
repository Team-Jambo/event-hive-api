import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import 'dotenv/config';
import { dbConnection } from "./config/db.js";
import eventRouter from "./routes/event_route.js";


// connect to database
await mongoose.connect(process.env.MONGO_URL);


//  create Express App
const app = express();


// Use Router
app.use(express.json());
app.use(eventRouter);
dbConnection();

// Apply middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('banner'));


app.use((req,res)=> res.redirect('api-docs/'));
app.use(express.static('banner'));




// Listen for incoming requests
const port = process.env.PORT || 8001;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});