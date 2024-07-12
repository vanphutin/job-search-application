// LẤY DỮ LIỆU TỪ DATABASE

const db = require("../../../config/database.config");
const { promisify } = require("util");
var md5 = require("md5");

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
        md5(password),
        avata,
      ]);

      return result;
    } catch (error) {
      throw ("error at model", error);
    }
  },
  getDetailUser: async (id) => {
    const sql_getOneUser = "SELECT * FROM users WHERE idUser=?";
    try {
      const result = await query(sql_getOneUser, [id]);
      return result;
    } catch (error) {
      throw ("error at model >", error);
    }
  },
};

module.exports = Users;
