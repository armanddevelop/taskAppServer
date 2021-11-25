const User = require("../models/Users");
const bcryptjs = require("bcryptjs");
const validationCreateUser = require("../validations/validations");

exports.createUser = async (req, res) => {
  //check if there are errors
  const errors = validationCreateUser.validationCreateUser(req);
  const { password, email } = req.body;
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const userEmail = await User.findOne({ email });
    if (!userEmail?.email) {
      //create the user
      const user = new User(req.body);
      //hash the password
      const salt = await bcryptjs.genSalt(10);
      user.password = await bcryptjs.hash(password, salt);
      //save the user
      await user.save();
      //menssage to confirmation
      res.status(200).json({ msg: "User created" });
    } else {
      return res.status(400).json({ msg: "The user is already created" });
    }
  } catch (error) {
    console.log("This is the error from create user ", error);
    res.status(400).send("Shit happens :(");
  }
};
