const express = require("express");
const database = require("./config/database.config");
const routerV1 = require("./api/v1/routers/index.router");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

//cors
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world 🍀");
});

//router
routerV1(app);

// Ensure the pool connection is established before starting the server
database.getConnection((error, connection) => {
  if (error) {
    console.error("Error connecting to database:", error);
    return;
  }

  console.log("Connected to MySQL database");

  connection.release();
  // Start server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
