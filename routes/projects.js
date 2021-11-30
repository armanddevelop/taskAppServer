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
    check("nameProject", "The name of the projetc is mandatory")
      .not()
      .isEmpty(),
  ],
  auth,
  projectController.createProject
);
//get the projects
//api/projects
router.get("/", auth, projectController.getProjects);

module.exports = router;
