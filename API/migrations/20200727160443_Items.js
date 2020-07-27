const TABLE_NAME = "items";

exports.up = function (knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments("id").primary();
    table.timestamps(true, true);
    table.string("name", 200).unique();
    table.float("estimated_value");
    table.date("purchased");
    table.text("description");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};
