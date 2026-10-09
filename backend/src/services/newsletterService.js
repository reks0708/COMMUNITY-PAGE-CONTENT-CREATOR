const db = require('../config/db');

const newsletterService = {
    subscribe: async (email) => {
        try {
            const existingSubscription = await db.query('SELECT * FROM newsletter_subscriptions WHERE email = $1', [email]);
            if (existingSubscription.rows.length > 0) {
                throw new Error('Email already subscribed');
            }

            const result = await db.query('INSERT INTO newsletter_subscriptions (email) VALUES ($1) RETURNING *', [email]);
            return result.rows[0];
        } catch (error) {
            throw new Error(`Subscription failed: ${error.message}`);
        }
    },

    getAllSubscribers: async () => {
        try {
            const result = await db.query('SELECT * FROM newsletter_subscriptions');
            return result.rows;
        } catch (error) {
            throw new Error(`Failed to retrieve subscribers: ${error.message}`);
        }
    },

    deleteSubscriber: async (email) => {
        try {
            const result = await db.query('DELETE FROM newsletter_subscriptions WHERE email = $1 RETURNING *', [email]);
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