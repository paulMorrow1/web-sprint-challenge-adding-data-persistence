// build your `Task` model here
const db = require("../../data/dbConfig");

function get(id) {
  const query = db("tasks as t");
  if (id) {
    return query
      .where("task_id", id)
      .join("projects as p", "t.project_id", "p.project_id")
      .first()
      .then((task) => {
        if (task) {
          console.log("task: ", task);
          return {
            ...task,
            task_completed: Boolean(task.task_completed),
            project_completed: Boolean(task.project_completed),
          };
        } else {
          return null;
        }
      });
  } else {
    return query
      .join("projects as p", "t.project_id", "p.project_id")
      .then((tasks) => {
        console.log("tasks: ", tasks);
        return tasks.map((task) => ({
          ...task,
          task_completed: Boolean(task.task_completed),
          project_completed: Boolean(task.project_completed),
        }));
      });
  }
}

function create(newTask) {
  return db("tasks")
    .insert(newTask)
    .then(([id]) => get(id));
}

module.exports = {
  get,
  create,
};
