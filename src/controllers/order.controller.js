const orderService = require('../services/order.service');

/**
 * @Description this function get Orders
 * @Param       req - http request
 * @Param       res - http response
 * @Returns     ordersData
 * @Author      Semih Yıldız
 */
exports.getOrders = async (req, res) => {
    const response = await orderService.getOrders()
    res.status(response.status ? 200 : 500).json(response)
}

/**
 * @Description this function get order detail
 * @Param       req - http request
 * @Param       res - http response
 * @Returns     orderData
 * @Author      Semih Yıldız
 */
exports.getOrderDetail = async (req, res) => {
    const response = await orderService.getOrderDetail(req.params.id)
    res.status(response.status ? 200 : 500).json(response)
}

/**
 * @Description this function create order
 * @Author      Semih Yıldız
 */
exports.createOrder = async (req, res) => {
    const response = await orderService.createOrder(req.body)
    res.status(response.status ? 201 : 500).json(response)
}

/**
 * @Description this function create repeat order
 * @Author      Semih Yıldız
 */
exports.createRepeatOrder = async (req, res) => {
    const response = await orderService.createRepeatOrder(req.body)
    res.status(response.status ? 201 : 500).json(response)
}

/**
 * @Description this function change order status
 * @Author      Semih Yıldız
 */
exports.changeOrderStatus = async (req, res) => {
    const response = await orderService.changeOrderStatus(req.params.id, req.body)
    res.status(response.status ? 200 : 500).json(response)
}
