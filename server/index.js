const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello world 🍀");
});

//router

// Ensure the pool connection is established before starting the server

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
