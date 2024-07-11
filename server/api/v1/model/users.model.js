// LẤY DỮ LIỆU TỪ DATABASE

const db = require("../../../config/database.config");
const { promisify } = require("util");

// Chuyển đổi db.query thành một hàm trả về Promise
const query = promisify(db.query).bind(db);

const Users = {
  getAllUsers: async () => {
    const sql = "SELECT * FROM users";
    try {
      const result = await query(sql);
      return result;
    } catch (error) {
      throw ("error at model", error);
    }
  },

  postCreateUser: async (
    idUser,
    lastname,
    firstname,
    email,
    username,
    password,
    avata
  ) => {
    const sql_create = await "INSERT INTO users VALUES (?,?,?,?,?,?,?) ";

    try {
      const result = await query(sql_create, [
        idUser,
        lastname,
        firstname,
        email,
        username,
        password,
        avata,
      ]);

      return result;
    } catch (error) {
      throw ("error at model", error);
    }
  },
};

module.exports = Users;
