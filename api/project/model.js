// build your `Project` model here
const db = require("../../data/dbConfig");

function get(id) {
  const query = db("projects");
  if (id) {
    return query
      .where("project_id", id)
      .first()
      .then((project) => {
        if (project) {
          return {
            ...project,
            project_completed: Boolean(project.project_completed),
          };
        } else {
          return null;
        }
      });
  } else {
    return query.then((projects) =>
      projects.map((project) => ({
        ...project,
        project_completed: Boolean(project.project_completed),
      }))
    );
  }
}

function create(newProject) {
  return db("projects")
    .insert(newProject)
    .then(([id]) => get(id));
}

module.exports = {
  get,
  create,
};
