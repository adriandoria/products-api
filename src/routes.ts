import { Router } from 'express'
import { UserController } from './controllers/UserController'
import { ProductController } from './controllers/ProductController'

const router = Router()

const userController = new UserController()
const productController = new ProductController()

router.post('/user', userController.create)
router.post('/product', productController.create)

router.get('/products', productController.show)

export { router }