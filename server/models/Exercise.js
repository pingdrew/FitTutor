const mongoose = require('mongoose');

const { Schema } = mongoose;

const exerciseSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  type: {
      type: Schema.Types.ObjectId,
      ref: 'ExerciseType',
      required: true
  },
  targetedMuscles: [{
      type: String,
      required: true
  }],
  equipmentNeeded: {
      type: String,
      required: true
  },
  description: {
      type: String,
      required: true
  },
  difficultyLevel: {
      type: String,
      required: true
  },
  photo: [String],
  video: [String]
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
