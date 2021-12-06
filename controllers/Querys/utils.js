const Project = require("../../models/Project");
exports.createDocument = async (req, res) => {
  //create a new project
  const project = new Project(req.body);
  //save the creator of the project via JWT
  project.owner = req.user.id;
  await project.save();
  res.status(200).json(project);
};
exports.getDocuments = async (req, res) => {
  const { id } = req.user;
  const projects = await Project.find({ owner: id }).sort({
    registerDate: -1,
  });
  res.json({ projects });
};
exports.getDocumentById = async (req, res) => {
  const idProject = req.params.id;
  const project = await Project.findById({ _id: idProject }, (err, doc) => {
    if (!err) return doc;
    return err;
  }).clone();
  console.log("This is the value of project ", project);
  !project
    ? res.status(404).json({ msg: "project not found" })
    : res.status(200).json({ project });
};
exports.updateDocument = async (id, req, res) => {
  const { nameProject } = req.body;
  const newProject = {};
  if (nameProject) {
    newProject.nameProject = nameProject;
  }
  //search the id
  let project = await Project.findById({ _id: id }).clone();
  if (!project)
    return res.status(404).json({ msg: "The projects does not exist" });
  //verify the owner of the project
  if (project.owner.toString() !== req.user.id) {
    return res.status(401).json({ msg: "User not authorized " });
  }
  //update the project
  project = await Project.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: newProject },
    { new: true }
  );
  res.json({ project });
};
