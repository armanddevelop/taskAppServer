const express = require("express");
const connectDatabase = require("./config/db");

//create server
const app = express();
//connect to dataBase
connectDatabase();

//enable express.json
app.use(express.json({ extended: true }));

//port app
const PORT = process.env.PORT || 4000;

//import routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));

//run the server
app.listen(PORT, () => {
  console.log("The server is ready", PORT);
});
