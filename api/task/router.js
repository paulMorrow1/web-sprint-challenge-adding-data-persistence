// build your `/api/tasks` router here
const router = require("express").Router();
const Task = require("./model");

router.get("/", async (req, res) => {
  try {
    const task = await Task.get();
    res.json(task);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const payload = req.body;
    if (payload) {
      if (
        payload.hasOwnProperty("task_description") &&
        payload.hasOwnProperty("project_id")
      ) {
        const task = await Task.create(payload);
        res.json(task);
      } else {
        res
          .status(400)
          .json({ message: "missing task_description & project_id field" });
      }
    } else {
      res.status(400).json({ message: "missing task payload" });
    }
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

module.exports = router;
