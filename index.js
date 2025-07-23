const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

// username: [
//   {
//     user1: "id1",
//     name: "hardik",
//     email: "hardikmakwana119@gmail.com",
//   },
// ];

app.get("/", (req, res) => {
  res.send("server running");
});

app.post("/", (req, res) => {
  res.json({ msg: "user Create data" });
  console.log(req.body);
});

app.listen(PORT);
