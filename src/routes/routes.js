const { Router } = require('express');
const orderRoute = require('./order.route');
const productRoute = require('./product.route');

const apiRouter = Router();

apiRouter.use('/api/v1/order', orderRoute);
apiRouter.use('/api/v1/product', productRoute);

module.exports = apiRouter;
