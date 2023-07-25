// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Internal dependencies
const router = require("./router/router");

//Functions
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(express.static("uploads"));

//Database Connection
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.log(err));

// All Router
app.use("/", router);

//Default Error Handler
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send(err.message);
  } else {
    res.status(200).send("Success!");
  }
});
// Server Creatation
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on ${process.env.PORT}`);
});
