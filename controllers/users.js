const { response, request } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const usersGet = (req = request, res = response) => {
  const query = req.query;
  res.json({
    statusText: "get API controller",
    query,
  });
};

const userPost = async (req, res = response) => {
  const { name, email, password, role } = req.body;
  const user = new User({ name, email, password, role });

  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(password, salt);

  await user.save();

  res.json({
    user,
  });
};

const userPut = async (req, res = response) => {
  const { id } = req.params;
  const { _id, password, google, email, ...userData } = req.body;

  // TODO validate with DB
  if (password) {
    const salt = bcrypt.genSaltSync();
    userData.password = bcrypt.hashSync(password, salt);
  }

  const user = await User.findByIdAndUpdate(id, userData);

  res.json({
    statusText: "put API controller",
    user,
  });
};

const userDelete = (req, res = response) => {
  res.json({
    statusText: "delete API controller",
  });
};

const userPatch = (req, res = response) => {
  res.json({
    statusText: "patch API controller",
  });
};

module.exports = {
  usersGet,
  userPost,
  userPut,
  userDelete,
  userPatch,
};
