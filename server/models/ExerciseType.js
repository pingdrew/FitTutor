const { Schema, model } = require('mongoose');

const exerciseTypeSchema = new Schema({
  name: { type: String, required: true }
});

module.exports = model('ExerciseType', exerciseTypeSchema);
