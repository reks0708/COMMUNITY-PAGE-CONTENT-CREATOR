const request = require('supertest');
const app = require('../src/app');

describe('Health Check', () => {
    it('should return a 200 status and a health message', async () => {
        const response = await request(app).get('/api/health');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Healthy' });
    });
});