const express = require('express');
const router = express.Router();
const newsletterController = require('../controllers/newsletterController');

// Route to handle newsletter subscription
router.post('/', newsletterController.subscribe);

// Route to handle newsletter unsubscription
router.delete('/:email', newsletterController.unsubscribe);

module.exports = router;