import {Schema, model} from "mongoose"; 

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    username: {type: String, unique: true},
    password: {type: String},
    avatar: {type: String}
}, {
    timestamps: true
});

// export the user
export default userModel = model("User", userSchema);