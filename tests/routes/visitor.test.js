const request = require('supertest');
const app = require('../../server');
const Visitor = require('../../models/Visitor');

test('test 1', async ()=>{
   const response = await request(app).post('/api/')
});