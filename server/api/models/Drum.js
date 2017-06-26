import mongoose, { Schema } from 'mongoose';

const DrumSchema = new Schema({
  id: String,
  title: String,
  content: Array,
});

const Drum = mongoose.model('notes', DrumSchema);
const DrumPattern = mongoose.model('patterns', DrumSchema);

module.exports = { Drum, DrumPattern };
