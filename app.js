const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/productRoutes");
const app = express();

app.use(express.json());
app.use("/", router);

mongoose
  .connect("mongodb://localhost:27017/styloco")
  .then(() => console.log("connected to database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
