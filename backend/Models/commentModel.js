import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({

    star: { type: Number, min: 0, max: 5, required: true},
    commentary: { type: String},
    idBoard: {type: mongoose.Types.ObjectId, ref: "boards"} 

})

const Comments = mongoose.model("comment", commentSchema);
export default Comments;