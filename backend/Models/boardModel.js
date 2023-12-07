import mongoose from "mongoose";

const boardGameSchema = new mongoose.Schema({
    name: { type: String, minLength: 1, required: true},
    minPlayers: { type: Number, min: 1, required: true},
    designers: { type: String, minLength: 5, required: true},
    artists: { type: String, minLength: 5, required: true},
    image : String,
    isExpansion: Boolean,
    //gameId: String
});

const BoardGames = mongoose.model("boards", boardGameSchema);
export default BoardGames;