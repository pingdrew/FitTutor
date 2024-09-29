const express = require('express');
const { followUser, getFollowData } = require('../controllers/followController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/follow', authMiddleware, followUser);
router.get('/', authMiddleware, getFollowData);

module.exports = router;
