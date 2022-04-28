const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobNo: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const user = mongoose.model("users", userSchema, "users");
module.exports = user;