const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: String,
  bio: String,
  location: String,
  isVerifiedProfessional: { type: Boolean, default: false },
  subscription: {
    isPremium: { type: Boolean, default: false },
    subscriptionType: { type: String, enum: ['Free', 'Monthly', 'Yearly'], default: 'Free' },
    expiryDate: Date
  },
  followers: { type: Number, default: 0 },
  following: { type: Number, default: 0 },
  posts: { type: Number, default: 0 },
  healthStats: {
    height: Number,
    weight: Number,
    goals: [String]
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
