const request = require('supertest');
const app = require('../src/app'); // Adjust the path as necessary
const db = require('../src/services/db'); // Adjust the path as necessary

describe('Admin Routes', () => {
    beforeAll(async () => {
        await db.connect(); // Connect to the database before tests
    });

    afterAll(async () => {
        await db.disconnect(); // Disconnect from the database after tests
    });

    describe('GET /api/comments/pending', () => {
        it('should return a list of pending comments for moderation', async () => {
            const response = await request(app).get('/api/comments/pending');
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
        });
    });

    describe('POST /api/comments/:id/approve', () => {
        it('should approve a pending comment', async () => {
            const commentId = 'someCommentId'; // Replace with a valid comment ID
            const response = await request(app).post(`/api/comments/${commentId}/approve`);
            expect(response.status).toBe(200);
            expect(response.body.message).toBe('Comment approved successfully');
        });
    });

    describe('POST /api/comments/:id/reject', () => {
        it('should reject a pending comment', async () => {
            const commentId = 'someCommentId'; // Replace with a valid comment ID
            const response = await request(app).post(`/api/comments/${commentId}/reject`);
            expect(response.status).toBe(200);
            expect(response.body.message).toBe('Comment rejected successfully');
        });
    });

    describe('GET /api/comments/reports', () => {
        it('should return a list of reported comments', async () => {
            const response = await request(app).get('/api/comments/reports');
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
        });
    });
});