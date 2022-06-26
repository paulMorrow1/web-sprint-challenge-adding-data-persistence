// build your `Resource` model here
const db = require("../../data/dbConfig");

function get(id) {
  const query = db("resources");
  if (id) {
    return query
      .where("resource_id", id)
      .first()
      .then((resource) => {
        if (resource) {
          return resource;
        } else {
          return null;
        }
      });
  } else {
    return query;
  }
}

function create(newResource) {
  return db("resources")
    .insert(newResource)
    .then(([id]) => get(id));
}

module.exports = {
  get,
  create,
};
