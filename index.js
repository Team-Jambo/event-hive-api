import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import { dbConnection } from "./config/db.js";



//  create Express App
const app = express();


// Use Router
app.use(express.json());
dbConnection();




// Listen for incoming requests
const port = process.env.PORT || 8001;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});