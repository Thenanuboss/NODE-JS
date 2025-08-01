const express = require("express");
const Product = require("./model");

const getAll = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from DB
    res.json({
      data: products,
      msg: "All Products",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const getOne = async (req, res) => {
  try {
    const id = req.params["id"];
    const product = await Product.findById(id);
    if (!Product) return res.json({ msg: "Product not found" });
    return res.json({ Product: product, msg: "Product Found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

// const create = async (req,res) => {
//  try{
//   const {name,price,desc} = req.body;
//   if(!name|| !price|| !desc){
//     return res.status(400).json({msg:"Please Provide All Required Field"});
//   }
//   const Product = await Product.create({name, price, desc})
//   res.status(201).json({msg:"Product Created", data: Product})
//  }catch(error){
//   console.log(error);
//   return res.status(500).json({msg:"Internal Server Error"})
//  }
// }

const create = async (req, res) => {
  try {
    const { name, price, desc } = req.body;

    if (!name || !price || !desc) {
      return res
        .status(400)
        .json({ msg: "Please Provide All Required Fields" });
    }

    const product = await Product.create({ name, price, desc });
    res.status(201).json({ msg: "Product Created", data: product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const updateOne = async (req, res) => {
  try {
    const id = req.params["id"];
    const { name, price, desc } = req.body;

    const updateProduct = await Product.findByIdAndUpdate(id, {
      name,
      price,
      desc,
    });
    if (!updateProduct) return res.json({ msg: "Product not found" });

    res.json({ msg: "Product updated succesfullly", data: updateProduct });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const deleteOne = async (req, res) => {
  try {
    const id = req.params["index"];
    const result = await Product.findByIdAndDelete(id);
    res.json({ msg: `Product Delete successfully`, data: result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = { getAll, getOne, create, updateOne, deleteOne };
