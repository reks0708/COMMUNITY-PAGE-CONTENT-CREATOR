const express = require('express');
const router = express.Router();
const newsletterController = require('../controllers/newsletterController');

// Route to handle newsletter subscription
router.post('/', newsletterController.subscribeToNewsletter);

module.exports = router;