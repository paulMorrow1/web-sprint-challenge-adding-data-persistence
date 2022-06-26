/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("projects").truncate();
  await knex("projects").insert([
    {
      project_name: "Build cupboard",
      project_description: "build some cupboards",
      project_completed: false,
    },
    {
      project_name: "Build desk",
      project_description: "build some desks",
      project_completed: false,
    },
    {
      project_name: "Build stool",
      project_description: "build some stools",
      project_completed: false,
    },
  ]);
  await knex("resources").truncate();
  await knex("resources").insert([
    {
      resource_name: "hammer",
      resource_description:
        "hard metal at end of stick meant for pounding nails in",
    },
    {
      resource_name: "screwdriver",
      resource_description: "stick with weird tip to spin screws in and out",
    },
  ]);

  await knex("tasks").truncate();
  await knex("tasks").insert([
    {
      task_description: "eat pizza",
      task_notes: "put pizza in mouth and chew",
      task_completed: false,
      project_id: 2,
    },
    {
      task_description: "drink beer",
      task_notes: "pour beer into mouth and let it slide down throat",
      task_completed: true,
      project_id: 1,
    },
  ]);

  await knex("project_resources").truncate();
};
