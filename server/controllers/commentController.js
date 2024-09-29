const Comment = require('../models/Comment');

// Add a comment
const addComment = async (req, res) => {
    try {
        const newComment = new Comment({
            postId: req.body.postId,
            userId: req.user.id,
            text: req.body.text,
        });
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get comments for a specific post
const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId });
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    addComment,
    getComments,
};
