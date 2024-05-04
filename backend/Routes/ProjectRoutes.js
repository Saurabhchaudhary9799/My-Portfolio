const express = require("express");
const { createProject } = require("../Controllers/ProjectControllers");

const router = express();

router.route("/").post(createProject)

module.exports = router