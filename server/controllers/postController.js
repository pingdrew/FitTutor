const Post = require('../models/Post');
const User = require('../models/User');

// Create a new post
exports.createPost = async (req, res) => {
  const { title, description, category, hashtags } = req.body;

  const newPost = new Post({
    title,
    description,
    category,
    hashtags,
    userId: req.user.id,
  });

  await newPost.save();
  res.status(201).json(newPost);
};

// Get all posts
exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate('userId', 'username');
  res.json(posts);
};

// Like a post
exports.likePost = async (req, res) => {
  const { postId } = req.body;
  const post = await Post.findById(postId);
  post.likes.push(req.user.id);
  await post.save();

  res.status(200).json(post);
};

// Comment on a post
exports.commentOnPost = async (req, res) => {
  const { postId, text } = req.body;
  const post = await Post.findById(postId);
  post.comments.push({ userId: req.user.id, text });
  await post.save();

  res.status(200).json(post);
};
