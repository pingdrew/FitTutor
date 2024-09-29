const User = require('../models/User');

// Get user profile
exports.getUserProfile = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
  const { username, email, profilePicture } = req.body;

  const updatedUser = await User.findByIdAndUpdate(req.user.id, {
    username,
    email,
    profilePicture,
  }, { new: true });

  res.json(updatedUser);
};
