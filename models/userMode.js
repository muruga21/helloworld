import mongoose, { Schema } from "mongoose";

const userSchema = new  Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
})

const userModel = mongoose.model("user",userSchema);

export default userModel;