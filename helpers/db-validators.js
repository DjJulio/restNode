const Role = require("../models/role");
const User = require("../models/user");

const isValidRole = async (role = "") => {
  const existRole = await Role.findOne({ role });
  if (!existRole) {
    throw new Error(`El role ${role} no esta registrado`);
  }
};

const isEmailExist = async (email = "") => {
  const existEmail = await User.findOne({ email });
  if (existEmail) {
    throw new Error(`El correo ${email} ya esta registrado`);
  }
};

const existUserById = async (id = "") => {
  const existUser = await User.findById(id);
  if (!existUser) {
    throw new Error(`El Id: ${id} no esta registrad`);
  }
};

module.exports = {
  isValidRole,
  isEmailExist,
  existUserById,
};
