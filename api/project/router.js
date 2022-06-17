// build your `/api/projects` router here
const router = require("express").Router();

const Project = require("./model");

router.get("/", async (req, res) => {
  const project = await Project.find();
});

module.exports = router;
