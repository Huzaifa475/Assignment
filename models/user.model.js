import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    googleId: String,
    linkedinId: String,
    username: String,
    email: String
}, {timestamps: true})

export const User = mongoose.model("User", userSchema)