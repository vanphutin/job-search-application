const express = require("express");
const router = express.Router();
const jobsController = require("../controller/jobs.controller");

router.get("/", jobsController.index);

module.exports = router;
