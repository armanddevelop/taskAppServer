const { validationResult } = require("express-validator");

exports.userDataValidation = (request) => {
  const errors = validationResult(request);
  return errors;
};
