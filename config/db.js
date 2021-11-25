const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const connectDatabase = async () => {
  try {
    //mogoose recive the variable of environment and the second parameter in the function
    //is a object of configuration
    await mongoose.connect(process.env.DB_MONGO, options);
    console.log("The connection was succesfull");
  } catch (error) {
    console.error("This is the error in connectDase: ", error);
    process.exit(1); //stop the app
  }
};

module.exports = connectDatabase;
