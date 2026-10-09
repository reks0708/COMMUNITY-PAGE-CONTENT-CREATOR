const express = require('express');
const router = express.Router();

const healthRoutes = require('./healthRoutes');
const newsletterRoutes = require('./newsletterRoutes');
const commentRoutes = require('./commentRoutes');
const moderationRoutes = require('./moderationRoutes');
const adminRoutes = require('./adminRoutes');

// Health check routes
router.use('/health', healthRoutes);

// Newsletter routes
router.use('/newsletter', newsletterRoutes);

// Comment routes
router.use('/comments', commentRoutes);

// Moderation routes
router.use('/moderation', moderationRoutes);

// Admin routes
router.use('/admin', adminRoutes);

module.exports = router;