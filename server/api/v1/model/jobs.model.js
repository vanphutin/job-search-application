// LẤY DỮ LIỆU TỪ DATABASE

const db = require("../../../config/database.config");
const { promisify } = require("util");

// Chuyển đổi db.query thành một hàm trả về Promise
const query = promisify(db.query).bind(db);

const Jobs = {
  // [GET] /api/v1/jobs
  getAllJobs: async () => {
    const sql = "SELECT * FROM jobs";
    try {
      const result = await query(sql);
      console.log("result", result);
      return result;
    } catch (error) {
      throw ("error at model >", error);
    }
  },
  getDetailJob: async (id) => {
    const sql_detai = "SELECT * FROM jobs WHERE idJob=?";
    try {
      const result = await query(sql_detai, [id]);
      return result;
    } catch (error) {
      throw ("error at model >", error);
    }
  },
  createJob: async (
    idJob,
    title,
    description,
    location,
    salary,
    company,
    id,
    avatar
  ) => {
    const sql_create =
      "INSERT INTO jobs (idJob, title, description, location, salary, company, idUser,avatar) VALUES(?,?,?,?,?,?,?,?)  ";

    try {
      const result = await query(sql_create, [
        idJob,
        title,
        description,
        location,
        salary,
        company,
        id,
        avatar,
      ]);
      return result;
    } catch (error) {
      throw ("error at model >", error);
    }
  },
  deleteJob: async (id) => {
    const sql_delete = "UPDATE jobs SET deleted=TRUE where idUser=?";
    try {
      const result = await query(sql_delete, [id]);
      return result;
    } catch (error) {
      throw ("error at model >", error);
    }
  },
};

module.exports = Jobs;
