const productService = require('../services/product.service');

/**
 * @Description this function get products
 * @Param       req - http request
 * @Param       res - http response
 * @Param       next
 * @Returns     ...
 * @Author      Semih Yıldız
 */
exports.getProducts = async (req, res) => {
    const response = await productService.getProducts(req.body)
    res.status(response.status ? 200 : 500).json(response)
}

/**
 * @Description this function add product
 * @Param       req - http request
 * @Param       res - http response
 * @Param       next
 * @Returns     ...
 * @Author      Semih Yıldız
 */
exports.addProduct = async (req, res) => {
    const response = await productService.addProduct(req.body)
    res.status(response.status ? 201 : 500).json(response)
}

/**
 * @Description this function update product
 * @Param       req - http request
 * @Param       res - http response
 * @Param       next
 * @Returns     ...
 * @Author      Semih Yıldız
 */
exports.updateProduct = async (req, res) => {
    const response = await productService.updateProduct(req.params.id, req.body)
    res.status(response.status ? 200 : 500).json(response)
}

/**
 * @Description this function delete product
 * @Param       req - http request
 * @Param       res - http response
 * @Param       next
 * @Returns     ...
 * @Author      Semih Yıldız
 */
exports.deleteProduct = async (req, res) => {
    const response = await productService.deleteProduct(req.params.id)
    res.status(response.status ? 200 : 500).json(response)

}