const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    createdAt: {
        type: Date, default: Date.now()
    },
    updatedAt: {
        type: Date, default: Date.now()
    }
},
{timestamps: true}
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;