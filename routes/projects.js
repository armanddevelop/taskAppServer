const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

//create projects
//api/projects
router.post(
  "/",
  [
    check("nameProject", "The name of the project is mandatory")
      .not()
      .isEmpty(),
  ],
  auth,
  projectController.createProject
);
//get the projects
//api/projects
router.get("/", auth, projectController.getProjects);
//get the project by id
//api/projects
router.get("/:id", auth, projectController.getProjectById);
//update the projects
//api/projects
router.put(
  "/:id",
  [
    check("nameProject", "The name of the project is mandatory")
      .not()
      .isEmpty(),
  ],
  auth,
  projectController.updateProject
);

module.exports = router;
