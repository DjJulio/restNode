const { response, request } = require("express");

const usersGet = (req = request, res = response) => {
  const query = req.query;
  res.json({
    msg: "get API controller",
    query,
  });
};

const userPost = (req, res = response) => {
  const body = req.body;

  res.json({
    msg: "post API controller",
    body,
  });
};

const userPut = (req, res = response) => {
  const { id } = req.params;
  res.json({
    msg: "put API controller",
    id,
  });
};

const userDelete = (req, res = response) => {
  res.json({
    msg: "delete API controller",
  });
};

const userPatch = (req, res = response) => {
  res.json({
    msg: "patch API controller",
  });
};

module.exports = {
  usersGet,
  userPost,
  userPut,
  userDelete,
  userPatch,
};
