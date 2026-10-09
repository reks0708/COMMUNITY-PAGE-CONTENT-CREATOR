const CommentService = require('../services/commentService');
const { sanitizeComment } = require('../utils/sanitize');
const { formatResponse } = require('../utils/responses');

// Get all comments
exports.getComments = async (req, res) => {
    try {
        const comments = await CommentService.getAllComments();
        res.status(200).json(formatResponse(comments));
    } catch (error) {
        res.status(500).json(formatResponse(null, 'Error fetching comments', error));
    }
};

// Post a new comment
exports.postComment = async (req, res) => {
    const { message, author } = req.body;

    // Sanitize input
    const sanitizedComment = sanitizeComment({ message, author });

    try {
        const newComment = await CommentService.createComment(sanitizedComment);
        res.status(201).json(formatResponse(newComment, 'Comment created successfully'));
    } catch (error) {
        res.status(500).json(formatResponse(null, 'Error creating comment', error));
    }
};

// Reply to a comment
exports.replyToComment = async (req, res) => {
    const { id } = req.params;
    const { message, author } = req.body;

    const sanitizedReply = sanitizeComment({ message, author });

    try {
        const reply = await CommentService.replyToComment(id, sanitizedReply);
        res.status(201).json(formatResponse(reply, 'Reply created successfully'));
    } catch (error) {
        res.status(500).json(formatResponse(null, 'Error replying to comment', error));
    }
};

// Like a comment
exports.likeComment = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedComment = await CommentService.likeComment(id);
        res.status(200).json(formatResponse(updatedComment, 'Comment liked successfully'));
    } catch (error) {
        res.status(500).json(formatResponse(null, 'Error liking comment', error));
    }
};

// Report a comment
exports.reportComment = async (req, res) => {
    const { id } = req.params;

    try {
        await CommentService.reportComment(id);
        res.status(200).json(formatResponse(null, 'Comment reported successfully'));
    } catch (error) {
        res.status(500).json(formatResponse(null, 'Error reporting comment', error));
    }
};