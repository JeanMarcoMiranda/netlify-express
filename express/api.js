const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const serverless = require('serverless-http')
const path = require('path')

// -- App routes
const userRoute = require("../routes/user");
const authRoute = require("../routes/auth");
const productRoute = require("../routes/product");
const cartRoute = require("../routes/cart");
const orderRoute = require("../routes/order");
const stripeRoute = require("../routes/stripe");
const furnitureRoute = require("../routes/furniture")
const gameRoute = require("../routes/game")
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/.netlify/functions/api", productRoute);
app.use("/.netlify/functions/api", furnitureRoute);
app.use("/.netlify/functions/api", gameRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));



module.exports.handler = serverless(app)

