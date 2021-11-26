const { validationResult } = require("express-validator");
const jsonWebToken = require("jsonwebtoken");

exports.userDataValidation = (request) => {
  const errors = validationResult(request);
  return errors;
};

exports.JWTValidation = (payload, resp) => {
  const expirationTime = {
    expiresIn: 3600, //1 hour
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
