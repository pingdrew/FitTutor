const mongoose = require('mongoose');

const { Schema } = mongoose;

const exerciseTypeSchema = new Schema({
  name: {
      type: String,
      required: true
  }
});

const ExerciseType = mongoose.model('ExerciseType', exerciseTypeSchema);

module.exports = ExerciseType;
