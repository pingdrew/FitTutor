const { Schema, model } = require('mongoose');

const workoutTypeSchema = new Schema({
  name: { type: String, required: true }
});

module.exports = model('WorkoutType', workoutTypeSchema);
