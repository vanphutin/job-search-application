const express = require("express");
const router = express.Router();
const usersController = require("../controller/users.controller");

router.get("/", usersController.index);
router.post("/create", usersController.postCreateUser);

module.exports = router;
