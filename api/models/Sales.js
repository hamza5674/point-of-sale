
const mongoose = require('mongoose');

// Define user schema
const saleschema = new mongoose.Schema({
    customer: {
        type: String,
        required: true
    },
    product: {
        type: mongoose.Schema.Type.ObjectId,
        ref: 'Product',
        required: true,
        unique: true
    },
    category: {
        type: mongoose.Schema.Type.ObjectId,
        ref: 'Category',
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    discount: String,
    price: String,
    total: String,
    order_status: {
        enum: ["paid", "unpaid"]
    }
}, { timestamps: true });

// Create product model
const Sales = mongoose.model("sale", saleschema);
module.exports = Sales;