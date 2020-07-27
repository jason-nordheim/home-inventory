const TABLE_NAME = "users";

exports.up = function (knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments("id").primary();
    table.timestamps(true, true);
    table.string("email", 200).unique();
    table.string("username").unique();
    table.string("password_digest");
    table.string("first", 100);
    table.string("last", 100);
    table.text("bio");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};
