const db = require('../services/db');
const { sanitizeComment } = require('../utils/sanitize');
const { logModerationAction } = require('../utils/logger');

const moderationService = {
    async approveComment(commentId) {
        const result = await db.query('UPDATE comments SET approved = TRUE WHERE id = $1 RETURNING *', [commentId]);
        logModerationAction(`Comment approved: ${commentId}`);
        return result.rows[0];
    },

    async rejectComment(commentId) {
        const result = await db.query('DELETE FROM comments WHERE id = $1 RETURNING *', [commentId]);
        logModerationAction(`Comment rejected: ${commentId}`);
        return result.rows[0];
    },

    async reportComment(commentId, reason) {
        const sanitizedReason = sanitizeComment(reason);
        const result = await db.query('INSERT INTO reports (comment_id, reason) VALUES ($1, $2) RETURNING *', [commentId, sanitizedReason]);
        logModerationAction(`Comment reported: ${commentId} for reason: ${sanitizedReason}`);
        return result.rows[0];
    },

    async getPendingComments() {
        const result = await db.query('SELECT * FROM comments WHERE approved = FALSE');
        return result.rows;
    }
};

module.exports = moderationService;