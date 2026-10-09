const express = require('express');
const router = express.Router();
const moderationController = require('../controllers/moderationController');
const { authenticate } = require('../middleware/auth');

// Route to approve a comment
router.post('/comments/:id/approve', authenticate, moderationController.approveComment);

// Route to reject a comment
router.post('/comments/:id/reject', authenticate, moderationController.rejectComment);

// Route to hide a comment
router.post('/comments/:id/hide', authenticate, moderationController.hideComment);

// Route to review reported comments
router.get('/reports', authenticate, moderationController.reviewReports);

module.exports = router;