/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("project_resources", (tbl) => {
    tbl.increments("project_resource_id").primary();
    tbl
      .integer("project_id")
      .unsigned()
      .references("project_id")
      .inTable("projects");
    tbl
      .integer("resource_id")
      .unsigned()
      .references("resource_id")
      .inTable("resources");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("project_resources");
};
