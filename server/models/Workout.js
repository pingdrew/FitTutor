const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({
  name: { type: String, required: true },
  exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }],
  duration: Number,
  intensityLevel: String,
  targetAudience: String,
  workoutType: { type: Schema.Types.ObjectId, ref: 'WorkoutType' },
  description: String,
  photo: [String],
  video: [String]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
