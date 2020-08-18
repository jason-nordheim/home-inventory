exports.up = function (knex) {
  return knex.schema.createTable("location", (t) => {
    t.increments("id");
    t.string("name");
    t.string("type")
    t.integer("user_id").
    t.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("location");
};
