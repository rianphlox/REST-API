const request = require('supertest');
const app = require('../app');
const User = require('../models/User');

describe('User API', () => {
  beforeEach(async () => {
    await User.deleteMany();
  });

  test('GET /api/v1/users - should get all users', async () => {
    const response = await request(app).get('/api/v1/users');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]);
  });

  // Add more tests for other endpoints
});