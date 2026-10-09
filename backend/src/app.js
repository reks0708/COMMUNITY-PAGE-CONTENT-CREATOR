const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { connectDB } = require('./services/db');
const routes = require('./routes/index');
const { errorHandler } = require('./middleware/errors');

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Connect to the database
connectDB();

// Routes
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;