import request from 'supertest'
import { app } from '../app'

import createConnection from '../database'

describe('User', () => {
  beforeAll(async () => {
    const connection = await createConnection()
    await connection.runMigrations()
  })

  it('Should be able to create a new user.', async () => {
    const response = await request(app).post('/user').send({
      name: 'username',
      email: 'teste@example.com'
    })

    expect(response.status).toBe(201)
  })
})