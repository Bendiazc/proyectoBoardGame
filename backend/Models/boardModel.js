import mongoose from "mongoose";

const boardGameSchema = new mongoose.Schema({
    name: { type: String, minLength: 1, required: true},
    description: { type: String, minLength: 20, required: true},
    minPlayers: { type: Number, min: 1, required: true},
    designers: { type: String, minLength: 5, required: true},
    artists: { type: String, minLength: 5, required: true},
    isExpansion: Boolean,
        img: { type : String,
        default: 'https://t3.ftcdn.net/jpg/03/34/83/22/360_F_334832255_IMxvzYRygjd20VlSaIAFZrQWjozQH6BQ.jpg'}
});

const BoardGames = mongoose.model("boards", boardGameSchema);
export default BoardGames;