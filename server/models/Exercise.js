const { Schema, model } = require('mongoose');

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

module.exports = model('Exercise', exerciseSchema);
