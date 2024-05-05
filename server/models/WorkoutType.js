const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutTypeSchema = new Schema({
  name: { type: String, required: true }
});

const WorkoutType = mongoose.model('WorkoutType', workoutTypeSchema);

module.exports = WorkoutType;
