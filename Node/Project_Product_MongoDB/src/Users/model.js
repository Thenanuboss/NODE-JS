// nosql
// install mongoose
// schema is the class

const mongoose = require("mongoose");

// structure banyu (versues) database => collection bane e aapdu model => connect model jode hoi che ..
// model => collection

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: [true, "Please provide unique userName"],
    unique: [true, "userName alrady exits"],
    // Match:
  },
  password: { type: String, unique: false },

  contactNo: Number,

  email: {
    type: String,
    require: [true, "Please provide unique email"],
    unique: [true, "email already exits"],
  },
});

// data store karv mate model banavanu
// name and class aapvanu
// database sathe connect karo pasi mongodb ma dekhai
// database jode connect karvanu

const User = mongoose.model("User", userSchema);

module.exports = User;
