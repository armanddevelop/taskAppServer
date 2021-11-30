const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
  //read the header token
  const token = req.header("x-auth-token");
  //serch if there is no token
  if (!token)
    return res.status(400).json({ msg: "user without token sorry :(" });
  //validate token
  try {
    const secretToken = jwt.verify(token, process.env.SECRETWORD);
    req.user = secretToken.user;
    next();
  } catch (error) {
    console.error("An error occured trying to validate the token ", error);
    res.status(401).json({ msg: "Invalid Token" });
  }
};
