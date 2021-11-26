//route to authenticate Users
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { check } = require("express-validator");

//api/auth
router.post(
  "/",
  [
    check("password", "The password must be minimun 6 characteres").isLength({
      min: 6,
    }),
    check("email", "Register a valid email").isEmail(),
  ],
  authController.authUser
);
module.exports = router;
