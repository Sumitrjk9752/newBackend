import mongoose from "mongoose";

const subtodoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
      },
      complete: {
        type: Boolean,
        default: false,
      },
    createdby:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }  
})


export const SubTodo = mongoose.model("SubTodo", subtodoSchema)