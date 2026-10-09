require('dotenv').config();
const app = require('./app');
const { connectDB, disconnectDB } = require('./services/db');

const port = Number(process.env.PORT) || 5000;

const start = async () => {
    await connectDB();
    const server = app.listen(port, '0.0.0.0', () => {
        console.log(`API server listening on port ${port}`);
    });

    const shutdown = () => {
        server.close(async () => {
            await disconnectDB();
            process.exit(0);
        });
    };

    process.once('SIGTERM', shutdown);
    process.once('SIGINT', shutdown);
};

start().catch((error) => {
    console.error('Backend startup failed:', error);
    process.exit(1);
});