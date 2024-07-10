import { Schema, model, Types } from "mongoose";



const eventSchema = new Schema ({
    name: {type: String, unique: true, required: true},
    description: {type: String, required: true},
    collegeId: {type: Types.ObjectId, ref: "college"}, //, required:true
    location: {type: String},
    Date: {type: Date},
    tags: {type: String},
    type: {type:String, enum: ['online', 'offline']},
    banner: {type: String, required: true},
    createdBy: {type: Types.ObjectId, ref: "User"}
    
}, {
    timestamps: true
});



export const EventModel = model('Event', eventSchema);