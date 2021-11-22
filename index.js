const express = require("express");
const connectDatabase = require("./config/db");

//create server
const app = express();
//connect to dataBase
connectDatabase();

//port app
const PORT = process.env.PORT || 4000;

//
app.get("/", (req, res) => {
  res.send("hola licha");
});

//run the server
app.listen(PORT, () => {
  console.log("The server is ready", PORT);
});
