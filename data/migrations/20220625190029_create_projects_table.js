/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("projects", (tbl) => {
    tbl.increments("project_id").primary();
    tbl.string("project_name", 128).unique().notNullable();
    tbl.text("project_description");
    tbl.boolean("project_completed");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("projects");
};
