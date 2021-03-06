import request from 'supertest'
import { app } from '../app'

import createConnection from '../database'

describe('Product', () => {
  beforeAll(async () => {
    const connection = await createConnection()
    await connection.runMigrations()
  })

  it('Should be able to create a new product.', async () => {
    const response = await request(app).post('/product').send({
      name: 'Product_name 01',
      description: 'Product_description 01',
      price: '$0'
    })

    expect(response.status).toBe(201)
  })

  it('Should be able to return all products.', async () => {
    await request(app).post('/product').send({
      name: 'Product_name 02',
      description: 'Product_description 02',
      price: '$0'
    })

    const response = await request(app).get('/products')

    expect(response.body.length).toBe(2)
  })
})