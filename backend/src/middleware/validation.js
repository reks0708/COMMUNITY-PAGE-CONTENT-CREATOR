// This file contains middleware functions for validating request data in the backend. 

const { body, validationResult } = require('express-validator');

// Middleware for validating newsletter subscription data
const validateNewsletter = [
    body('email').isEmail().withMessage('Please enter a valid email address.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Middleware for validating comment data
const validateComment = [
    body('message').isString().isLength({ min: 1 }).withMessage('Comment cannot be empty.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Export the validation middleware
module.exports = {
    validateNewsletter,
    validateComment
};