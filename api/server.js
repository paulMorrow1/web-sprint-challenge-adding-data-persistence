// build your server here and require it from index.js
const express = require("express");
const server = express();
const projectsRouter = require("./project/router");
const resourcesRouter = require("./resource/router");
const tasksRouter = require("./task/router");

server.use(express.json());

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", tasksRouter);

module.exports = server;
