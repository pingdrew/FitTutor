const Follow = require('../models/Follow');

// Follow a user
exports.followUser = async (req, res) => {
  const { userIdToFollow } = req.body;

  const newFollow = new Follow({
    followerId: req.user.id,
    followingId: userIdToFollow,
  });

  await newFollow.save();
  res.status(201).json({ message: "User followed successfully!" });
};

// Get followers and followings
exports.getFollowData = async (req, res) => {
  const follows = await Follow.find({ followerId: req.user.id })
    .populate('followingId', 'username');
  res.json(follows);
};
