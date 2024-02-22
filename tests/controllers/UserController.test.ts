import Routes from '../../src/middlewares/Routes'
import express from 'express'
import request from 'supertest'

const app = express()
app.use(Routes)

describe('UserController', () => {
  // it('login POST', async () => {
  //   const response = await request(app).post('/user/login')
  //   expect(response.statusCode).toBe(200)
  // });

  // it('login GET', async () => {
  //   const response = await request(app).get('/user/login')
  //   expect(response.statusCode).toBe(200)
  // });

  // it('register POST', async () => {
  //   const response = await request(app).post('/user/register')
  //   expect(response.statusCode).toBe(200)
  // });

  // it('register GET', async () => {
  //   const response = await request(app).get('/user/register')
  //   expect(response.statusCode).toBe(200)
  // });

  // it('logout POST', async () => {
  //   const response = await request(app).post('/user/logout')
  //   expect(response.statusCode).toBe(200)
  // });
});