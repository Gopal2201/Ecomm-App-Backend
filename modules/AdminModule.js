const Product = require("../Schema/productSchema")

exports.addProduct = async (req, res, next) => {
    try {
        const product = new Product({
            model: req.body.model,
            img: req.body.img,
            company: req.body.company,
            price: req.body.price,
            category: req.body.category
        })
        const response = await product.save();
        res.send(response);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

exports.deleteProduct = async (req, res, next) => {
    const id = req.params.id;
    try {
        const data = await Product.findByIdAndRemove(id);
        res.send({message: "Deleted", data});
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

exports.updateProduct = async (req, res, next) => {
    const id = req.params.id;
    try {
        const data = await Product.findByIdAndUpdate(id, {            
                model: req.body.model,
                img: req.body.img,
                company: req.body.company,
                price: req.body.price,
                category: req.body.category
        }, {new:true});
        res.send(data);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}