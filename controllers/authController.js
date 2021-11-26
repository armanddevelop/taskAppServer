const User = require("../models/Users");
const bcryptjs = require("bcryptjs");
const utilsValidation = require("../utils/validations");
const tokenGeneration = require("../utils/tokenGenerator");

exports.authUser = async (req, res) => {
  //check if there are errors
  const errors = utilsValidation.userDataValidation(req);
  const { password, email } = req.body;
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const user = await User.findOne({ email });
    if (user) {
      const isValidatePass = await bcryptjs.compare(password, user.password);
      if (!isValidatePass) {
        return res.status(400).json({ msg: "Password Incorrect try again :(" });
      }
      tokenGeneration.JWTGeneration(user, res);
    } else {
      return res.status(400).json({ msg: "User not register" });
    }
  } catch (error) {
    console.log("Error triyng to authenticate user ", error);
    res.status(400).send("Shit happens in authController :(");
  }
};
