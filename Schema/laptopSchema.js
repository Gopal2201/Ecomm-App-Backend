const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const laptopSchema = new Schema({
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
    }
})

const laptop = mongoose.model("laptops", laptopSchema, "laptops");
module.exports = laptop;