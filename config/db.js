import mongoose from "mongoose";
import 'dotenv/config';



const MONGO_URL=process.env.MONGO_URL


export const dbConnection =() =>mongoose.connect(MONGO_URL).then(()=>{
    console.log('Database of event-hive is connected')
});