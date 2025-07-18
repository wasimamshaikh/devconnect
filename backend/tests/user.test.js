const request = require('supertest');
const app = require('../server'); // make sure to export app from server.js

describe('User Routes', () => {
  it('should register a new user', async () => {
    const res = await request(app).post('/api/users/register').send({
      name: 'TestUser',
      email: 'test@example.com',
      password: '123456'
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should login a user', async () => {
    const res = await request(app).post('/api/users/login').send({
      email: 'test@example.com',
      password: '123456'
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});