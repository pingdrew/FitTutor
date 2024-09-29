const express = require('express');
const { addComment, getComments } = require('../controllers/commentController');
const router = express.Router();

// Define routes here
router.post('/add', addComment); // Ensure addComment is defined
router.get('/:postId', getComments); // Ensure getComments is defined

module.exports = router;
