import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    // username : String
    username : {
        type: String,
        required : true,
        unique: true,
        lowercase : true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        min: [8, "Password must be atleast 8, got{VALUE} "],
        max: 16,
    },
    
},{timestamps: true})

export const User = mongoose.model("User",UserSchema)


