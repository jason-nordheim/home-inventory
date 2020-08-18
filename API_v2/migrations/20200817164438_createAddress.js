
exports.up = function(knex) {
  return knex.schema.createTable("address", (t) => {
    t.increments("id");
    t.string("name");
    t.string("street1");
    t.string("street2");
    t.string("city");
    t.string("state");
    t.string("zip");
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("address");
};
