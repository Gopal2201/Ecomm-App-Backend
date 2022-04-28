const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
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
    quantity: {
        type: Number,
    },
    price: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true,
    },
    _id: {
        type: String,
        required: true
    }
})

const carts = mongoose.model("carts", cartSchema, "carts");
module.exports = carts;