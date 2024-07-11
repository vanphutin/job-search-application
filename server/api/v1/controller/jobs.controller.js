// ĐIỀU HƯỚNG ĐẾN ROUTER
const Jobs = require("../model/jobs.model");
const { v4: uid } = require("uuid");

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

module.exports.getDetailJob = async (req, res) => {
  const { id } = req.params;
  try {
    const jobDetail = await Jobs.getDetailJob(id);

    res.status(200).json({
      code: 200,
      message: "Get detail jobs success",
      job: jobDetail,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.createJob = async (req, res) => {
  const { id } = req.params;
  try {
    const idJob = uid();
    const { title, description, location, salary, company, id, avatar } =
      req.body;

    if (
      (!title || !description || !location || !salary || !company || !id,
      !avatar)
    ) {
      res.status(400).jobs({
        code: 400,
        message: ' message: "All fields are required',
      });
    }

    const addJob = await Jobs.createJob(
      idJob,
      title,
      description,
      location,
      salary,
      company,
      id,
      avatar
    );

    res.status(201).json({
      code: 201,
      message: "create job success !",
      addJob,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.deleteJob = async (req, res) => {
  try {
    const deleteJobs = await Jobs.deleteJob(req.params?.id);

    if (!deleteJobs) {
      return res.status(404).json({
        code: 404,
        message: "job not found",
      });
    }
    res.status(200).json({
      code: 200,
      message: "Delete job success",
      data: {
        job: deleteJobs,
      },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
