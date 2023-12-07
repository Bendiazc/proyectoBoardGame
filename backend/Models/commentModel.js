import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({

    rate: { type: Number, min: 0, max: 5, required: true},
    comment: { type: String},
    gameId: {type: mongoose.Schema.Types.Mixed } 

})

const Comments = mongoose.model("comment", commentSchema);
export default Comments;