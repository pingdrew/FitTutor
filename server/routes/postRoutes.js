const express = require('express');
const { createPost, getPosts, likePost, commentOnPost } = require('../controllers/postController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createPost);
router.get('/', authMiddleware, getPosts);
router.post('/like', authMiddleware, likePost);
router.post('/comment', authMiddleware, commentOnPost);

module.exports = router;
