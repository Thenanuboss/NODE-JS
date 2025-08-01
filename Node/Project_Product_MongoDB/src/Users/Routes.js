const express = require("express");
const Users = require("./Controller");

const Routes = express.Router();

//1.read All-

Routes.get("/test", Users.getAll);

// Routes.get("/test/2",middleware4, Product.getAll);

//2.read One
Routes.get("/user/:index", Users.getOne);

// 3. create
Routes.post("/", Users.creatOne);

//4.delete
Routes.delete("/:index", Users.deleteOne);

//5.update
Routes.put("/:index", Users.updateOne);

module.exports = Routes;
