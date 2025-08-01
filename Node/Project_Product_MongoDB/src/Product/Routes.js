const express = require("express");
const Product = require("./Controller");

const Routes = express.Router();

//1.read All-

Routes.get("/get", Product.getAll);

// Routes.get("/test/2",middleware4, Product.getAll);

//2.read One
Routes.get("/user/:id", Product.getOne);

// 3. create
Routes.post("/", Product.create);

//4.delete
Routes.delete("/:index", Product.deleteOne);

//5.update
Routes.put("/:id", Product.updateOne);

module.exports = Routes;
