const express = require("express");
const router = express.Router();
const jobsController = require("../controller/jobs.controller");

router.get("/", jobsController.index);
router.get("/detail/:id", jobsController.getDetailJob);
router.post("/createJob", jobsController.createJob);
router.delete("/deleteJob/:id", jobsController.deleteJob);

module.exports = router;
