//route to create users
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { check } = require("express-validator");

//set up user
//api/users
router.post(
  "/",
  [
    check("name", "the field name is mandatory").not().isEmpty(),
    check("password", "The password must be minimun 6 characteres").isLength({
      min: 6,
    }),
    check("email", "Register a valid email").isEmail(),
  ],
  userController.createUser
);
module.exports = router;
