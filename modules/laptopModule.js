const Laptop = require("../Schema/laptopSchema")

exports.getLaptops = async (req, res, next) => {
    try {
        const data = await Laptop.find({});
        res.send(data);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

exports.addLaptops = async (req, res, next) => {
    try {
        const data = await Laptop.insertMany(req.body);
        res.send(data);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}