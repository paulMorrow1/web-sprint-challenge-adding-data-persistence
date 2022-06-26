// build your `/api/projects` router here
const router = require("express").Router();
const Project = require("./model");

router.get("/", async (req, res) => {
  try {
    const projects = await Project.get();
    res.json(projects);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const project = await Project.get(req.params.id);
    res.json(project);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const payload = req.body;
    if (payload) {
      if (payload.hasOwnProperty("project_name")) {
        const newProject = await Project.create(payload);
        res.json(newProject);
      } else {
        res.status(400).json({ message: "missing name field" });
      }
    } else {
      res.status(400).json({ message: "send me your dataz yo" });
    }
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

module.exports = router;
