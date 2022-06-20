const { Router } = require('express');
const productRouter = Router();
const productController = require('../controllers/product.controller');

productRouter.get('/', productController.getProducts)
productRouter.post('/', productController.addProduct)
productRouter.put('/:id', productController.updateProduct)
productRouter.delete('/:id', productController.deleteProduct)

module.exports = productRouter;
