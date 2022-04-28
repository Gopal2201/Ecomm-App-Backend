const mongoose = require("mongoose")

async function Connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL, { useNewURLParser: true, useUnifiedTopology: true});
        console.log("DB Connected")
    } catch (err) { 
        console.log(err);
        process.exit();
    }
    
}

module.exports = Connect;