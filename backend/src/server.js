const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const indexRoutes = require('./routes/index');
const healthRoutes = require('./routes/healthRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');
const commentRoutes = require('./routes/commentRoutes');
const moderationRoutes = require('./routes/moderationRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Use routes
app.use('/', indexRoutes);
app.use('/api/health', healthRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/moderation', moderationRoutes);
app.use('/api/admin', adminRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});