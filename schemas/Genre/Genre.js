import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: String,
  short_name: String,
  createdAt: Date,
}, { strict: false, collection: 'genre' });

const Genre = mongoose.model('genre', GenreSchema);

export default Genre;
