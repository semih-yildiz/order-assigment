const productModel = require("../models/product.model");

/**
 * @Description this function get products
 * @Param       req - http request
 * @Param       res - http response
 * @Param       next
 * @Returns     ...
 * @Author      Semih Yıldız
 */
exports.getProducts = async () => {
    try {
        const products = await productModel.find({});

        return { status: true, message: 'Get products successfully.', data: products };
    } catch (error) {
        return { status: false, message: 'Get products failed.' };
    }
}

/**
 * @Description this function add products
 * @Param       req - http request
 * @Param       res - http response
 * @Param       next
 * @Returns     ...
 * @Author      Semih Yıldız
 */
exports.addProduct = async (data) => {
    const product = new productModel(data);

    try {
        await product.save();
        return { status: true, message: 'The product has been successfully added.' };
    } catch (error) {
        return { status: false, message: 'Adding product failed.' };
    }
}

/**
 * @Description this function update product
 * @Param       req - http request
 * @Param       res - http response
 * @Param       next
 * @Returns     ...
 * @Author      Semih Yıldız
 */
exports.updateProduct = async (id, data) => {
    try {
        await productModel.findByIdAndUpdate(id, data);
        return { status: true, message: 'The product has been successfully updated.' };
    } catch (error) {
        return { status: false, message: 'Updating product failed.' };
    }
}

/**
 * @Description this function delete product
 * @Param       req - http request
 * @Param       res - http response
 * @Param       next
 * @Returns     ...
 * @Author      Semih Yıldız
 */
exports.deleteProduct = async (id) => {

    try {
        const product = await productModel.findByIdAndDelete(id);

        if (!product) return { status: false, message: 'The product not found.' };
        return { status: true, message: 'The product delete successfully.' };
    } catch (error) {
        return { status: false, message: 'Deleting product failed.' };
    }
}