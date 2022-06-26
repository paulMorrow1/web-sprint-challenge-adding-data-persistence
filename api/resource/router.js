// build your `/api/resources` router here
const router = require("express").Router();
const Resource = require("./model");

router.get("/", async (req, res) => {
  try {
    const resources = await Resource.get();
    res.json(resources);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const payload = req.body;
    if (payload) {
      const resources = await Resource.create(payload);
      res.json(resources);
    } else {
      res.status(400).json({ message: "could not create resource" });
    }
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

module.exports = router;
