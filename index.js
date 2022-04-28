const express = require('express');
const cors = require("cors");
const MongoConnect = require('./mongoConnection');
const authUserRoute = require("./routes/AuthRoutes/authUserRoute");
const categiriesRoute = require("./routes/categiries");
const cartsRoute = require("./routes/cartsRoute");
const jwt = require("jsonwebtoken");
const adminRoute = require("./routes/AdminRoutes/adminRoute");
const userRoute = require("./routes/UserRoutes/userRoute");

const dotenv = require("dotenv");
dotenv.config();

const app = express();


const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

async function loadApp() {
    await MongoConnect();

    app.use("/Authuser", authUserRoute);
    // app.use("/AuthAdmin", authAdminRoute);
    app.use((req, res, next) => {
        try {
            console.log("1");
            const token = req.headers["authorization"].split(" ")[1];
            console.log(token);
            const isTokenValid = jwt.verify(token, process.env.JWT_SECRET);
            console.log(isTokenValid);
            req.user = isTokenValid.userId;
            next();
        } catch (err) {
            res.sendStatus(403).send(err);
        }
    })
    app.use("/users", userRoute);
    app.use("/users/carts", cartsRoute);

    app.use("/admin", adminRoute);


    app.listen(PORT, () => {
        console.log("App Started")
    })
}

loadApp();
