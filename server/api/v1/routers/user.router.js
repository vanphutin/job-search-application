const express = require("express");
const router = express.Router();
const usersController = require("../controller/users.controller");

router.get("/", usersController.index);
router.post("/create", usersController.postCreateUser);
router.get("/detailUser/:id", usersController.getDetailUser);

module.exports = router;
