const Mobile = require("../Schema/mobileSchema")

exports.getMobiles = async (req, res, next) => {
    try {
        const data = await Mobile.find({});
        res.send(data);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

exports.addMobiles = async (req, res, next) => {
    try {
        const data = await Mobile.insertMany({...req.body, userId:req.user});
        res.send(data);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}