import mongoose, { Schema } from 'mongoose';

const PlatformSchema = new Schema({
  name: String,
  createdAt: Date,
  updatedAt: Date,
}, { strict: false, collection: 'platform' });

const Platform = mongoose.model('platform', PlatformSchema);

export default Platform;
