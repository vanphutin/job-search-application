const express = require("express");
const router = express.Router();
const usersController = require("../controller/users.controller");

router.post("/create", usersController.postCreateUser);

module.exports = router;
