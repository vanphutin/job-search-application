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
};

module.exports = Jobs;
