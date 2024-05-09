const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({
  name: {
      type: String,
      required: true
  },
  exercises: [{
      type: Schema.Types.ObjectId,
      ref: 'Exercise',
      required: true
  }],
  duration: {
      type: Number,
      required: true
  },
  intensityLevel: {
      type: String,
      required: true
  },
  targetAudience: String,
  workoutType: {
      type: Schema.Types.ObjectId,
      ref: 'WorkoutType'
  },
  description: String,
  photo: [String],
  video: [String]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
