const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    description: {
        type: String,
        required: true,
    },
    stock: Number,
    price: Number,
});

const Product = mongoose.model("Products", ProductSchema);

module.exports = Product;
