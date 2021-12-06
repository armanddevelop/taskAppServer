const utilsValidation = require("../utils/validations");
const utilsQuery = require("./Querys/utils");

exports.createProject = async (req, res) => {
  const errors = utilsValidation.userDataValidation(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    utilsQuery.createDocument(req, res);
  } catch (error) {
    console.log("Shit happend in createProject ", error);
    res.status(500).send("Shit happens in createProject :(");
  }
};
//get the projects of a current user
exports.getProjects = async (req, res) => {
  try {
    utilsQuery.getDocuments(req, res);
  } catch (error) {
    console.log("Some shit happend to get the projects ", error);
    res.status(500).send({ msg: "Some shit happend to get the projects" });
  }
};
//get project by ID
exports.getProjectById = async (req, res) => {
  try {
    utilsQuery.getDocumentById(req, res);
  } catch (error) {
    console.log("Shit happen in getProjectById ", error);
    res.status(500).send({ msg: "Something get wrong the project ID" });
  }
};
//update a project
exports.updateProject = async (req, res) => {
  const errors = utilsValidation.userDataValidation(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const id = req.params.id;
    utilsQuery.updateDocument(id, req, res);
  } catch (error) {
    console.log("Shit happend in put project ", error);
    res.status(500).send({ msg: "Some shit happend to update the project" });
  }
};
