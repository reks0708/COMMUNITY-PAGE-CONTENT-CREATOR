const { moderationService } = require('../services/moderationService');
const { sanitizeInput } = require('../utils/sanitize');
const { formatResponse } = require('../utils/responses');

// Get pending comments for moderation
exports.getPendingComments = async (req, res) => {
    try {
        const comments = await moderationService.getPendingComments();
        res.status(200).json(formatResponse(comments));
    } catch (error) {
        res.status(500).json(formatResponse(null, 'Error fetching pending comments', error));
    }
};

// Approve a comment
exports.approveComment = async (req, res) => {
    const { commentId } = req.params;
    try {
        await moderationService.approveComment(commentId);
        res.status(200).json(formatResponse(null, 'Comment approved successfully'));
    } catch (error) {
        res.status(500).json(formatResponse(null, 'Error approving comment', error));
    }
};

// Reject a comment
exports.rejectComment = async (req, res) => {
    const { commentId } = req.params;
    try {
        await moderationService.rejectComment(commentId);
        res.status(200).json(formatResponse(null, 'Comment rejected successfully'));
    } catch (error) {
        res.status(500).json(formatResponse(null, 'Error rejecting comment', error));
    }
};

// Hide a comment
exports.hideComment = async (req, res) => {
    const { commentId } = req.params;
    try {
        await moderationService.hideComment(commentId);
        res.status(200).json(formatResponse(null, 'Comment hidden successfully'));
    } catch (error) {
        res.status(500).json(formatResponse(null, 'Error hiding comment', error));
    }
};

// Review reported content
exports.reviewReportedContent = async (req, res) => {
    try {
        const reports = await moderationService.getReportedContent();
        res.status(200).json(formatResponse(reports));
    } catch (error) {
        res.status(500).json(formatResponse(null, 'Error fetching reported content', error));
    }
};