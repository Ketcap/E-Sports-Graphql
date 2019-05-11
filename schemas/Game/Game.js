import mongoose from "mongoose";

const Schema = mongoose.Schema;

const GameSchema = new Schema({
  name: String,
  release_date: Date,
  genres: [mongoose.Schema.Types.ObjectId],
  createdAt: Date,
  updatedAt: Date,
  company: mongoose.Schema.Types.ObjectId,
  platforms: [mongoose.Schema.Types.ObjectId],
  hero_name: String
}, { strict: false, collection: "game" });

const Game = mongoose.model("game", GameSchema);

export default Game;