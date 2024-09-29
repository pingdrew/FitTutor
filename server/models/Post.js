const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  postType: { type: String, enum: ['Workout', 'Exercise', 'Meal', 'Ingredient'], required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  media: [String],
  hashtags: [String],
  likes: { type: Number, default: 0 },
  commentsCount: { type: Number, default: 0 },
  shares: { type: Number, default: 0 },
  isVerifiedProfessionalPost: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);
