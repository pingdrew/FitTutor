const mongoose = require('mongoose');

const { Schema } = mongoose;

const exerciseSchema = new Schema({
  name: { type: String, required: true },
  type: { type: Schema.Types.ObjectId, ref: 'ExerciseType' },
  targetedMuscles: [String],
  equipmentNeeded: String,
  description: String,
  difficultyLevel: String,
  photo: [String],
  video: [String]
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
