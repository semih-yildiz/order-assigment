const orderModel = require("../models/order.model");
const productModel = require("../models/product.model");
const { orderStatus } = require('../enum');
var customId = require("custom-id");
var ObjectId = require('mongoose').Types.ObjectId;

/**
 * @Description this function get orders
 * @Author      Semih Yıldız
 */
exports.getOrders = async () => {
    try {
        const products = await orderModel.find({});

        return { status: true, message: 'Get orders successfully.', data: products };
    } catch (error) {
        return { status: false, message: 'Get orders failed.' };
    }
}

/**
 * @Description this function get order detail
 * @Author      Semih Yıldız
 */
exports.getOrderDetail = async (id) => {
    try {
        const orderResp = await orderModel.findOne({ _id: id });

        return { status: true, message: 'Get order detail successfully.', data: orderResp };
    } catch (e) {
        return { status: false, message: 'Get order detail failed.' };
    }
}

/**
 * @Description this function create order
 * @Author      Semih Yıldız
 */
exports.createOrder = async (data) => {
    let totalPrice = 0;
    let basket = [];

    try {
        let orderData = {
            order_no: customId({}),
            status: orderStatus.CREATED,
            payment_method: data.payment_method
        }
        for await (let productItem of data.basket) {
            //The current price of product  is taken from the database.
            const productResp = await productModel.findOne({ _id: productItem.id });
            basket.push({
                id: productItem.id,
                price: productResp.price,
                piece: productItem.piece
            })
            //Total basket amount is calculated
            totalPrice += productResp.price
        };
        orderData['basket'] = basket
        orderData['total_price'] = totalPrice

        const order = new orderModel(orderData);
        await order.save();

        return { status: true, message: 'The order has been successfully created.' };
    }
    catch (e) {
        return { status: false, message: 'Created order failed.' };
    }
}

/**
 * @Description this function create repeat order
 * @Author      Semih Yıldız
 */
exports.createRepeatOrder = async (data) => {
    const orderId = data.id;
    try {

        if (!ObjectId.isValid(orderId)) {
            return { status: false, message: 'Invalid objectId.' };
        } else {
            const orderResp = await orderModel.findOne({ _id: orderId });

            if (orderResp) {
                let orderData = {
                    order_no: customId({}),
                    status: orderStatus.CREATED,
                    basket: orderResp.basket,
                    payment_method: orderResp.payment_method,
                    total_price: orderResp.total_price
                }

                const order = new orderModel(orderData);
                await order.save();

                return { status: true, message: 'The order repeat has been successfully created.' };
            } else {
                return { status: false, message: 'Order not found.' };
            }
        }
    } catch (error) {
        return { status: false, message: 'Create repeat order failed.' };
    }
}

/**
 * @Description this function change status order
 * @Author      Semih Yıldız
 */
exports.changeOrderStatus = async (id, data) => {

    try {
        let status = "";

        switch (data.status) {
            case "CANCELED":
                status = orderStatus.CANCELED
                break;
            case "POSTPONEMENT":
                status = orderStatus.DELAY
                break;
            case "RETURN":
                status = orderStatus.RETURN
                break;
            default:
                return { status: false, message: 'Invalid status data.' };
        }
        await orderModel.findByIdAndUpdate(id, { status });
        return { status: true, message: 'The order has been successfully change status.' };
    } catch (error) {
        return { status: false, message: 'Change order status failed.' };
    }

}