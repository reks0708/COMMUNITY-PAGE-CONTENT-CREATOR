const db = require('./db');

const newsletterService = {
    subscribe: async ({ email, name, contentPreference }) => {
        const result = await db.query(
            `INSERT INTO newsletter_subscriptions (email, name, content_preference)
             VALUES ($1, $2, $3)
             ON CONFLICT (email) DO NOTHING
             RETURNING id, email, name, content_preference, created_at`,
            [email, name || null, contentPreference || null]
        );

        if (!result.rows[0]) {
            const error = new Error('Email already subscribed');
            error.code = '23505';
            throw error;
        }

        return result.rows[0];
    },

    getAllSubscribers: async () => {
        try {
            const result = await db.query('SELECT id, email, name, content_preference, created_at FROM newsletter_subscriptions');
            return result.rows;
        } catch (error) {
            throw new Error(`Failed to retrieve subscribers: ${error.message}`);
        }
    },

    deleteSubscriber: async (email) => {
        try {
            const result = await db.query('DELETE FROM newsletter_subscriptions WHERE email = $1 RETURNING id, email, name, content_preference, created_at', [email]);
            if (result.rowCount === 0) {
                throw new Error('Email not found');
            }
            return result.rows[0];
        } catch (error) {
            throw new Error(`Deletion failed: ${error.message}`);
        }
    }
};

module.exports = newsletterService;