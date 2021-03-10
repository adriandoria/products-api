import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { ProductsRepository } from '../repositories/ProductsRepository'
import { UsersRepository } from '../repositories/UsersRepository'

class ProductController {
  async create(req: Request, res: Response) {
    const {name, email, description, price} = req.body

    const productRepository = getCustomRepository(ProductsRepository)
    const usersRepository = getCustomRepository(UsersRepository)

    //Verifica se o usuário já está cadastrado.
    const userAlredyExists = await usersRepository.findOne({email})

    if(!userAlredyExists) {
      return res.status(400).json({
        error: 'User does not exists.'
      })
    }

    //Verifica se o produto já existe.
    const productAlreadyExists = await productRepository.findOne({name})

    if (productAlreadyExists) {
      return res.status(400).json({
        error: "Product already exists."
      })
    }

    const product = await productRepository.create({
      user_id: userAlredyExists.id,
      name,
      description,
      price
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