const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>To-Do List</title>
      </head>
      <body>
        <h1>To-Do List</h1>
        <ul>
          <li>Learn Node.js</li>
          <li>Build To-Do App</li>
          <li>Developer</li>
        </ul>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
