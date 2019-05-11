import mongoose from "mongoose";

const Schema = mongoose.Schema;

const HeroSchema = new Schema({
  name: String,
  image: String,
  createdAt: Date,
  game: mongoose.Schema.Types.ObjectId
}, { strict: false, collection: "hero" });

const Hero = mongoose.model("hero", HeroSchema);

export default Hero;