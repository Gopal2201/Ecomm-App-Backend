const Cart = require("../Schema/cartSchema")

exports.updateCartList = async (req, res, next) => {
    const { type } = req.query;
    req.body._id = req.body._id+req.user;
    try {
        const data = await Cart.findOne({ _id: req.body._id });
        console.log(data);
        if (data && type === "decrement" && data.quantity <= 1){
            await Cart.findByIdAndDelete(req.body._id)
        }
        if (data && type === "increment") {
            const updatedCart = await Cart.findByIdAndUpdate({_id: req.body._id}, {
                quantity: data.quantity + 1,
            })
        } else if (data && type === "decrement") {
            const updatedCart = await Cart.findByIdAndUpdate({_id: req.body._id}, {
                quantity: data.quantity - 1,
            })
        } else {
            const cart = new Cart({
                _id: req.body._id,
                model: req.body.model,
                img: req.body.img,
                company: req.body.company,
                price: req.body.price,
                quantity: 1,
                userId: req.user,
            })

            const response = await cart.save();
        }
        const allCart = await Cart.find({userId: req.user});
        res.send(allCart);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

exports.getCartList = async (req, res) => {
    try {
        const allCart = await Cart.find({userId: req.user});
        res.send(allCart);
    } catch (err) {
        res.send(err)
    }
}
