const mongoose = require('mongoose');

// Define user schema
const categoryschema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    }
}, { timestamps: true });

// Create product model
const Category = mongoose.model("category", categoryschema);
module.exports = Category;