const { Schema, model } = require('mongoose');

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

module.exports = model('Workout', workoutSchema);
