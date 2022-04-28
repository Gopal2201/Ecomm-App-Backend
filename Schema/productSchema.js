const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    img: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["Mobile", "Laptop", "Television"]
    }
})

const products = mongoose.model("products", ProductSchema, "products");
module.exports = products;