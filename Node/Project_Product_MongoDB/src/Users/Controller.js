const express = require("express");
const Users = require("./model");

const getAll = async (req, res) => {
  try {
    res.json({
      Users: Users,
      msg: "All Users",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const getOne = async (req, res) => {
  try {
    const id = req.params["id"];
    const user = await Product.findOne({ _id: id });
    if (!Users) return res.json({ msg: "Users not found" });
    return res.json({ Product: Product, msg: "Users Found" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ msg: "Internal Server Error" });
  }
};

const creatOne = async (req, res) => {
  try {
    const { name, price, Desc } = req.body;
    if (!name || !price || !Desc) {
      return res.status(400).json({ msg: "Please Provide All Required Field" });
    }
    const Users = await Users.creat({ name, price, Desc });
    res.status(201).json({ msg: "Users Created", data: product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const updateOne = async (req, res) => {
  try {
    const id = req.params["id"];
    const Users = await Users.findById(id);
    if (!Users) return res.json({ msg: "Users not found" });

    const { name, price, Desc } = req.body;

    await Users.findOneAndUpdate({ _id: id }, { name, price, Desc });
    res.json({ msg: "Users updated succesfullly" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const deleteOne = async (req, res) => {
  try {
    const id = req.params["id"];
    const result = await Users.findByIdAndDelete(id);
    res.json({ msg: `Users Delete successfully, ${JSON.stringify(result)}` });
  } catch (error) {
    console.log(Error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = { getAll, getOne, creatOne, updateOne, deleteOne };
