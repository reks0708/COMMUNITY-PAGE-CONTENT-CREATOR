const request = require('supertest');
const app = require('../src/app'); // Adjust the path as necessary
const db = require('../src/services/db'); // Adjust the path as necessary

describe('Newsletter API', () => {
    beforeAll(async () => {
        await db.connect(); // Connect to the database before tests
    });

    afterAll(async () => {
        await db.disconnect(); // Disconnect from the database after tests
    });

    describe('POST /api/newsletter', () => {
        it('should subscribe a user to the newsletter', async () => {
            const response = await request(app)
                .post('/api/newsletter')
                .send({
                    name: 'Test User',
                    email: 'testuser@example.com',
                });

            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('message', 'Subscription successful');
        });

        it('should return an error for duplicate email', async () => {
            await request(app)
                .post('/api/newsletter')
                .send({
                    name: 'Test User',
                    email: 'testuser@example.com',
                });

            const response = await request(app)
                .post('/api/newsletter')
                .send({
                    name: 'Another User',
                    email: 'testuser@example.com',
                });

            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('error', 'Email already subscribed');
        });

        it('should return an error for invalid email', async () => {
            const response = await request(app)
                .post('/api/newsletter')
                .send({
                    name: 'Invalid User',
                    email: 'invalid-email',
                });

            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('error', 'Invalid email format');
        });
    });
});