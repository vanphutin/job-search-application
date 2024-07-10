// ĐIỀU HƯỚNG ĐẾN ROUTER
const Jobs = require("../model/jobs.model");

module.exports.index = async (req, res) => {
  try {
    const jobs = await Jobs.getAllJobs();

    res.status(200).json({
      code: 200,
      message: "get all jobs success",
      jobs,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
