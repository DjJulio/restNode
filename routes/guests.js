const { Router } = require("express");
const { check } = require("express-validator");
const {
  guestGet,
  guestsGet,
  guestPost,
  guestDelete,
  guestPut,
  guestConfirmPut,
} = require("../controllers/guests");
const { validateFields } = require("../middlewares/validation-fields");

const router = Router();

router.get("/", guestsGet);
router.get("/:id", guestGet);
router.post(
  "/",
  [check("name", "El nombre es obligatorio").not().isEmpty(), validateFields],
  guestPost
);
router.delete("/:id", guestDelete);
router.put("/:id", guestPut);
router.put("/confirm/:id", guestConfirmPut);

module.exports = router;
