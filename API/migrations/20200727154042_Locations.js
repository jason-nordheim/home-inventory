const TABLE_NAME = "locations";

exports.up = function (knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments("id").primary();
    table.timestamps(true, true);
    table.integer("user_id").references("id").inTable("users")
    table.string("name", 200)
    table.string("street1")
    table.string("street2");
    table.string("city");
    table.string("state");
    table.string("zip", 10);
    table.string("type")
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};
