import mongoose from "mongoose";
import {model, Schema, Types} from "mongoose";
import {toJSON} from '@reis/mongoose-to-json';


const collegeSchema = new Schema(
    {
name:{type: String, required:true},
description:{type: String, required:true},
banner: {type: String, required:true},
location:{type:String},
rating:{type:Number, required:true},

date:{type: String},
tags:{type: String},
type: {type:String, enum:['online', 'offline']},
},{
    timestamps:true
});


collegeSchema.plugin(toJSON);
export const CollegeModel = model('college', collegeSchema)