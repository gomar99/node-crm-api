const request = require('supertest');
const app = require('../src/app');

describe('GET /users', () => {
    it('should return array of users', async () => {
        const res = await request(app).get('/users');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
