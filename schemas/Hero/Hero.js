import mongoose, { Schema } from 'mongoose';

const HeroSchema = new Schema({
  name: String,
  image: String,
  createdAt: Date,
  game: mongoose.Schema.Types.ObjectId,
}, { strict: false, collection: 'hero' });

const Hero = mongoose.model('hero', HeroSchema);

export default Hero;
