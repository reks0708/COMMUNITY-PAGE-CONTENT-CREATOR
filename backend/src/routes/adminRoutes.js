const express = require('express');
const { 
    approveComment, 
    rejectComment, 
    hideComment, 
    reviewReportedContent 
} = require('../controllers/moderationController');
const { authenticateAdmin } = require('../middleware/auth');

const router = express.Router();

// Route to approve a comment
router.post('/comments/:id/approve', authenticateAdmin, approveComment);

// Route to reject a comment
router.post('/comments/:id/reject', authenticateAdmin, rejectComment);

// Route to hide a comment
router.post('/comments/:id/hide', authenticateAdmin, hideComment);

// Route to review reported content
router.get('/reports', authenticateAdmin, reviewReportedContent);

module.exports = router;