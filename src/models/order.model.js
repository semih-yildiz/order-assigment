const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    order_no: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    basket: [{
        id: String,
        price: Number,
        piece: Number
    }],
    payment_method: {
        type: String,
        required: true,
    },
    total_price: {
        type: Number,
        required: true,
    }
});

const Order = mongoose.model("Orders", OrderSchema);

module.exports = Order;
