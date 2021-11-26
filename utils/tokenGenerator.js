const jsonWebToken = require("jsonwebtoken");

exports.JWTGeneration = (user, resp) => {
  const expirationTime = {
    expiresIn: 3600, //1 hour
  };
  const payload = {
    user: {
      id: user.id,
    },
  };
  //sing JWT
  jsonWebToken.sign(
    payload,
    process.env.SECRETWORD,
    expirationTime,
    (error, token) => {
      if (error) throw error;
      resp.json({ token });
    }
  );
};
