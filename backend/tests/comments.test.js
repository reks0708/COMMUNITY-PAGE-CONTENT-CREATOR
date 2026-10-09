const request = require('supertest');
const app = require('../src/app'); // Adjust the path as necessary
const db = require('../src/services/db'); // Adjust the path as necessary

describe('Comments API', () => {
    beforeAll(async () => {
        await db.connect(); // Connect to the database before tests
    });

    afterAll(async () => {
        await db.disconnect(); // Disconnect from the database after tests
    });

    describe('POST /api/comments', () => {
        it('should create a new comment', async () => {
            const response = await request(app)
                .post('/api/comments')
                .send({
                    author: 'Test User',
                    message: 'This is a test comment.',
                });

            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('id');
            expect(response.body.author).toBe('Test User');
            expect(response.body.message).toBe('This is a test comment.');
        });

        it('should return 400 for invalid comment data', async () => {
            const response = await request(app)
                .post('/api/comments')
                .send({
                    author: '',
                    message: '',
                });

            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('error');
        });
    });

    describe('GET /api/comments', () => {
        it('should return a list of comments', async () => {
            const response = await request(app).get('/api/comments');

            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
        });
    });

    describe('POST /api/comments/:id/replies', () => {
        it('should create a reply to a comment', async () => {
            const commentResponse = await request(app)
                .post('/api/comments')
                .send({
                    author: 'Test User',
                    message: 'This is a test comment.',
                });

            const response = await request(app)
                .post(`/api/comments/${commentResponse.body.id}/replies`)
                .send({
                    author: 'Reply User',
                    message: 'This is a test reply.',
                });

            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('id');
            expect(response.body.author).toBe('Reply User');
            expect(response.body.message).toBe('This is a test reply.');
        });
    });

    describe('POST /api/comments/:id/likes', () => {
        it('should like a comment', async () => {
            const commentResponse = await request(app)
                .post('/api/comments')
                .send({
                    author: 'Test User',
                    message: 'This is a test comment.',
                });

            const response = await request(app)
                .post(`/api/comments/${commentResponse.body.id}/likes`);

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('likes');
            expect(response.body.likes).toBeGreaterThan(0);
        });
    });

    describe('POST /api/comments/:id/reports', () => {
        it('should report a comment', async () => {
            const commentResponse = await request(app)
                .post('/api/comments')
                .send({
                    author: 'Test User',
                    message: 'This is a test comment.',
                });

            const response = await request(app)
                .post(`/api/comments/${commentResponse.body.id}/reports`);

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('message', 'Comment reported successfully.');
        });
    });
});