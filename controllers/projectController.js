const Project = require("../models/Project");
const utilsValidation = require("../utils/validations");
exports.createProject = async (req, res) => {
  const errors = utilsValidation.userDataValidation(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    //create a new project
    const project = new Project(req.body);
    //save the creator of the project via JWT
    project.owner = req.user.id;
    await project.save();
    res.status(200).json(project);
  } catch (error) {
    console.log("Shit happend in createProject ", error);
    res.status(500).send("Shit happens in createProject :(");
  }
};
//get the projects of a current user

exports.getProjects = async (req, res) => {
  try {
    const { id } = req.user;
    const projects = await Project.find({ owner: id }).sort({
      registerDate: -1,
    });
    res.json({ projects });
  } catch (error) {
    console.log("Some shit happend to get the projects ", error);
    res.status(500).send({ mesg: "Some shit happend to get the projects" });
  }
};
