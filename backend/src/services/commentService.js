// This file contains the comment service logic for handling comments in the application.

const db = require('../services/db');
const sanitize = require('../utils/sanitize');

const getComments = async () => {
    const comments = await db.query('SELECT * FROM comments ORDER BY created_at DESC');
    return comments.rows;
};

const addComment = async (commentData) => {
    const sanitizedComment = sanitize(commentData);
    const result = await db.query(
        'INSERT INTO comments (author, message, created_at) VALUES ($1, $2, $3) RETURNING *',
        [sanitizedComment.author, sanitizedComment.message, new Date()]
    );
    return result.rows[0];
};

const likeComment = async (commentId) => {
    const result = await db.query(
        'UPDATE comments SET likes = likes + 1 WHERE id = $1 RETURNING *',
        [commentId]
    );
    return result.rows[0];
};

const reportComment = async (commentId) => {
    const result = await db.query(
        'UPDATE comments SET reports = reports + 1 WHERE id = $1 RETURNING *',
        [commentId]
    );
    return result.rows[0];
};

module.exports = {
    getComments,
    addComment,
    likeComment,
    reportComment,
};