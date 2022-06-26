/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("tasks", (tbl) => {
    tbl.increments("task_id").primary();
    tbl.string("task_description", 128).unique().notNullable();
    tbl.text("task_notes");
    tbl.boolean("task_completed");
    tbl
      .integer("project_id")
      .unsigned()
      .references("project_id")
      .inTable("projects");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tasks");
};
