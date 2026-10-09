const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const securityMiddleware = (app) => {
    // Use Helmet to secure Express apps by setting various HTTP headers
    app.use(helmet());

    // Rate limiting middleware to limit repeated requests to public APIs
    const limiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // Limit each IP to 100 requests per windowMs
        message: 'Too many requests from this IP, please try again later.'
    });

    app.use(limiter);
};

module.exports = securityMiddleware;