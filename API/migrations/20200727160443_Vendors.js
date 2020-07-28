const TABLE_NAME = "vendors";

exports.up = function (knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments("id").primary();
    table.timestamps(true, true);
    table.integer("created_by").references("id").inTable("users")
    table.string("name", 200).unique();
    table.string("email", 255)
    table.string("phone", 15);
    table.string("street1");
    table.string("street2");
    table.string("city")
    table.string("state")
    table.string("zip", 12) 
    table.text("description");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};
