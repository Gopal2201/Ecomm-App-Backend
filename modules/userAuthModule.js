const User = require("../Schema/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.CreateUser = async (req, res, next) => {
    req.body.email = req.body.email.toLowerCase();
    let isExistingUser = await User.findOne({ email: req.body.email }).exec();
    if (isExistingUser) {
        res.send("User Already exist")
    } else {
        const salt = await bcrypt.genSalt();
        req.body.password = await bcrypt.hash(req.body.password, salt);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            mobNo: req.body.mobNo,
            password: req.body.password
        })

        const response = await user.save();
        res.send(response);
    }
}

exports.UserLogin = async (req, res, next) => {
    req.body.email = (req.body.email).toLowerCase();

    let isExistingUser = await User.find({ email: req.body.email })
    if (!isExistingUser) {
        res.send("Please enter the correct Email and password")
    } else {
        console.log(isExistingUser);
        // Check if Password Match
        const isPasswordCorrect = await bcrypt.compare(req.body.password, isExistingUser[0].password);
        if (!isPasswordCorrect) return res.sendStatus(403);

        // Generating JWT
        const token = jwt.sign({userId: isExistingUser[0]._id}, process.env.JWT_SECRET);
        res.send({ message: "User Logged In", token});
    }
}
