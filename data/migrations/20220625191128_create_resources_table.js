/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("resources", (tbl) => {
    tbl.increments("resource_id").primary();
    tbl.string("resource_name").unique().notNullable();
    tbl.text("resource_description");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("resources");
};
