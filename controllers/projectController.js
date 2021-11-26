const Project = require("../models/Project");
exports.createProject = async (req, res) => {
  try {
    //create a new project
    const project = new Project(req.body);
    await project.save();
    res.status(200).json(project);
  } catch (error) {
    console.log("Shit happend in createProject ", error);
    res.status(500).send("Shit happens in createProject :(");
  }
};
