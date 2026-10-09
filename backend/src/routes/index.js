const express = require('express');
const router = express.Router();

const healthRoutes = require('./healthRoutes');
const newsletterRoutes = require('./newsletterRoutes');

// Health check routes
router.use('/health', healthRoutes);

// Newsletter routes
router.use('/newsletter', newsletterRoutes);

// Comment routes
module.exports = router;