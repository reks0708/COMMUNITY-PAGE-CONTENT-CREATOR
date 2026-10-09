const newsletterService = require('../services/newsletterService');

exports.subscribeToNewsletter = async (req, res) => {
    const email = typeof req.body.email === 'string' ? req.body.email.trim().toLowerCase() : '';
    const name = typeof req.body.name === 'string' ? req.body.name.trim().slice(0, 100) : '';
    const contentPreference = typeof req.body.contentPreference === 'string'
        ? req.body.contentPreference.trim().slice(0, 100)
        : '';

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    try {
        const subscription = await newsletterService.subscribe({ email, name, contentPreference });
        return res.status(201).json({ message: 'Subscription successful', subscription });
    } catch (error) {
        if (error.code === '23505') {
            return res.status(400).json({ error: 'Email already subscribed' });
        }
        return res.status(500).json({ error: 'Subscription failed' });
    }
};