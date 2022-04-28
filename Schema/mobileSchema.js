const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mobileSchema = new Schema({
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
    userId: {
        type: String,
        required: true,
    }
})

const mobile = mongoose.model("mobiles", mobileSchema, "mobiles");
module.exports = mobile;