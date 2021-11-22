const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const connectDatabase = async () => {
  try {
    //mogoose recive the varibale of environment and the second paremter is a object of confoguration
    await mongoose.connect(process.env.DB_MONGO, options);
    console.log("The connection was succesfull");
  } catch (error) {
    console.error("This si the error in connectDase: ", error);
    process.exit(1); //detener la app
  }
};

module.exports = connectDatabase;
