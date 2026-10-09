const express = require('express');
const {
    getComments,
    postComment,
    postReply,
    likeComment,
    reportComment
} = require('../controllers/commentController');
const { validateComment } = require('../middleware/validation');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// GET all comments
router.get('/', getComments);

// POST a new comment
router.post('/', authenticate, validateComment, postComment);

// POST a reply to a comment
router.post('/:id/replies', authenticate, postReply);

// POST a like to a comment
router.post('/:id/likes', authenticate, likeComment);

// POST a report for a comment
router.post('/:id/reports', authenticate, reportComment);

module.exports = router;