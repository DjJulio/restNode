const { Router } = require("express");
const {
  usersGet,
  userPut,
  userPost,
  userDelete,
  userPatch,
} = require("../controllers/users");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validation-fields");
const Role = require("../models/role");
const {
  isValidRole,
  isEmailExist,
  existUserById,
} = require("../helpers/db-validators");

const router = Router();

router.get("/", usersGet);

router.put(
  "/:id",
  [
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom(existUserById),
    validateFields,
  ],
  userPut
);

router.post(
  "/",
  [
    check("email", "El email no es valido").isEmail(),
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe ser mas de 6 letras").isLength({
      min: 6,
    }),
    check("role").custom(isValidRole),
    check("email").custom(isEmailExist),
    validateFields,
  ],
  userPost
);

router.delete("/", userDelete);

router.patch("/", userPatch);

module.exports = router;
