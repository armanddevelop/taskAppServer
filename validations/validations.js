const { validationResult } = require("express-validator");

exports.validationCreateUser = (request) => {
  const errors = validationResult(request);
  return errors;
};
