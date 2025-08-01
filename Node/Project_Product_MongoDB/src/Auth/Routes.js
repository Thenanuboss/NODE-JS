const User = require("../Users/model");

const register = async (req, res) => {
  try {
    const { userName, password, contactNo, email } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ msg: "Please required fields" });
    }

    const user = await User.create({ userName, password, contactNo, email });
    return res.status(201).json({ msg: "User created", data: user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ msg: "Please enter the email and password" });
    }

    return res
      .status(200)
      .json({ msg: "User loggin successfully", data: { email } });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal server error", error });
  }
};
const logout = (req, res) => {
  try {
    return res.status(200).json({ msg: "User logout successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal server error", error });
  }
};

module.exports = { register, login, logout };
