const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    // category:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "categories",
    // },
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        data: Buffer,
        contentType: String
    },
    productSKU: {
        type: String,
        required: true,
    },
    productBarcode: {
        type: String,
        required: true,
    },
    productCategory: {
        type: String,
        required: true,
    },
    productDefCategory: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    salePrice: {
        type: Number,
        required: true,
    },
    productQuantity: {
        type: String,
        required: true,
    },
    productSlug: {
        type: String,
        required: true,
    },
    productTags: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('products', ProductSchema)