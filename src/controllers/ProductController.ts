import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { ProductsRepository } from '../repositories/ProductsRepository'

class ProductController {
  async create(req: Request, res: Response) {
    const {name, description, price} = req.body

    const productRepository = getCustomRepository(ProductsRepository)

    const productAlreadyExists = await productRepository.findOne({name})

    if (productAlreadyExists) {
      return res.status(400).json({
        error: "Product already exists."
      })
    }

    const product = productRepository.create({
      name, description, price
    })
    
    await productRepository.save(product)

    return res.status(201).json(product)
  }

  async show(req: Request, res: Response) {
  	const productsRepostiory = getCustomRepository(ProductsRepository)
    
    const all = await productsRepostiory.find()
    
    return res.json(all)
  }
}

export {ProductController}