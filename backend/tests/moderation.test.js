const request = require('supertest');
const app = require('../src/app'); // Adjust the path as necessary
const db = require('../src/services/db'); // Adjust the path as necessary

describe('Moderation API', () => {
    beforeAll(async () => {
        await db.connect(); // Connect to the database before tests
    });

    afterAll(async () => {
        await db.disconnect(); // Disconnect from the database after tests
    });

    describe('POST /api/comments/:id/reports', () => {
        it('should report a comment successfully', async () => {
            const response = await request(app)
                .post('/api/comments/1/reports') // Replace with a valid comment ID
                .send({ reason: 'Inappropriate content' });

            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('message', 'Comment reported successfully');
        });

        it('should return 404 for non-existent comment', async () => {
            const response = await request(app)
                .post('/api/comments/999/reports') // Non-existent comment ID
                .send({ reason: 'Inappropriate content' });

            expect(response.status).toBe(404);
            expect(response.body).toHaveProperty('error', 'Comment not found');
        });
    });

    describe('GET /api/comments', () => {
        it('should retrieve comments for moderation', async () => {
            const response = await request(app)
                .get('/api/comments');

            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
        });
    });

    describe('Moderation actions', () => {
        it('should approve a comment', async () => {
            const response = await request(app)
                .post('/api/comments/1/approve') // Replace with a valid comment ID
                .set('Authorization', 'Bearer valid_token'); // Replace with a valid token

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('message', 'Comment approved successfully');
        });

        it('should reject a comment', async () => {
            const response = await request(app)
                .post('/api/comments/1/reject') // Replace with a valid comment ID
                .set('Authorization', 'Bearer valid_token'); // Replace with a valid token

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('message', 'Comment rejected successfully');
        });
    });
});