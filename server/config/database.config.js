require("dotenv").config();
const sql = require("mysql");

const pool = sql.createPool({
  connectionLimit: 10,
  host: "localhost",
  port: process.env.PORT_DB,
  user: process.env.USER_DB,
  password: "",
  database: process.env.DATABASE_DB,
});

module.exports = pool;
