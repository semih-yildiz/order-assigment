const { Router } = require('express');
const orderRouter = Router();
const orderController = require('../controllers/order.controller');

orderRouter.get('/', orderController.getOrders)
orderRouter.get('/:id/detail', orderController.getOrderDetail)
orderRouter.post('/create', orderController.createOrder)
orderRouter.post('/create-repeat', orderController.createRepeatOrder)
orderRouter.put('/change-status/:id', orderController.changeOrderStatus)

module.exports = orderRouter;
