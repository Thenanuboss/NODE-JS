const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const port = 8000;

app.use("/Product", require("./src/Product/Routes"));
app.use("/Users", require("./src/user/Routes"));
app.use("/Auth", require("./src/Users/Routes"));

app.listen(port, async () => {
  await mongoose.connect("mongodb://localhost:27017/My_product");
  console.log("server is start");
});
