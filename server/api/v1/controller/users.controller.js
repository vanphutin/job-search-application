// ĐIỀU HƯỚNG ĐẾN ROUTER
const Users = require("../model/users.model");
const { v4: uid } = require("uuid");

module.exports.index = async (req, res) => {
  try {
    const users = await Users.getAllUsers();

    res.status(200).json({
      code: 200,
      message: "get all users success",
      users,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      code: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports.postCreateUser = async (req, res) => {
  try {
    const idUser = uid();
    const { lastname, firstname, email, username, password, avata } = req.body;

    if (!lastname || !firstname || !username || !avata || !email || !password) {
      return res.status(400).json({
        code: 400,
        message: "All fields are required",
      });
    }

    const createUser = await Users.postCreateUser(
      idUser,
      lastname,
      firstname,
      email,
      username,
      password,
      avata
    );

    res.status(200).json({
      code: 201,
      message: "create user success",
      createUser,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      code: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
