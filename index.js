const express = require("express");

//create server
const app = express();
const PORT = process.env.PORT || 4000;

//
app.get("/", (req, res) => {
  res.send("hola licha");
});

//run the server
app.listen(PORT, () => {
  console.log("The server is ready", PORT);
});
