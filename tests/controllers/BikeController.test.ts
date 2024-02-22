import Routes from '../../src/middlewares/Routes'
import express from 'express'
import request from 'supertest'

const app = express()
app.use(Routes)

describe('BikeController', () => {
  it('index', async () => {
    const response = await request(app).get('/bikes')
    expect(response.statusCode).toBe(200)
  });

  it('getBikeList', async () => {
    const response = await request(app).get('/bikes/list')
    expect(response.statusCode).toBe(200)
  });
});