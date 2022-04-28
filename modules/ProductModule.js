const Product = require("../Schema/productSchema")

exports.getProducts = async (req, res, next) => {
    try {
        const data = await Product.find({});
        res.send(data);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}